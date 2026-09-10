import os
import re
import json

output_dir = 'scraped/structured_content'
os.makedirs(output_dir, exist_ok=True)

# 1. Team Data
with open('scraped/data/team.json', 'r', encoding='utf-8') as f:
    team_data = json.load(f)

# 2. Portfolio Data
with open('scraped/data/portfolio.json', 'r', encoding='utf-8') as f:
    portfolio_data = json.load(f)

# 3. Clients Data
with open('scraped/data/clients.json', 'r', encoding='utf-8') as f:
    clients_data = json.load(f)

print(f"Loaded {len(team_data)} team members, {len(portfolio_data)} portfolio items, {len(clients_data)} clients.")

# Generate TEAM.md
with open(os.path.join(output_dir, 'TEAM.md'), 'w', encoding='utf-8') as f:
    f.write("# Incinc Media - Team\n\n")
    for m in team_data:
        f.write(f"## {m.get('name', '')}\n")
        f.write(f"- **Designation**: {m.get('designation', '')}\n")
        f.write(f"- **Photo**: `scraped/media/team/{m.get('photo', '')}`\n")
        if m.get('facebook'): f.write(f"- **Facebook**: {m.get('facebook')}\n")
        if m.get('instagram'): f.write(f"- **Instagram**: {m.get('instagram')}\n")
        if m.get('linkedin'): f.write(f"- **LinkedIn**: {m.get('linkedin')}\n")
        if m.get('twitter'): f.write(f"- **Twitter/X**: {m.get('twitter')}\n")
        f.write("\n")

# Generate PORTFOLIO.md
with open(os.path.join(output_dir, 'PORTFOLIO.md'), 'w', encoding='utf-8') as f:
    f.write("# Incinc Media - Portfolio Projects\n\n")
    for p in portfolio_data:
        f.write(f"## {p.get('name', '')}\n")
        f.write(f"{p.get('description', '')}\n\n")
        f.write(f"- **Thumbnail**: `scraped/media/portfolio/thumbnails/{p.get('thumbnail', '')}`\n")
        f.write(f"- **Full Image**: `scraped/media/portfolio/{p.get('image', '')}`\n")
        url = p.get('url', {})
        if url.get('web'): f.write(f"- **Website**: {url.get('web')}\n")
        if url.get('apk'): f.write(f"- **Android App**: {url.get('apk')}\n")
        if url.get('ios'): f.write(f"- **iOS App**: {url.get('ios')}\n")
        f.write("\n---\n\n")

# Generate CLIENTS.md
with open(os.path.join(output_dir, 'CLIENTS.md'), 'w', encoding='utf-8') as f:
    f.write(f"# Incinc Media - Clients ({len(clients_data)} Total)\n\n")
    f.write("| Client Name | Logo File |\n| --- | --- |\n")
    for c in clients_data:
        f.write(f"| {c.get('name', '')} | `scraped/media/clients/{c.get('logo', '')}` |\n")

print("Generated TEAM.md, PORTFOLIO.md, and CLIENTS.md")
