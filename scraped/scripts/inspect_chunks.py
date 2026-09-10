import os
import json

files = [
    'About-BFrMPApG.js',
    'Services-B-O_iZXc.js',
    'Clients-C_2330b3.js',
    'Portfolio-D7w4-zuz.js',
    'Contact-BQfMs5eB.js',
    'TNC-DFmu1UMT.js',
    'PrivacyPolicy-Be39L9ya.js',
    'RefundPolicy-BXnazCup.js'
]

for f in files:
    path = os.path.join('scraped/raw', f)
    with open(path, 'r', encoding='utf-8', errors='ignore') as fp:
        code = fp.read()
    print(f"=== {f} ({len(code)} bytes) ===")
    print(code[:1000])
    print("\n...\n")

