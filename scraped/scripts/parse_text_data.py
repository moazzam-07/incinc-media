import os
import re
import json

raw_dir = 'scraped/raw'
output_dir = 'scraped/text_content'
os.makedirs(output_dir, exist_ok=True)

# Function to extract readable strings and JSX text from minified JS
def extract_strings_from_js(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Extract string literals
    # We want meaningful strings, avoiding short tokens
    literals = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"|\'([^\'\\]*(?:\\.[^\'\\]*)*)\'|`([^`\\]*(?:\\.[^`\\]*)*)`', content)
    clean_strings = []
    for l1, l2, l3 in literals:
        s = l1 or l2 or l3
        s = s.strip()
        # Filter out code identifiers, css classes, svg paths
        if len(s) > 15 and not s.startswith('M') and not s.startswith('http') and not s.startswith('/') and not s.startswith('rgba') and not s.startswith('matrix') and not s.startswith('calc'):
            # clean escape characters
            s = s.encode('utf-8', 'ignore').decode('unicode_escape', errors='ignore')
            clean_strings.append(s)
    return clean_strings

summary = {}
for fname in sorted(os.listdir(raw_dir)):
    if fname.endswith('.js'):
        fpath = os.path.join(raw_dir, fname)
        strings = extract_strings_from_js(fpath)
        summary[fname] = strings
        out_txt = os.path.join(output_dir, f"{os.path.splitext(fname)[0]}.txt")
        with open(out_txt, 'w', encoding='utf-8') as f:
            for s in strings:
                f.write(s + '\n---\n')

with open(os.path.join(output_dir, 'all_extracted_strings.json'), 'w', encoding='utf-8') as f:
    json.dump(summary, f, indent=2)

print("Parsed all JS files into scraped/text_content/")

