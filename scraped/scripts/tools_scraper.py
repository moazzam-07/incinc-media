import urllib.request
import re
import os
import json

base_url = 'https://incincmedia.com'
os.makedirs('scraped/raw', exist_ok=True)

files = [
    '/assets/js/index-DFknA04f.js',
    '/assets/js/components-IWzK19gV.js',
    '/assets/js/animations-DRFmc3CC.js',
    '/assets/js/vendor-l1ilCLFk.js',
    '/js/app.js',
    '/assets/css/index-DtFs_yLO.css'
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

for f in files:
    fname = os.path.basename(f)
    url = base_url + f
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp, open(os.path.join('scraped/raw', fname), 'wb') as out_f:
            out_f.write(resp.read())
        print(f"Downloaded {fname}, size: {os.path.getsize(os.path.join('scraped/raw', fname))} bytes")
    except Exception as e:
        print(f"Failed {f}: {e}")

