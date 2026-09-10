import os
import shutil
import json

os.makedirs('public/assets', exist_ok=True)
os.makedirs('src/data', exist_ok=True)

# 1. Copy media to public/assets
if os.path.exists('scraped/media'):
    for item in os.listdir('scraped/media'):
        s = os.path.join('scraped/media', item)
        d = os.path.join('public/assets', item)
        if os.path.isdir(s):
            if os.path.exists(d):
                shutil.rmtree(d)
            shutil.copytree(s, d)
            print(f"Copied directory: {item} -> public/assets/{item}")
        else:
            shutil.copy2(s, d)
            print(f"Copied file: {item} -> public/assets/{item}")

# Also copy primary logo to public/logo.png
if os.path.exists('scraped/media/images/logo.png'):
    shutil.copy2('scraped/media/images/logo.png', 'public/logo.png')
    print("Copied logo.png to public/logo.png")

# 2. Copy JSON data to src/data
if os.path.exists('scraped/data'):
    for item in os.listdir('scraped/data'):
        s = os.path.join('scraped/data', item)
        d = os.path.join('src/data', item)
        shutil.copy2(s, d)
        print(f"Copied data file: {item} -> src/data/{item}")

print("Assets and data synced to public/ and src/data/!")
