import os
import re

with open('scraped/raw/index-DFknA04f.js', 'r', encoding='utf-8', errors='ignore') as f:
    code = f.read()

matches = re.finditer(r'jsx[s]?\(["\']section["\'],\s*\{([^}]+)\}', code)
for m in matches:
    print("Found section props:", m.group(1))
    print("-" * 40)
