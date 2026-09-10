import os
import re
import json

def extract_jsx_children(code):
    # Match patterns like children:"...", children:'...' or children:[...]
    matches = re.findall(r'children:\s*["\']([^"\']{5,})["\']', code)
    # Also find arrays of children
    array_matches = re.findall(r'children:\s*\[([^\]]+)\]', code)
    for arr in array_matches:
        sub = re.findall(r'["\']([^"\']{5,})["\']', arr)
        matches.extend(sub)
    return matches

for fname in ['Contact-BQfMs5eB.js', 'index-DFknA04f.js']:
    with open(os.path.join('scraped/raw', fname), 'r', encoding='utf-8', errors='ignore') as f:
        code = f.read()
    results = extract_jsx_children(code)
    clean = []
    for r in results:
        # filter out CSS styles, SVG paths, code identifiers
        if not re.match(r'^[0-9a-fA-F#\s,;%()]+$', r) and not r.startswith('calc') and not r.startswith('matrix') and not r.startswith('M') and 'px' not in r[:5]:
            clean.append(r)
    print(f"=== {fname} ({len(clean)} text fragments) ===")
    for c in sorted(list(set(clean)), key=lambda x: len(x), reverse=True)[:25]:
        print(f"- {c}")
