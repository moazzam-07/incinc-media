import os
import urllib.request

base_url = 'https://incincmedia.com'
headers = {'User-Agent': 'Mozilla/5.0'}

nav_images = [
    'home.jpg',
    'about.jpg',
    'services.jpg',
    'clients.jpg',
    'portfolio.jpg',
    'contact.jpg',
    'blog.jpg',
    'download.jpg'
]

os.makedirs('scraped/media/navigation', exist_ok=True)

for img in nav_images:
    url = f"{base_url}/assets/images/navigation/{img}"
    dest = os.path.join('scraped/media/navigation', img)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(dest, 'wb') as f:
            f.write(resp.read())
        print(f"Downloaded navigation image: {img} ({os.path.getsize(dest)} bytes)")
    except Exception as e:
        print(f"Failed {img}: {e}")

