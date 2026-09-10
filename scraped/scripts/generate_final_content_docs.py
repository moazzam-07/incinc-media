import os
import json

out_dir = 'scraped/structured_content'
os.makedirs(out_dir, exist_ok=True)

# 1. HOMEPAGE.md
homepage_content = """# Incinc Media - Homepage Content

## 1. Hero Section
- **Badge / Eyebrow**: Premier Digital Solutions & Creative Services
- **Headline**: "Bring your vision to life with Incinc Media's comprehensive digital expertise"
- **Subheadline**: "Your dream. Our expertise. A future built together."
- **Visual Media**:
  - Background Video: `scraped/media/videos/video-t_Mub37E.mp4`
  - Hero Slider Slides:
    - Slide 1: `scraped/media/images/1.jpg`
    - Slide 2: `scraped/media/images/2.jpg`
- **Call to Action Buttons**:
  - "Explore Services" -> `/services`
  - "Contact Us" -> `/contact`

---

## 2. Four Operational Pillars
1. **Planning**:
   - *Subtitle*: "An Hour of planning can save you hours of doing."
   - *Description*: "Before We actually start the trip. We first need to consider all the facts carefully. Whether it’s website designing, making your next android app, or simply heading for a meeting, we need to plan out all the variances for a smooth trip to success."
2. **Design**:
   - *Subtitle*: "Good design is Good Business."
   - *Description*: "Design ensures functionality, attention, elegance, and appropriate application of ethics. We aim to design that ensures better reliability and less waste of resources."
3. **Develop**:
   - *Subtitle*: "It's only when we develop others that we permanently succeed."
   - *Description*: "Highly administered workforce ensures the development of high-scale products (website, apps) that deliver uninterrupted service for eons."
4. **Deploy**:
   - *Subtitle*: "You don't deploy forces in Harm's way without knowing what's happening."
   - *Description*: "We Continuously monitor the applications, websites, IoT that we develop to keep on scaling the workflow they are designed for and ensure you about the smooth functioning of the services."

---

## 3. About Teaser ("We Bring Your Vision to Life")
- **Heading**: "We Bring Your Vision to Life"
- **Media**: `scraped/media/images/our-office.jpg`
- **Copy**:
  "At Incinc, we transform ideas into powerful digital experiences. Whether you’re building a brand from scratch or scaling to the next level, we blend creativity, strategy, and technology to make it happen beautifully and effectively. We don’t just execute projects—we craft experiences that inspire, engage, and convert. Our team is driven by innovation, attention to detail, and an obsession with excellence."

---

## 4. Reach & Global Expertise
- **Heading**: "Our Reach & Expertise"
- **Subheading**: "We've Partnered with 300+ Clients Nationally & Internationally"
- **Copy**:
  "Incinc Media is a premier digital solutions company specializing in website design, application development, digital marketing, and creative services. With over 300 clients served globally, we deliver high-quality, tailored platforms that drive growth. Our expert team leverages cutting-edge technology and creative strategy to ensure you receive innovative and effective solutions. Let us put our expertise to work for you."
- **Featured Video**:
  - YouTube Embed: `https://www.youtube.com/embed/SDm5-WkNjY8`
  - Title: "Incinc Media Intro"

---

## 5. Metrics & Proven Impact (Counters)
- **150+** Projects Done
- **27+** Ongoing Projects
- **135+** Satisfied Customers
- **170+** Active Client Engagements (300+ Global Network)

---

## 6. Proprietary Product Spotlight: Febble Spot
- **Product**: Febble Spot (Smart NFC Enabled Digital Business Card)
- **Logo**: `scraped/media/images/febble-logo.webp`
- **Background Banner**: `scraped/media/images/partnership-handshake.jpg`
- **Heading**: "For Smart NFC Enabled Digital Business Card Get Our Product."
- **Subheading**: "Connect faster. Impress smarter. Febble Spot"
- **URL**: `https://febblespot.com`

---

## 7. The 6D Process
A proprietary 6-step project delivery methodology:
1. **Discover**: "During this stage, we take the time to understand our client's requirements, goals, and vision." (Asset: `scraped/media/images/discover.jpg`)
2. **Define**: "Based on the information gathered in the discovery stage, we define the project's scope and objectives." (Asset: `scraped/media/images/define.jpg`)
3. **Design**: "We create detailed designs that outline how the project will be executed, taking into account the latest technologies and trends." (Asset: `scraped/media/images/design.jpg`)
4. **Develop**: "Our team of experts works to turn the designs into a functional product, ensuring that it meets all requirements." (Asset: `scraped/media/images/develop.jpeg`)
5. **Deploy**: "We work closely with our clients to deploy the product, making sure that it is configured correctly and ready for use." (Asset: `scraped/media/images/deploy.jpeg`)
6. **Deliver**: "Our 6D process concludes with the delivery of a top-quality product that meets our client's needs and exceeds their expectations." (Asset: `scraped/media/images/deliver.jpeg`)

---

## 8. Video Callout & Contact CTA
- **Background Video**: `scraped/media/videos/video-t_Mub37E.mp4`
- **Headline**: "Be open and feel free to contact us"
- **Copy**:
  "If you're looking for a reliable and experienced IT partner, we would love to hear from you. Incinc Media has a proven track record of delivering top-notch solutions to clients both nationally and internationally. Our team of experts is dedicated to helping you achieve your goals and we believe that we have the expertise and experience to help you succeed. Don't hesitate to reach out to us for more information or to start a conversation about your next project. We're here to help, so feel free to contact us today!"
- **Action Box**:
  - Question: "Got a problem?"
  - Button: "Let's talk" -> `/contact`
"""

