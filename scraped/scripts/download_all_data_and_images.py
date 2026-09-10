import os
import urllib.request
import json

base_url = 'https://incincmedia.com'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://incincmedia.com/'
}

os.makedirs('scraped/data', exist_ok=True)
os.makedirs('scraped/media/team', exist_ok=True)
os.makedirs('scraped/media/portfolio/thumbnails', exist_ok=True)
os.makedirs('scraped/media/portfolio', exist_ok=True)
os.makedirs('scraped/media/clients', exist_ok=True)

# 1. Fetch JSON files
data_files = ['portfolio.json', 'clients.json', 'team.json']
data_results = {}

for df in data_files:
    url = f"{base_url}/data/{df}"
    dest = f"scraped/data/{df}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            raw = resp.read().decode('utf-8')
            parsed = json.loads(raw)
            data_results[df] = parsed
            with open(dest, 'w', encoding='utf-8') as f:
                json.dump(parsed, f, indent=2)
            print(f"Successfully downloaded {df} ({len(parsed)} items)")
    except Exception as e:
        print(f"Failed {df}: {e}")

# 2. Collect image download list
images_to_dl = []

if 'portfolio.json' in data_results:
    for item in data_results['portfolio.json']:
        if item.get('thumbnail'):
            t_url = f"{base_url}/assets/images/portfolio/thumbnails/{item['thumbnail'].replace(' ', '%20')}"
            t_dest = os.path.join('scraped/media/portfolio/thumbnails', item['thumbnail'])
            images_to_dl.append((t_url, t_dest))
        if item.get('image'):
            i_url = f"{base_url}/assets/images/portfolio/{item['image'].replace(' ', '%20')}"
            i_dest = os.path.join('scraped/media/portfolio', item['image'])
            images_to_dl.append((i_url, i_dest))

if 'clients.json' in data_results:
    for item in data_results['clients.json']:
        logo = item.get('logo', '')
        if logo:
            if logo.startswith('http'):
                l_url = logo
                l_name = os.path.basename(logo.split('?')[0])
            else:
                l_url = f"{base_url}/assets/images/logo/{logo.replace(' ', '%20')}"
                l_name = logo
            l_dest = os.path.join('scraped/media/clients', l_name)
            images_to_dl.append((l_url, l_dest))

if 'team.json' in data_results:
    for item in data_results['team.json']:
        if item.get('photo'):
            p_url = f"{base_url}/assets/images/team/{item['photo'].replace(' ', '%20')}"
            p_dest = os.path.join('scraped/media/team', item['photo'])
            images_to_dl.append((p_url, p_dest))

print(f"\nTotal media files to download from data JSONs: {len(images_to_dl)}")

# 3. Download all collected images
headers_img = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': 'https://incincmedia.com/'
}

success = 0
for url, dest in images_to_dl:
    try:
        req = urllib.request.Request(url, headers=headers_img)
        with urllib.request.urlopen(req) as resp, open(dest, 'wb') as f:
            f.write(resp.read())
        size = os.path.getsize(dest)
        print(f"Downloaded {os.path.basename(dest)} ({size} bytes)")
        success += 1
    except Exception as e:
        print(f"Failed {url}: {e}")

print(f"\nCompleted downloading {success}/{len(images_to_dl)} files.")

