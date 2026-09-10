import os
import re

with open('scraped/text_content/home_slice.js', 'r', encoding='utf-8', errors='ignore') as f:
    code = f.read()

pos = code.find('feature-box-main')
if pos != -1:
    print(code[pos-200:pos+3000])
