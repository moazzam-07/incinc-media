import os
import json

base_dir = 'scraped'
catalog = {
    'summary': {},
    'categories': {}
}

total_files = 0
total_size = 0

for root, dirs, files in os.walk(base_dir):
    for f in files:
        fpath = os.path.join(root, f).replace('\\', '/')
        size = os.path.getsize(fpath)
        total_files += 1
        total_size += size
        
        # Determine category
        parts = fpath.split('/')
        cat = parts[1] if len(parts) > 1 else 'root'
        subcat = parts[2] if len(parts) > 2 else 'general'
        cat_key = f"{cat}/{subcat}"
        
        if cat_key not in catalog['categories']:
            catalog['categories'][cat_key] = []
        catalog['categories'][cat_key].append({
            'path': fpath,
            'name': f,
            'size_bytes': size,
            'size_kb': round(size / 1024, 2)
        })

catalog['summary'] = {
    'total_files': total_files,
    'total_size_mb': round(total_size / (1024 * 1024), 2),
    'categories_count': len(catalog['categories'])
}

# Write CATALOG.md
with open('scraped/CATALOG.md', 'w', encoding='utf-8') as f:
    f.write("# Incinc Media - Complete Assets & Content Catalog\n\n")
    f.write(f"- **Total Files Scraped & Organized**: {total_files}\n")
    f.write(f"- **Total Asset Payload**: {catalog['summary']['total_size_mb']} MB\n\n")
    
    f.write("## Key Assets Highlights\n")
    f.write("- **Primary Logo (PNG)**: `scraped/media/images/logo.png`\n")
    f.write("- **Logo (JPG)**: `scraped/media/images/logo.jpg`\n")
    f.write("- **Febble Spot Brand Logo**: `scraped/media/images/febble-logo.webp`\n")
    f.write("- **Official Brochure (PDF)**: `scraped/media/documents/Incinc Media.pdf`\n")
    f.write("- **Background Reel Video (MP4)**: `scraped/media/videos/video-t_Mub37E.mp4`\n")
    f.write("- **Office & Culture Photography**: `scraped/media/images/our-office.jpg`, `about-office.jpg`, `about-team.jpg`\n")
    f.write("- **6D Process Assets**: `discover.jpg`, `define.jpg`, `design.jpg`, `develop.jpeg`, `deploy.jpeg`, `deliver.jpeg`\n")
    f.write("- **Navigation Preview Cards**: 8 cards in `scraped/media/navigation/`\n")
    f.write("- **Team Executive Portraits**: 7 team members in `scraped/media/team/`\n")
    f.write("- **Client Logos**: 89 brand logos in `scraped/media/clients/`\n")
    f.write("- **Portfolio Showcases**: 16 full-page showcases & 16 thumbnails in `scraped/media/portfolio/`\n\n")
    
    f.write("## Structured Text Content Documentation\n")
    f.write("- `scraped/structured_content/01_HOMEPAGE.md` — All homepage copy, pillars, counters, CTAs, video callouts\n")
    f.write("- `scraped/structured_content/02_ABOUT.md` — Company origin (2020 Mumbai), vision, mission, story\n")
    f.write("- `scraped/structured_content/03_SERVICES.md` — Complete catalog of 11 core services & descriptions\n")
    f.write("- `scraped/structured_content/PORTFOLIO.md` — 16 client case studies, descriptions, live links, Android/iOS apps\n")
    f.write("- `scraped/structured_content/CLIENTS.md` — 89 national & international clients indexed with logo paths\n")
    f.write("- `scraped/structured_content/TEAM.md` — Team roster, designations, social profiles, photos\n")
    f.write("- `scraped/structured_content/06_CONTACT.md` — Office address (Vikhroli West, Mumbai), emails, phones, social links\n")
    f.write("- `scraped/structured_content/07_LEGAL_PAGES.md` — Terms & Conditions, Privacy Policy, Refund Policy\n\n")
    
    f.write("## Complete Breakdown by Category\n\n")
    for cat_name, items in sorted(catalog['categories'].items()):
        f.write(f"### `{cat_name}` ({len(items)} items)\n")
        f.write("| File Name | Path | Size |\n| --- | --- | ---: |\n")
        for it in sorted(items, key=lambda x: x['name']):
            f.write(f"| {it['name']} | `{it['path']}` | {it['size_kb']} KB |\n")
        f.write("\n")

print(f"Catalog successfully written. Total {total_files} files, {catalog['summary']['total_size_mb']} MB.")
