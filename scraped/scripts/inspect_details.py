import os
import json

with open('scraped/raw/components-IWzK19gV.js', 'r', encoding='utf-8', errors='ignore') as f:
    comp = f.read()

print(f"=== components-IWzK19gV.js length: {len(comp)} ===")
# Let's search for image references or data arrays in components-IWzK19gV.js
import re
images_in_comp = re.findall(r'["\']([^"\']+\.(?:png|jpg|jpeg|webp|svg))["\']', comp)
print("Images in components:", set(images_in_comp))

# Let's inspect About-BFrMPApG.js completely
with open('scraped/raw/About-BFrMPApG.js', 'r', encoding='utf-8', errors='ignore') as f:
    about = f.read()
print("\n=== About-BFrMPApG.js ===")
print(about)

# Let's inspect Services-B-O_iZXc.js completely
with open('scraped/raw/Services-B-O_iZXc.js', 'r', encoding='utf-8', errors='ignore') as f:
    services = f.read()
print("\n=== Services-B-O_iZXc.js ===")
print(services)

