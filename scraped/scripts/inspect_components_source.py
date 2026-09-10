with open('scraped/raw/components-IWzK19gV.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Let's save a beautified version or look at the functions exported
import re

# Split by export or functions
print("Length of components-IWzK19gV.js:", len(text))
with open('scraped/text_content/components-beautified.js', 'w', encoding='utf-8') as f:
    # simple formatting
    formatted = text.replace(';', ';\n').replace('{', '{\n').replace('}', '\n}\n')
    f.write(formatted)

print("Saved beautified components to scraped/text_content/components-beautified.js")