with open(os.path.join(out_dir, '01_HOMEPAGE.md'), 'w', encoding='utf-8') as f:
    f.write(homepage_content)

# 2. ABOUT.md
about_content = """# Incinc Media - About Page Content

## Header / Subheader
- **Page Title**: About Us
- **Banner Image**: `scraped/media/images/banner-bg.jpg`
- **Meta / Subtitle**: "Learn about Incinc Media, a leading IT company providing innovative solutions in website design, app development, and cyber security. Contact us for expert assistance."

---

## Who We Are
- **Side Image**: `scraped/media/images/about-team.jpg`
- **Story & Foundation**:
  "Founded in **2020 in Mumbai, India**, **Incinc Media** is an India-based digital solutions and creative services company dedicated to helping businesses build impactful market presences. We specialize in creating remarkable websites and applications, along with providing digital marketing, company branding, and graphic design for the services our customers care for.
  
  We have worked from the ground level up, assisting companies in developing a phenomenal market presence by creating exceptional digital and creative platforms where their clients interact with them and have vivid experiences. We believe that greatness is the result of many small things done exceptionally well."

---

## Vision & Mission
- **Our Vision**:
  "To be recognized as the leading digital partner for businesses worldwide, transforming potential into undeniable market presence. We envision a future where every client we touch achieves digital supremacy through our masterful and comprehensive work."
  
- **Our Mission**:
  "Our mission is to deliver exceptional digital and creative solutions from powerful applications and compelling branding to results-driven marketing by approaching every project with flawless execution and strategic conceptualization. By consistently elevating our clients' standards, we ensure their growth drives ours."

- **Media Feature**:
  - Image: `scraped/media/images/about-office.jpg`
  - Video Modal Link: `https://www.youtube.com/watch?v=zAs18hlGOz4`

---

## Core Team Roster
See `TEAM.md` for full profiles, photos, and social links.
"""

with open(os.path.join(out_dir, '02_ABOUT.md'), 'w', encoding='utf-8') as f:
    f.write(about_content)

