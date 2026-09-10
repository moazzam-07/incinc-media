import os
import re

for filename in ['components-IWzK19gV.js', 'index-DFknA04f.js', 'About-BFrMPApG.js', 'Services-B-O_iZXc.js', 'Portfolio-D7w4-zuz.js', 'Clients-C_2330b3.js', 'Contact-BQfMs5eB.js']:
    fpath = os.path.join('scraped/raw', filename)
    with open(fpath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    matches = re.finditer(r'clients\.jpg|portfolio\.jpg|febble-logo', content)
    for m in matches:
        start = max(0, m.start() - 150)
        end = min(len(content), m.end() + 150)
        print(f"[{filename}] match at {m.start()}:")
        print(content[start:end])
        print("="*40)

