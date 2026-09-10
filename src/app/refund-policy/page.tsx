import * as React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RefundPolicyPage() {
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
            Refund Policy.
          </h1>
          <p className="text-xs text-[#adadad] mt-2">
            Clear, transparent policies regarding services and physical products.
          </p>
        </div>

        <div className="prose prose-neutral max-w-none text-[#707070] text-sm sm:text-base leading-relaxed space-y-6 border-t border-[#f0f0f0] pt-8">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#141414]">1. Our Guarantee</h2>
            <p>
              At Incinc Media, we stand behind our products, engineering services, and digital solutions. We strive to provide the finest client experience and deliver measurable commercial results. If you are not satisfied with an unconsumed engagement, our support team is here to assist.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#141414]">2. Eligibility for Refund</h2>
            <p>
              To be eligible for a refund review, you must contact our operations team within 30 days of the original purchase or milestone engagement. Refunds are available strictly for products and service milestones that have not yet been fully utilized or consumed.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#141414]">3. Request Process</h2>
            <p>
              To initiate a refund request, contact our team at{" "}
              <a href="tel:+917498847799" className="text-[#141414] font-semibold underline">
                +91 74988 47799
              </a>{" "}
              or email{" "}
              <a href="mailto:support@incincmedia.com" className="text-[#141414] font-semibold underline">
                support@incincmedia.com
              </a>. Our executive team will review your account milestones and provide guidance on next steps.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#141414]">4. Processing Timeline</h2>
            <p>
              Approved refunds are processed within 5 to 7 business days. Funds will be credited directly back to the original method of payment or corporate account.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-[#141414]">5. Non-Refundable Exceptions</h2>
            <p>Refunds are not applicable to the following categories:</p>
            <ul className="list-disc pl-5 space-y-1 text-[#707070]">
              <li>Services and engineering sprint deliverables that have been fully developed and signed off.</li>
              <li>Downloadable digital assets and customized software source code.</li>
              <li>Active recurring monthly retainer commitments already underway.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
