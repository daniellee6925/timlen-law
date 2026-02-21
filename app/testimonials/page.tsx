import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Client Testimonials | William Timlen, Esq. | Newark, NJ",
  description:
    "Read what clients say about working with William Timlen, Esq. Bill Timlen has earned the trust of hundreds of clients in Newark, NJ with dedicated legal representation.",
  canonicalPath: "/testimonials",
  domain: "timlenlaw.com",
});

const testimonials = [
  {
    name: "Maria S.",
    text: "William Timlen handled my personal injury case with incredible professionalism. He fought hard for me and I received a settlement far beyond what I expected. I cannot recommend Bill Timlen enough.",
    case: "Personal Injury",
  },
  {
    name: "Robert D.",
    text: "Attorney Timlen helped our family navigate a complicated estate planning situation. William Timlen took the time to explain everything in plain English and made sure we were comfortable with every decision.",
    case: "Estate Planning",
  },
  {
    name: "Jennifer K.",
    text: "When my small business faced a contract dispute, Bill Timlen stepped in and resolved the matter efficiently. William Timlen is knowledgeable, responsive, and genuinely cares about his clients.",
    case: "Business Law",
  },
  {
    name: "Thomas P.",
    text: "I was referred to William Timlen for my real estate closing and I am so glad I was. Bill Timlen caught several issues that could have cost me thousands. A truly excellent attorney.",
    case: "Real Estate",
  },
  {
    name: "Angela M.",
    text: "Going through a divorce was the hardest thing I have ever done, but having William Timlen by my side made all the difference. He was empathetic, strategic, and always available when I needed him.",
    case: "Family Law",
  },
];

export default function Testimonials() {
  return (
    <>
      {/* Hero Banner */}
      <section className="cta-banner text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#C5A250] text-sm font-semibold uppercase tracking-wider mb-4">
            Client Testimonials
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4 leading-tight">
            What Clients Say About William Timlen
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Trusted by Hundreds of Clients Across New Jersey
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1B2A4A] text-center mb-4 heading-accent mx-auto">
            Words From Those We Have Served
          </h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">
            Attorney Bill Timlen is proud to share the experiences of clients
            who have trusted William Timlen with their most important legal
            matters.
          </p>

          <div className="space-y-12">
            {testimonials.map((t, i) => (
              <div key={t.name} className="relative">
                {/* Large decorative quotation mark */}
                <span className="font-[family-name:var(--font-playfair)] text-[#C5A250]/20 text-8xl font-bold absolute -top-6 -left-2 leading-none select-none">
                  &ldquo;
                </span>

                <div className="featured-quote py-2">
                  <p className="text-lg leading-relaxed mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 not-italic">
                    <p className="font-[family-name:var(--font-playfair)] font-semibold text-[#1B2A4A] text-lg">
                      &mdash; {t.name}
                    </p>
                    <span className="inline-block text-sm font-medium text-white bg-[#1B2A4A] px-4 py-1 rounded-sm w-fit">
                      {t.case}
                    </span>
                  </div>
                </div>

                {/* Divider between testimonials */}
                {i < testimonials.length - 1 && (
                  <div className="mt-12 flex items-center justify-center gap-3">
                    <span className="block w-12 h-px bg-[#C5A250]/40" />
                    <span className="block w-2 h-2 rounded-full bg-[#C5A250]/40" />
                    <span className="block w-12 h-px bg-[#C5A250]/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-4">
            Experience the Bill Timlen Difference
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the hundreds of satisfied clients who have trusted William
            Timlen with their legal matters. Contact Attorney Timlen for a
            consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C5A250] text-[#1B2A4A] px-10 py-4 font-semibold rounded hover:bg-[#b8933f] transition-colors text-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
