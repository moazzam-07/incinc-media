import { company } from '@/data/company';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#work' },
      { label: 'Process', href: '#process' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'App Development', href: '#services' },
      { label: 'Branding', href: '#services' },
      { label: 'Digital Marketing', href: '#services' },
      { label: 'SEO', href: '#services' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Instagram', href: company.contact.socials.instagram, external: true },
      { label: 'LinkedIn', href: company.contact.socials.linkedin, external: true },
      { label: 'Facebook', href: company.contact.socials.facebook, external: true },
      { label: 'Twitter / X', href: company.contact.socials.twitter, external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white rounded-t-[24px] mt-section">
      <div className="max-w-content mx-auto px-6 md:px-8 pt-16 pb-8">
        {/* Top — Logo + Tagline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <span className="text-ink text-[14px] font-bold tracking-tight">IM</span>
              </span>
              <span className="text-[24px] font-bold tracking-tight">Incinc Media</span>
            </div>
            <p className="text-white/50 text-[15px] max-w-[380px] leading-relaxed">
              {company.tagline}
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-ink text-[14px] font-semibold rounded-full hover:bg-white/90 transition-colors active:scale-[0.97] w-fit"
          >
            Start a project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Middle — Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[12px] font-semibold text-white/30 uppercase tracking-widest mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...('external' in link && link.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="text-[14px] text-white/60 hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                    >
                      {link.label}
                      {'external' in link && link.external && (
                        <ArrowUpRight className="w-3 h-3 opacity-50" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="text-[12px] font-semibold text-white/30 uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[14px] text-white/60">
                <Phone className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>{company.contact.phones[0]}</span>
              </li>
              <li className="flex items-start gap-2 text-[14px] text-white/60">
                <Mail className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>{company.contact.emails[0]}</span>
              </li>
              <li className="flex items-start gap-2 text-[14px] text-white/60">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span className="leading-relaxed">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom — Legal */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-white/30">
            &copy; {new Date().getFullYear()} Incinc Media. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[12px] text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[12px] text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

