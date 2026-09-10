import os

for f in ['TNC-DFmu1UMT.js', 'PrivacyPolicy-Be39L9ya.js', 'RefundPolicy-BXnazCup.js']:
    p = os.path.join('scraped/raw', f)
    with open(p, 'r', encoding='utf-8') as fp:
        print(f"=== {f} ===")
        print(fp.read())
        print("\n")
