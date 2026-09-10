import os
import urllib.request
import json

base_url = 'https://incincmedia.com'
headers = {'User-Agent': 'Mozilla/5.0'}

extra_urls = [
    '/assets/brochure/Incinc Media.pdf',
    '/assets/images/background/our-office.jpg',
    '/assets/images/misc/partnership-handshake.jpg',
    '/assets/images/apple-icon-180x180.png',
    '/assets/images/android-icon-192x192.png',
    '/assets/images/favicon-96x96.png',
    '/assets/images/favicon-32x32.png',
    '/assets/images/favicon-16x16.png',
    '/assets/images/manifest.json'
]

for item in extra_urls:
    fname = os.path.basename(item)
    url = f"{base_url}{item.replace(' ', '%20')}"
    ext = os.path.splitext(fname)[1].lower()
    if ext in ['.pdf']:
        folder = 'scraped/media/documents'
    elif ext in ['.ico', '.png', '.jpg', '.webp']:
        folder = 'scraped/media/images'
    else:
        folder = 'scraped/media'
    
    dest = os.path.join(folder, fname)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(dest, 'wb') as f:
            f.write(resp.read())
        print(f"Downloaded extra: {fname} ({os.path.getsize(dest)} bytes)")
    except Exception as e:
        print(f"Not found / failed: {url} ({e})")

