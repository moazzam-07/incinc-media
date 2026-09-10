import os
import re

with open('scraped/raw/index-DFknA04f.js', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Find definition of component f or where image prop is used
matches = re.finditer(r'function f\(|const f\s*=|const f=\w+=>', content)
for m in matches:
    print("Found f near:", m.start())
    print(content[m.start():m.start()+300])
    print("="*40)

# Also let's check what image path is rendered when `image:` prop is given
matches2 = re.finditer(r'\{image:', content)
for m in matches2:
    print("Found {image: near:", m.start())
    print(content[max(0, m.start()-100):min(len(content), m.end()+200)])
    print("="*40)

