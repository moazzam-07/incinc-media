import os

with open('scraped/text_content/home_slice.js', 'r', encoding='utf-8', errors='ignore') as f:
    code = f.read()

pos = code.find('owl-slide-wrapper')
if pos != -1:
    print(code[pos:pos+2500])