# 3. SERVICES.md
services_content = """# Incinc Media - Services (Complete Catalog)

## Header / Subheader
- **Title**: Our Services
- **Banner Image**: `scraped/media/images/banner-bg.jpg`
- **Subtitle**: "Discover our comprehensive IT services, including website design, app development, and cyber security. Contact us to bring your vision to life."

---

## Full Service Offerings (11 Core Disciplines)

### 1. Application Development (App)
- **Summary**: Custom mobile and web applications engineered for scalability and performance.
- **Description**: Transform your business operations and customer interactions with custom mobile and web applications. We design, develop, and deploy intuitive, scalable apps tailored to your industry—whether it's e-commerce, delivery and logistics, utility tools, office or attendance management platforms, or any innovative idea you envision. We turn your concepts into powerful, high-performing software solutions.

### 2. Custom Software Solutions
- **Summary**: Bespoke business tools, ERP, CRM, and management architectures.
- **Description**: Need a specialized tool? We develop bespoke software solutions to solve your unique business challenges. This includes creating essential management systems like CRM (Customer Relationship Management), LMS (Learning Management Systems), Billing Software, Hospital/Clinic Management systems, Gym/Fitness studio software, and more. Our goal is to automate complex workflows, improve data management, and boost internal efficiency, giving your team a definitive technological advantage.

### 3. Company Branding & Strategy
- **Summary**: Complete corporate identity, naming, positioning, and storytelling.
- **Description**: Define your identity and stand out in the marketplace. We develop cohesive, high-impact brand strategies that go beyond logos to establish your true market voice. Our comprehensive service includes developing your core naming, messaging, visual guidelines, and brand story to ensure authenticity and relevance. We don't just create visuals; we craft the entire narrative that resonates deeply with your target audience, building long-term trust, recognition, and unwavering loyalty.

### 4. Graphic Designing
- **Summary**: High-impact marketing collateral, digital graphics, brochures, and decks.
- **Description**: Bring your brand to life with professional visual assets that captivate your audience. We create high-impact designs for every medium, including compelling marketing materials, social media visuals, brochures, pamphlets, and professional corporate presentations. We ensure every piece of design work maintains a high-quality, consistent look across all digital and print touchpoints, strengthening your brand's presence.

### 5. Video Editing & Production
- **Summary**: Cinematic editing, motion graphics, corporate reels, and viral shorts.
- **Description**: Capture and engage your audience with cinematic quality and content versatility. We provide expert video editing and production services for every medium and duration—from long-form documentaries and professional marketing campaigns to engaging social media Reels, YouTube Shorts, and polished Podcast videos. We transform all types of raw footage into impactful, broadcast-ready stories that drive action and connect with audiences wherever they consume content.

### 6. Ad Shoots & Photoshoots
- **Summary**: Full-service studio and on-location product, lifestyle, and corporate photography.
- **Description**: Elevate your visual content with professional, high-impact media production. Our full-service offering covers everything from conceptualization to final delivery. This includes comprehensive Ad Shoots and Photoshoots for product launches, e-commerce listings, corporate profiles, and lifestyle marketing. We provide high-resolution photography and cinematic videography tailored to capture your brand's narrative, ensuring every image and frame is optimized for your marketing campaigns and media platforms.

### 7. Digital Marketing Strategy
- **Summary**: Performance marketing, paid ads (Google & Meta), and ROI-driven conversion funnels.
- **Description**: Achieve measurable results with a focused online plan. We develop integrated digital marketing strategies that combine technical optimization with creative content, ensuring you connect with the right audience at every stage of their journey. Our services include end-to-end execution of PPC (Pay-Per-Click) campaigns, Google Ads, Meta Ads (Facebook/Instagram), and holistic performance marketing. We manage and optimize these channels to deliver targeted traffic, maximize conversions, and drive measurable ROI for your business.

### 8. Search Engine Optimization (SEO)
- **Summary**: Technical audits, keyword dominance, on-page optimization, and authority backlinks.
- **Description**: Move to the top of search results and drive sustainable organic traffic. We implement advanced SEO strategies including comprehensive technical audits, targeted content optimization, and high-quality link building that are proven to deliver measurable, top-tier results. We go beyond rankings to boost your overall visibility, establish your brand as an industry authority, and ensure long-term, profitable digital growth.

### 9. Social Media Marketing (SMM/SMH)
- **Summary**: Complete brand presence management, content creation, community engagement.
- **Description**: Build a vibrant community, drive engagement, and convert attention into sales across all major social platforms. Our full-service offering includes complete account management and handling, from strategic content planning and professional creation to daily monitoring and follower engagement. We ensure your brand stays highly relevant, executes high-impact campaigns, and consistently converts user attention into valuable customer loyalty and measurable growth.

### 10. Influencer Marketing
- **Summary**: Strategic creator matchmaking, campaign management, and influencer amplification.
- **Description**: Connect with your ideal audience through authentic voices. We design and execute end-to-end influencer marketing campaigns, carefully selecting creators whose audience, values, and style perfectly align with your brand. We handle everything from negotiation and contract management to content collaboration and performance analysis, ensuring your message is amplified by trusted voices to deliver high engagement and measurable ROI.

### 11. Talent Management & Creator Partnerships
- **Summary**: Dedicated ambassador representation, contract negotiation, and long-term brand equity.
- **Description**: We design and execute end-to-end Talent Management and Creator Partnerships, actively selecting influencers and brand ambassadors whose authentic voices perfectly align with your brand's message. We go beyond simple collaborations, handling everything from negotiation and strategic content guidance to full campaign execution. Our service ensures your message is amplified by trusted digital creators, building long-term, high-impact partnerships that significantly expand your reach and deliver exceptional returns on investment.

---

## Hardware / Product Extension: Febble Spot
- Smart NFC Enabled Digital Business Cards & Networking Devices (`https://febblespot.com`)
"""

