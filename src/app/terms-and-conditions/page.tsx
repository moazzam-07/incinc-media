import * as React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="pt-36 pb-24 max-w-4xl mx-auto px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#707070] hover:text-[#141414] mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>

      <div className="space-y-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-[#707070]">
            Legal Document
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#141414] mt-1">
            Terms & Conditions.
          </h1>
          <p className="text-xs text-[#adadad] mt-2">
            Governed by and construed in accordance with the laws of Mumbai, Maharashtra, India.
          </p>
        </div>

        <div className="prose prose-neutral max-w-none text-[#707070] text-sm sm:text-base leading-relaxed space-y-6 border-t border-[#f0f0f0] pt-8">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#141414]">1. Introduction</h2>
            <p>
              These Terms and Conditions govern the use of Incinc Media&apos;s website (www.incincmedia.com). By accessing and using our website, you agree to be bound by these Terms and Conditions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#141414]">2. Content & Information Purpose</h2>
            <p>
              The content of our website is provided for general information purposes only. While Incinc Media makes every effort to ensure that the information on our website is accurate, we do not guarantee its accuracy, completeness, or reliability.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#141414]">3. Intellectual Property Rights</h2>
            <p>
              All content on our website, including text, graphics, logos, images, software, code, and any other materials, is protected by intellectual property laws and is the property of Incinc Media or its partners. You may not reproduce, modify, distribute, or republish any content without prior written permission from Incinc Media.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#141414]">4. Limitation of Liability</h2>
            <p>
              Incinc Media will not be liable for any indirect, incidental, or consequential damages arising from the use of our website or the reliance on any information provided on our site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#141414]">5. Linking to Our Website</h2>
            <p>
              You may link to our website, provided that you do so in a way that is fair and legal and does not damage our reputation or take unfair advantage of it.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#141414]">6. Termination</h2>
            <p>
              Incinc Media reserves the right to terminate or restrict access to our website at any time without notice.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#141414]">7. Jurisdiction & Contact</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of Mumbai, Maharashtra, India. If you have any questions regarding these terms, contact us at{" "}
              <a href="tel:+917498847799" className="text-[#141414] font-semibold underline">
                +91 74988 47799
              </a>{" "}
              or via{" "}
              <a href="mailto:mail@incincmedia.com" className="text-[#141414] font-semibold underline">
                mail@incincmedia.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
