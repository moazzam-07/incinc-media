import os
import re

with open('scraped/raw/index-DFknA04f.js', 'r', encoding='utf-8', errors='ignore') as f:
    code = f.read()

# Let's find sections in the homepage component
# Look for sections like slider, who we are, 6D, counters, CTA
matches = re.finditer(r'<section[^>]*>|id:"section-[^"]*"|id:"subheader"', code)
for m in matches:
    start = max(0, m.start() - 100)
    end = min(len(code), m.end() + 200)
    print("Section match:", code[start:end])
    print("="*50)

# Let's also find all text around counter / timer / numbers
counters = re.findall(r'(\d+)\s*\+?', code)
print("Counters / Numbers sample:", set(counters[:30]))
