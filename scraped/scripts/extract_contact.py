import os
import re

def extract_contact_info():
    with open('scraped/raw/Contact-BQfMs5eB.js', 'r', encoding='utf-8', errors='ignore') as f:
        contact_js = f.read()
    
    with open('scraped/raw/index-DFknA04f.js', 'r', encoding='utf-8', errors='ignore') as f:
        index_js = f.read()

    combined = contact_js + "\n" + index_js

    # Find address, phone, email, working hours
    print("=== SEARCHING STRINGS IN CONTACT & INDEX ===")
    
    # regex for addresses, emails, phone numbers
    emails = set(re.findall(r'[\w\.-]+@[\w\.-]+\.\w+', combined))
    print("Emails found:", emails)

    # phone patterns
    phones = set(re.findall(r'\+91[\s\d-]+|\b\d{10}\b|\(\+?\d+\)[\s\d-]+', combined))
    print("Phones found:", phones)

    # social links
    socials = set(re.findall(r'https?://(?:www\.)?(?:instagram|facebook|linkedin|twitter|x|youtube)\.com/[^\s"\'<>]+', combined))
    print("Socials found:", socials)

    # form actions / endpoints
    apis = set(re.findall(r'https?://[^\s"\'<>]*(?:api|contact|mail|form)[^\s"\'<>]*', combined))
    print("API endpoints found:", apis)

extract_contact_info()

