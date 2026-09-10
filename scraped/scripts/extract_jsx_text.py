import os
import re
import json

# Let's inspect Contact-BQfMs5eB.js specifically for text
with open('scraped/raw/Contact-BQfMs5eB.js', 'r', encoding='utf-8', errors='ignore') as f:
    contact_code = f.read()

# Let's inspect index-DFknA04f.js specifically for homepage text
with open('scraped/raw/index-DFknA04f.js', 'r', encoding='utf-8', errors='ignore') as f:
    index_code = f.read()

# Find strings in Contact
contact_strings = re.findall(r'>([^<>{}]+)<', contact_code)
print("Contact strings sample:")
for s in [s.strip() for s in contact_strings if len(s.strip()) > 3][:30]:
    print("-", s)

# Find strings in Home
index_strings = re.findall(r'>([^<>{}]+)<', index_code)
print("\nHome / General strings sample:")
for s in [s.strip() for s in index_strings if len(s.strip()) > 3][:30]:
    print("-", s)
