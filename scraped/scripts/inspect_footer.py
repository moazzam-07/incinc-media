import os

with open('scraped/raw/index-DFknA04f.js', 'r', encoding='utf-8', errors='ignore') as f:
    code = f.read()

pos = code.find('id:"footer"')
if pos == -1:
    pos = code.find('footer')

print(code[pos-200:pos+2500])
