import os
import re
import json

raw_dir = 'scraped/raw'

# Search for image paths, video paths, and URLs
media_patterns = [
    r'["\']([^"\']+\.(?:png|jpg|jpeg|svg|webp|gif|mp4|webm|mov|ico))["\']',
    r'url\(([^)]+)\)',
    r'["\'](/assets/[^"\']+)["\']',
    r'["\'](/images/[^"\']+)["\']',
    r'["\'](https?://[^"\']+\.(?:png|jpg|jpeg|svg|webp|gif|mp4|webm|mov))["\']'
]

found_media = set()
for fname in os.listdir(raw_dir):
    fpath = os.path.join(raw_dir, fname)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
        for pat in media_patterns:
            matches = re.findall(pat, content, re.IGNORECASE)
            for m in matches:
                clean = m.strip('\'" ')
                if any(clean.lower().endswith(ext) for ext in ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif', '.mp4', '.webm', '.mov', '.ico']) or '/assets/' in clean or '/images/' in clean:
                    found_media.add(clean)

print(f"Total media references found: {len(found_media)}")
with open('scraped/media_references.json', 'w', encoding='utf-8') as f:
    json.dump(sorted(list(found_media)), f, indent=2)

for item in sorted(list(found_media))[:30]:
    print(item)

