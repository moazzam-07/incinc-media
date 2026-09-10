import os
import re

with open('scraped/text_content/home_slice.js', 'r', encoding='utf-8', errors='ignore') as f:
    code = f.read()

# Let's search for strings and JSX patterns in home_slice
# Print strings > 10 chars
raw_strings = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"|\'([^\'\\]*(?:\\.[^\'\\]*)*)\'', code)
meaningful = []
for s1, s2 in raw_strings:
    s = (s1 or s2).strip()
    if len(s) > 12 and not any(s.startswith(x) for x in ['col-', 'row', 'btn-', 'icon-', 'assets/', 'https://', 'http://', 'jarallax', 'full-height', 'bg-', 'text-', 'overlay', 'timer', 'data-']):
        meaningful.append(s)

print(f"Found {len(meaningful)} meaningful strings in home slice:")
for m in set(meaningful):
    print("-", m)
