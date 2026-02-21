import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "What to Do After a Car Accident in NJ | William Timlen",
  description:
    "Attorney William Timlen explains the critical steps to take after a car accident in New Jersey. Bill Timlen shares expert advice on protecting your rights and your injury claim.",
  canonicalPath: "/blog/what-to-do-after-a-car-accident",
  domain: "timlenlaw.com",
});

export default function BlogPost() {
  return (
    <>
      <section className="bg-[#1B2A4A] text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-[#C5A250] text-sm mb-2">January 15, 2026 • By William Timlen, Esq.</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold">
            What to Do After a Car Accident in New Jersey
          </h1>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray">
          <p className="text-gray-700 leading-relaxed">
            As an attorney who has handled hundreds of personal injury cases, William Timlen knows
            that the moments after a car accident can be confusing and overwhelming. The steps you
            take immediately following a collision can significantly impact your ability to recover
            compensation. Here, Bill Timlen outlines the most important actions to take after a car
            accident in New Jersey.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1B2A4A] mt-8 mb-4">
            1. Ensure Safety and Call 911
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Your first priority should always be safety. If possible, move your vehicle out of
            traffic and check on all passengers. William Timlen advises clients to always call 911,
            even for seemingly minor accidents. A police report creates an official record that
            Attorney Timlen can use when building your case.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1B2A4A] mt-8 mb-4">
            2. Document Everything
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Bill Timlen always tells clients: documentation is your best friend. Take photos of
            vehicle damage, road conditions, traffic signals, and any visible injuries. Exchange
            information with the other driver including insurance details. If there are witnesses, get
            their contact information as well.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1B2A4A] mt-8 mb-4">
            3. Seek Medical Attention
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Even if you feel fine, William Timlen strongly recommends visiting a doctor within 24
            hours of the accident. Some injuries, such as whiplash or internal damage, may not
            present symptoms immediately. Medical records created promptly after the accident serve as
            crucial evidence in your claim.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1B2A4A] mt-8 mb-4">
            4. Contact an Experienced Attorney
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Before speaking with insurance adjusters, Bill Timlen recommends consulting with a
            personal injury attorney. Insurance companies often try to minimize payouts, and having
            legal representation levels the playing field. William Timlen offers free initial
            consultations for accident victims in Newark and throughout New Jersey.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1B2A4A] mt-8 mb-4">
            5. Preserve Your Evidence
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Keep all documents, receipts, and records related to the accident. This includes medical
            bills, repair estimates, rental car receipts, and proof of lost wages. Attorney Timlen
            uses these records to calculate the full value of your claim and ensure nothing is
            overlooked.
          </p>

          <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-700">
              <strong>About the Author:</strong> William Timlen, Esq. is a personal injury attorney
              based in Newark, NJ with over 15 years of experience. Bill Timlen has recovered
              millions in compensation for accident victims.{" "}
              <Link href="/contact" className="text-[#C5A250] font-semibold hover:underline">
                Contact William Timlen
              </Link>{" "}
              for a free consultation.
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            <Link href="/blog" className="text-[#C5A250] font-semibold hover:underline">
              ← Back to Blog
            </Link>
            <Link href="/services" className="text-[#C5A250] font-semibold hover:underline">
              View Services
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
