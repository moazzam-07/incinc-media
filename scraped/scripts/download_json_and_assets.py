import os
import urllib.request
import json

base_url = 'https://incincmedia.com'
headers = {'User-Agent': 'Mozilla/5.0'}

os.makedirs('scraped/data', exist_ok=True)

possible_json = [
    'team.json',
    'portfolio.json',
    'clients.json',
    'services.json',
    'testimonials.json',
    'blogs.json',
    'faq.json',
    'contact.json',
    'about.json',
    'pricing.json'
]

found_data = {}

for j in possible_json:
    url = f"{base_url}/data/{j}"
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            content = resp.read().decode('utf-8')
            parsed = json.loads(content)
            found_data[j] = parsed
            with open(f'scraped/data/{j}', 'w', encoding='utf-8') as out_f:
                json.dump(parsed, out_f, indent=2)
            print(f"SUCCESS: /data/{j} found! ({len(parsed)} items if list)")
    except Exception as e:
        print(f"Not found / failed: /data/{j} ({e})")

# Let's inspect found data and collect images to download
images_to_download = []

# Team photos
if 'team.json' in found_data:
    for member in found_data['team.json']:
        if 'photo' in member and member['photo']:
            images_to_download.append({
                'url': f"{base_url}/assets/images/team/{member['photo']}",
                'dest': f"scraped/media/team/{member['photo']}"
            })

# Portfolio images
if 'portfolio.json' in found_data:
    for p in found_data['portfolio.json']:
        if 'thumbnail' in p and p['thumbnail']:
            images_to_download.append({
                'url': f"{base_url}/assets/images/portfolio/thumbnails/{p['thumbnail']}",
                'dest': f"scraped/media/portfolio/thumbnails/{p['thumbnail']}"
            })
        if 'image' in p and p['image']:
            images_to_download.append({
                'url': f"{base_url}/assets/images/portfolio/{p['image']}",
                'dest': f"scraped/media/portfolio/{p['image']}"
            })

# Client logos
if 'clients.json' in found_data:
    for c in found_data['clients.json']:
        if 'logo' in c and c['logo']:
            logo_val = c['logo']
            if logo_val.startswith('http'):
                url = logo_val
                dest_name = os.path.basename(logo_val.split('?')[0])
            else:
                url = f"{base_url}/assets/images/logo/{logo_val}"
                dest_name = logo_val
            images_to_download.append({
                'url': url,
                'dest': f"scraped/media/clients/{dest_name}"
            })

print(f"\nDiscovered {len(images_to_download)} team, portfolio, and client images to download!")

# Download all
os.makedirs('scraped/media/team', exist_ok=True)
os.makedirs('scraped/media/portfolio/thumbnails', exist_ok=True)
os.makedirs('scraped/media/portfolio', exist_ok=True)
os.makedirs('scraped/media/clients', exist_ok=True)

dl_count = 0
for item in images_to_download:
    os.makedirs(os.path.dirname(item['dest']), exist_ok=True)
    try:
        req = urllib.request.Request(item['url'], headers=headers)
        with urllib.request.urlopen(req) as resp, open(item['dest'], 'wb') as f:
            f.write(resp.read())
        dl_count += 1
        print(f"Downloaded: {item['dest']} ({os.path.getsize(item['dest'])} bytes)")
    except Exception as e:
        print(f"Failed {item['url']}: {e}")

print(f"Successfully downloaded {dl_count}/{len(images_to_download)} assets.")

