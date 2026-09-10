import os
import re
import json

raw_dir = 'scraped/raw'

# Let's inspect index-DFknA04f.js for text strings, routes, services, about info, etc.
index_js_path = os.path.join(raw_dir, 'index-DFknA04f.js')
with open(index_js_path, 'r', encoding='utf-8', errors='ignore') as f:
    code = f.read()

# Let's look for routes
routes = re.findall(r'path:\s*["\']([^"\']+)["\']', code)
print(f"Routes found: {routes}")

# Let's look for all chunk files loaded via dynamic import
chunk_matches = re.findall(r'["\'](/assets/js/[^"\']+\.js)["\']', code)
chunk_matches += re.findall(r'["\']\./([^"\']+\.js)["\']', code)
print(f"Other JS chunks: {set(chunk_matches)}")

# Let's look for strings containing emails, phone numbers, addresses, headings
emails = set(re.findall(r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+', code))
print(f"Emails: {emails}")

phones = set(re.findall(r'(\+?\d[\d -]{8,15}\d)', code))
print(f"Phones: {phones}")

# Let's search for social links
socials = set(re.findall(r'https?://(?:www\.)?(?:instagram|facebook|twitter|x|linkedin|youtube|vimeo|github|behance)\.com/[a-zA-Z0-9_.-]+/?', code))
print(f"Socials: {socials}")

