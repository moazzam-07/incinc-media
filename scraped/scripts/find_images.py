import os
import re
import json

# Let's inspect components-IWzK19gV.js
with open('scraped/raw/components-IWzK19gV.js', 'r', encoding='utf-8', errors='ignore') as f:
    comp_code = f.read()

# Let's inspect index-DFknA04f.js
with open('scraped/raw/index-DFknA04f.js', 'r', encoding='utf-8', errors='ignore') as f:
    index_code = f.read()

# Let's look for client logos / images in comp_code and index_code
client_logos = re.findall(r'["\']([^"\']*(?:client|partner|logo|portfolio)[^"\']*\.(?:png|jpg|jpeg|webp|svg))["\']', comp_code + index_code, re.IGNORECASE)
print("Client / Portfolio images:", set(client_logos))

# Let's check how many images are referenced anywhere in index_code
all_imgs = re.findall(r'["\']([^"\']+\.(?:png|jpg|jpeg|webp|svg))["\']', comp_code + index_code, re.IGNORECASE)
print("All images found:", set(all_imgs))

