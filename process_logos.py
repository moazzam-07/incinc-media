import os
import numpy as np
from PIL import Image
from collections import deque

INPUT_DIR = r"c:\Users\MOAZZAM\coding\incinc_media\public\assets\clients"
OUTPUT_DIR = r"c:\Users\MOAZZAM\coding\incinc_media\public\assets\clients-transparent"

os.makedirs(OUTPUT_DIR, exist_ok=True)

def process_logo(file_name):
    input_path = os.path.join(INPUT_DIR, file_name)
    base_name = os.path.splitext(file_name)[0]
    output_path = os.path.join(OUTPUT_DIR, f"{base_name}.png")

    try:
        with Image.open(input_path) as raw_img:
            img = raw_img.convert("RGBA")
            w, h = img.size
            arr = np.array(img, dtype=np.float32)

            # 1. Check if already transparent in corners
            corner_indices = [(0, 0), (0, w - 1), (h - 1, 0), (h - 1, w - 1)]
            corner_alphas = [arr[y, x, 3] for y, x in corner_indices]

            if any(a < 30 for a in corner_alphas):
                # Image already has alpha transparency
                out = img
            else:
                # 2. Sample outer border to determine background color
                border_pixels = []
                border_pixels.extend(arr[0, :, :3])
                border_pixels.extend(arr[h - 1, :, :3])
                border_pixels.extend(arr[:, 0, :3])
                border_pixels.extend(arr[:, w - 1, :3])
                border_pixels = np.array(border_pixels)

                bg_color = np.median(border_pixels, axis=0)

                # 3. Euclidean distance in RGB
                diff = np.sqrt(np.sum((arr[:, :, :3] - bg_color) ** 2, axis=2))

                # 4. BFS flood fill from border pixels
                t_inner = 18.0
                t_outer = 48.0

                visited = np.zeros((h, w), dtype=bool)
                is_bg_connected = np.zeros((h, w), dtype=bool)
                queue = deque()

                # Seed queue with border pixels close to background color
                for x in range(w):
                    for y in [0, h - 1]:
                        if diff[y, x] <= t_outer and not visited[y, x]:
                            visited[y, x] = True
                            queue.append((y, x))
                for y in range(h):
                    for x in [0, w - 1]:
                        if diff[y, x] <= t_outer and not visited[y, x]:
                            visited[y, x] = True
                            queue.append((y, x))

                while queue:
                    cy, cx = queue.popleft()
                    is_bg_connected[cy, cx] = True
                    for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                        ny, nx = cy + dy, cx + dx
                        if 0 <= ny < h and 0 <= nx < w and not visited[ny, nx]:
                            visited[ny, nx] = True
                            if diff[ny, nx] <= t_outer:
                                queue.append((ny, nx))

                # 5. Compute alpha
                alpha = np.ones((h, w), dtype=np.float32)
                # Outer connected background gets alpha according to gradient
                bg_mask = is_bg_connected
                alpha[bg_mask] = np.clip(
                    (diff[bg_mask] - t_inner) / (t_outer - t_inner), 0.0, 1.0
                )

                # 6. Decontaminate RGB color on semi-transparent fringe
                foreground = arr[:, :, :3].copy()
                fringe_mask = bg_mask & (alpha > 0.02) & (alpha < 0.98)
                if np.any(fringe_mask):
                    for c in range(3):
                        foreground[fringe_mask, c] = np.clip(
                            (
                                arr[fringe_mask, c]
                                - (1.0 - alpha[fringe_mask]) * bg_color[c]
                            )
                            / np.maximum(alpha[fringe_mask], 0.05),
                            0.0,
                            255.0,
                        )

                # Assemble RGBA
                result = np.dstack([foreground, alpha * 255.0])
                out = Image.fromarray(result.astype(np.uint8), mode="RGBA")

            # 7. Auto-crop empty transparent border with subtle padding
            bbox = out.getbbox()
            if bbox:
                pad = 10
                bbox = (
                    max(0, bbox[0] - pad),
                    max(0, bbox[1] - pad),
                    min(out.width, bbox[2] + pad),
                    min(out.height, bbox[3] + pad),
                )
                out = out.crop(bbox)

            out.save(output_path, format="PNG", optimize=True)
            print(f"[OK] {file_name} -> {output_path} ({out.size[0]}x{out.size[1]})")
            return True

    except Exception as e:
        print(f"[ERROR] {file_name}: {e}")
        return False

def main():
    files = [
        f
        for f in os.listdir(INPUT_DIR)
        if os.path.isfile(os.path.join(INPUT_DIR, f))
        and not f.startswith(".")
        and f.lower().endswith((".png", ".jpg", ".jpeg", ".webp"))
    ]
    print(f"Starting processing of {len(files)} logos...")
    success_count = 0
    for f in files:
        if process_logo(f):
            success_count += 1
    print(f"Completed: {success_count}/{len(files)} logos processed successfully.")

if __name__ == "__main__":
    main()