with open(os.path.join(out_dir, '03_SERVICES.md'), 'w', encoding='utf-8') as f:
    f.write(services_content)

# 4. CONTACT.md
contact_content = """# Incinc Media - Contact Details & Channels

## Official Headquarters
- **Address**:
  E-211, Kailas Industrial Complex,
  Veer Savarkar Marg, Park Site, Link Rd,
  Hiranandani Gardens, Vikhroli West,
  Mumbai, Maharashtra 400079, India

## Direct Contacts
- **Primary Phone**: `+91 74988 47799`
- **Secondary Phone**: `+91 81081 14819`
- **Primary Email**: `mail@incincmedia.com`
- **Executive Email**: `rustabh@incincmedia.com`
- **Support Email**: `support@incincmedia.com`

## Official Social Channels
- **Instagram**: `https://www.instagram.com/incincmedia`
- **LinkedIn**: `https://www.linkedin.com/company/68856605/`
- **Facebook**: `https://www.facebook.com/incincmediaa`
- **Twitter/X**: `https://twitter.com/incincmedia`
- **Official Blog**: `https://blog.incincmedia.com`
- **Official Brochure**: `scraped/media/documents/Incinc Media.pdf`

## Contact Form Fields
1. **Full Name** (text, required)
2. **Email ID** (email, required)
3. **Phone Number** (tel, required)
4. **Message / Project Requirements** (textarea, required)
"""

with open(os.path.join(out_dir, '06_CONTACT.md'), 'w', encoding='utf-8') as f:
    f.write(contact_content)

# 5. LEGAL_PAGES.md
legal_content = """# Incinc Media - Legal Policies

## 1. Terms and Conditions
- **Governing Jurisdiction**: Laws of Mumbai, Maharashtra, India.
- **Introduction**: These Terms and Conditions govern the use of Incinc Media's website (www.incincmedia.com). By accessing and using our website, you agree to be bound by these Terms and Conditions.
- **Content**: The content of our website is provided for general information purposes only. While Incinc Media makes every effort to ensure that the information on our website is accurate, we do not guarantee its accuracy, completeness or reliability.
- **Intellectual Property**: All content on our website, including text, graphics, logos, images, software and any other materials, is protected by intellectual property laws and is the property of Incinc Media or its suppliers. You may not reproduce, modify, distribute or republish any content without the prior written permission of Incinc Media.
- **Limitation of Liability**: Incinc Media will not be liable for any damages arising from the use of our website or the reliance on any information provided on our site.
- **Linking to Our Website**: You may link to our website, provided that you do so in a way that is fair and legal and does not damage our reputation or take advantage of it.
- **Termination**: Incinc Media reserves the right to terminate or restrict access to our website at any time without notice.
- **Contact**: +91 7498847799 / mail@incincmedia.com

---

## 2. Privacy Policy
- **Collection of Information**: Personal information collected when visitors fill out forms or make inquiries (names, email addresses, phone numbers, addresses).
- **Usage**: Used to respond to inquiries, provide requested digital and IT services, and facilitate client communication.
- **Storage & Security**: Stored on secure servers accessible only by authorized personnel with safeguards against unauthorized access, misuse, alteration, or destruction.
- **Third-Party Disclosure**: Incinc Media will not disclose personal information to any third party unless required by law or as part of a legal process.
- **Cookies**: Uses cookies to track website usage and enhance user experience. Visitors may disable cookies in browser settings.
- **Updates & Access**: Contact +91 7498847799 to access or update stored personal information.

---

## 3. Refund Policy
- **Commitment**: Standing behind all products and services with dedicated customer support.
- **Eligibility**: Requests must be submitted within 30 days of the original purchase. Applicable only to products and services that have not been fully utilized or consumed.
- **Process**: Contact support at `+91 7498847799` or email `support@incincmedia.com`.
- **Timeline**: Refunds are processed within 5 to 7 business days back to the original payment method.
- **Exceptions**: Fully consumed services, downloadable software/e-books, and active recurring subscriptions.
"""

with open(os.path.join(out_dir, '07_LEGAL_PAGES.md'), 'w', encoding='utf-8') as f:
    f.write(legal_content)

print("Generated 01_HOMEPAGE.md, 02_ABOUT.md, 03_SERVICES.md, 06_CONTACT.md, 07_LEGAL_PAGES.md")
