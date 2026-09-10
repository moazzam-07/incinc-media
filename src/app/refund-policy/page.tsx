import * as React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RefundPolicyPage() {
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
            Refund Policy.
          </h1>
          <p className="text-xs text-[#86868b] mt-2">
            Clear, transparent policies regarding services and physical hardware products.
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-[#86868b] text-sm sm:text-base leading-relaxed space-y-6 border-t border-white/10 pt-8">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">1. Our Guarantee</h2>
            <p>
              At Incinc Media, we stand behind our products, engineering services, and digital solutions. We strive to provide the finest client experience and deliver measurable commercial results. If you are not satisfied with an unconsumed engagement, our support team is here to assist.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">2. Eligibility for Refund</h2>
            <p>
              To be eligible for a refund review, you must contact our operations team within 30 days of the original purchase or milestone engagement. Refunds are available strictly for products and service milestones that have not yet been fully utilized or consumed.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">3. Request Process</h2>
            <p>
              To initiate a refund request, contact our team at{" "}
              <a href="tel:+917498847799" className="text-[#2997ff] underline">
                +91 74988 47799
              </a>{" "}
              or email{" "}
              <a href="mailto:support@incincmedia.com" className="text-[#2997ff] underline">
                support@incincmedia.com
              </a>. Our executive team will review your account milestones and provide guidance on next steps.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">4. Processing Timeline</h2>
            <p>
              Approved refunds will be processed via original payment channel or corporate wire within 7–10 business days following formal verification.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-white">5. Physical Hardware (Febble Spot)</h2>
            <p>
              Febble Spot smart NFC hardware cards are eligible for replacement or return within 14 days of delivery if hardware manufacturing defects are identified. Custom laser-engraved units are non-refundable once production commences.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
