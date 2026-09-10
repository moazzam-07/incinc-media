import * as React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-36 pb-24 max-w-4xl mx-auto px-6 text-white">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#86868b] hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>

      <div className="space-y-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#2997ff]">
            Legal Document
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mt-1">
            Privacy Policy.
          </h1>
          <p className="text-xs text-[#86868b] mt-2">
            Safeguarding and managing your personal information with absolute integrity.
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-[#86868b] text-sm sm:text-base leading-relaxed space-y-6 border-t border-white/10 pt-8">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">1. Scope & Overview</h2>
            <p>
              This Privacy Policy outlines the ways in which Incinc Media collects, stores, uses, and protects personal information provided to us by visitors and clients via our website (www.incincmedia.com).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">2. Collection & Use of Information</h2>
            <p>
              Personal information may be collected when visitors complete contact forms, book consultations, or submit inquiries. The information collected may include names, addresses, email addresses, phone numbers, and project details. We use this information solely to respond to inquiries, prepare commercial proposals, and fulfill requested digital solutions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">3. Storage & Data Security</h2>
            <p>
              Collected personal information is stored on secure cloud environments and is accessible only by authorized personnel. We maintain technical safeguards to protect all client data from unauthorized access, misuse, alteration, or destruction.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">4. Non-Disclosure to Third Parties</h2>
            <p>
              Incinc Media will never sell, rent, or disclose personal data to third parties unless strictly mandated by applicable Indian law or official court proceedings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">5. Cookie Telemetry</h2>
            <p>
              Our website may utilize essential and analytics cookies to optimize user navigation and compile aggregate audience traffic statistics. Users can configure browser settings to decline non-essential cookies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">6. Updates to Policy</h2>
            <p>
              Incinc Media reserves the right to modify this Privacy Policy periodically. Modifications take immediate effect upon publishing on this URL.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">7. Inquiries & Contact</h2>
            <p>
              For privacy-related inquiries, please reach our Data Protection Officer at:{" "}
              <a href="mailto:mail@incincmedia.com" className="text-[#2997ff] underline">
                mail@incincmedia.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
