import os
import re

with open('scraped/raw/index-DFknA04f.js', 'r', encoding='utf-8', errors='ignore') as f:
    code = f.read()

# Let's locate the homepage function
start_pos = code.find('className:"full-height relative owl-slide-wrapper')
end_pos = code.find('id:"footer"', start_pos)
if end_pos == -1:
    end_pos = start_pos + 40000

home_slice = code[start_pos-500:end_pos]
print("Slice length:", len(home_slice))

with open('scraped/text_content/home_slice.js', 'w', encoding='utf-8') as f:
    f.write(home_slice)

# Extract all text literals within home_slice
literals = re.findall(r'children:\s*["\']([^"\']+)["\']|children:\[([^\]]+)\]', home_slice)
print(f"Extracted {len(literals)} elements")
with open('scraped/text_content/home_extracted_literals.txt', 'w', encoding='utf-8') as f:
    for lit, arr in literals:
        if lit:
            f.write(f"TEXT: {lit}\n")
        if arr:
            sub = re.findall(r'["\']([^"\']+)["\']', arr)
            for s in sub:
                if len(s) > 3 and not s.startswith('col-') and not s.startswith('btn-'):
                    f.write(f"ARR_TEXT: {s}\n")

print("Saved home_slice.js and home_extracted_literals.txt")
