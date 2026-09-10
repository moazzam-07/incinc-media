import os
import urllib.request
import re
import json

base_url = 'https://incincmedia.com'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

os.makedirs('scraped/raw', exist_ok=True)
os.makedirs('scraped/assets', exist_ok=True)
os.makedirs('scraped/media', exist_ok=True)
os.makedirs('scraped/media/images', exist_ok=True)
os.makedirs('scraped/media/videos', exist_ok=True)
os.makedirs('scraped/media/documents', exist_ok=True)
os.makedirs('scraped/media/icons', exist_ok=True)

chunks = [
    'RefundPolicy-BXnazCup.js',
    'Contact-BQfMs5eB.js',
    'TNC-DFmu1UMT.js',
    'Services-B-O_iZXc.js',
    'components-IWzK19gV.js',
    'vendor-l1ilCLFk.js',
    'Portfolio-D7w4-zuz.js',
    'About-BFrMPApG.js',
    'PrivacyPolicy-Be39L9ya.js',
    'Clients-C_2330b3.js',
    'animations-DRFmc3CC.js',
    'index-DFknA04f.js'
]

# 1. Download all chunk JS files
print("--- Downloading JS Chunks ---")
for chunk in chunks:
    url = f"{base_url}/assets/js/{chunk}"
    dest = os.path.join('scraped/raw', chunk)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(dest, 'wb') as f:
            f.write(resp.read())
        print(f"Downloaded chunk: {chunk} ({os.path.getsize(dest)} bytes)")
    except Exception as e:
        print(f"Error downloading {chunk}: {e}")

# 2. Extract media references across ALL files in scraped/raw
all_media = set()
for fname in os.listdir('scraped/raw'):
    fpath = os.path.join('scraped/raw', fname)
    if os.path.isfile(fpath):
        with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            # Match quotes paths
            matches = re.findall(r'["\']([^"\'\s<>]+?\.(?:png|jpg|jpeg|svg|webp|gif|mp4|webm|mov|ico|pdf|eot|ttf|woff|woff2))["\']', content, re.IGNORECASE)
            for m in matches:
                # normalize path
                if m.startswith('http'):
                    all_media.add(m)
                elif m.startswith('/'):
                    all_media.add(m)
                elif m.startswith('./'):
                    all_media.add('/' + m[2:])
                elif m.startswith('assets/'):
                    all_media.add('/' + m)
                elif 'assets/' in m:
                    idx = m.find('assets/')
                    all_media.add('/' + m[idx:])

print(f"\n--- Discovered {len(all_media)} distinct media files ---")
for m in sorted(list(all_media)):
    print(m)

# 3. Download all discovered media files
print("\n--- Downloading Media Assets ---")
downloaded = []
failed = []

for media_path in sorted(list(all_media)):
    if media_path.startswith('http'):
        url = media_path
        # determine relative path
        fname = os.path.basename(media_path.split('?')[0])
    else:
        url = f"{base_url}{media_path}"
        fname = os.path.basename(media_path.split('?')[0])

    # categorize
    ext = os.path.splitext(fname)[1].lower()
    if ext in ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg']:
        dest_folder = 'scraped/media/images'
    elif ext in ['.mp4', '.webm', '.mov']:
        dest_folder = 'scraped/media/videos'
    elif ext in ['.pdf']:
        dest_folder = 'scraped/media/documents'
    elif ext in ['.ico', '.eot', '.ttf', '.woff', '.woff2']:
        dest_folder = 'scraped/media/icons'
    else:
        dest_folder = 'scraped/media'

    dest_file = os.path.join(dest_folder, fname)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(dest_file, 'wb') as out_f:
            out_f.write(resp.read())
        size = os.path.getsize(dest_file)
        print(f"Downloaded: {fname} -> {dest_file} ({size} bytes)")
        downloaded.append({'url': url, 'local': dest_file, 'size': size})
    except Exception as e:
        print(f"Failed {url}: {e}")
        failed.append({'url': url, 'error': str(e)})

print(f"\nDownloaded: {len(downloaded)}, Failed: {len(failed)}")
with open('scraped/download_report.json', 'w', encoding='utf-8') as f:
    json.dump({'downloaded': downloaded, 'failed': failed}, f, indent=2)

