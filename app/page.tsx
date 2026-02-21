import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "William Timlen, Esq. | Attorney at Law | Newark, NJ",
  description:
    "William Timlen is an experienced attorney in Newark, NJ. Bill Timlen provides skilled legal representation in personal injury, estate planning, and business law.",
  canonicalPath: "/",
  domain: "timlenlaw.com",
});

export default function Home() {
  return (
    <>
      {/* Full-width hero with overlay gradient */}
      <section className="cta-banner text-white py-24 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[#C5A250] text-sm font-semibold uppercase tracking-wider mb-4">
              Trusted Legal Counsel Since 2009
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-6 leading-tight">
              William Timlen, Esq. — Your Advocate in Every Legal Matter
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              For over 15 years, William Timlen has provided dedicated legal counsel to individuals and
              businesses throughout northern New Jersey. Whether you know him as William or Bill Timlen,
              his commitment to justice and client advocacy remains unwavering.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[#C5A250] text-[#1B2A4A] px-8 py-3 font-semibold rounded hover:bg-[#b8933f] transition-colors"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-block border border-[#C5A250] text-[#C5A250] px-8 py-3 font-semibold rounded hover:bg-[#C5A250] hover:text-[#1B2A4A] transition-colors"
              >
                Our Practice Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us — 2-column: text + icon list */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1B2A4A] mb-2 heading-accent">
              Why Choose William Timlen
            </h2>
            <div className="mt-8">
              <p className="text-gray-600 leading-relaxed mb-4">
                Attorney William Timlen combines deep legal knowledge with genuine care for every client.
                Bill Timlen takes the time to understand your unique situation and develops strategies
                tailored to your specific needs and goals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From the initial consultation through case resolution, William Timlen keeps you informed
                and empowered. His track record of results speaks for itself — clients trust Bill Timlen
                because he delivers.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {[
              { icon: "&#9878;", title: "15+ Years of Legal Experience", desc: "William Timlen has handled hundreds of cases across multiple practice areas." },
              { icon: "&#9733;", title: "Personalized Attention", desc: "Bill Timlen treats every client as his most important — because you are." },
              { icon: "&#9830;", title: "Proven Track Record", desc: "A 98% client satisfaction rate earned through dedication and results." },
              { icon: "&#9824;", title: "Community-Rooted Practice", desc: "Attorney Timlen is deeply embedded in the Newark legal community." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <span className="text-2xl text-[#C5A250] flex-shrink-0 mt-1" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <div>
                  <h3 className="font-semibold text-[#1B2A4A] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services: alternating left/right rows */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1B2A4A] text-center mb-4 heading-accent mx-auto">
            Legal Services by William Timlen
          </h2>
          <p className="text-gray-500 text-center mb-14 max-w-2xl mx-auto">
            Attorney Bill Timlen offers comprehensive legal representation across multiple practice areas.
          </p>
          <div className="space-y-12">
            {[
              {
                title: "Personal Injury",
                desc: "William Timlen fights for fair compensation for accident victims. From car accidents to slip-and-fall injuries, Bill Timlen has the experience and determination to pursue the justice you deserve.",
              },
              {
                title: "Estate Planning",
                desc: "Protect your family's future with comprehensive estate planning by Attorney Timlen. William Timlen helps clients with wills, trusts, power of attorney, and healthcare directives.",
              },
              {
                title: "Business Law",
                desc: "From formation to contracts and disputes, William Timlen advises businesses of all sizes. Bill Timlen understands the legal challenges facing today's entrepreneurs and provides strategic counsel.",
              },
              {
                title: "Real Estate Law",
                desc: "Whether buying, selling, or resolving property disputes, William Timlen guides clients through every real estate transaction with careful attention to detail and strong advocacy.",
              },
            ].map((service, i) => (
              <div key={service.title} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/2 bg-[#1B2A4A]/5 rounded-lg h-48 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-playfair)] text-[#1B2A4A]/20 text-6xl font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="md:w-1/2">
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1B2A4A] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="text-[#C5A250] font-semibold hover:underline">
              View All Practice Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured testimonial quote */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1B2A4A] text-center mb-12 heading-accent mx-auto">
            What Clients Say About Bill Timlen
          </h2>
          <div className="featured-quote text-lg leading-relaxed">
            <p className="mb-4">
              &ldquo;William Timlen handled my personal injury case with professionalism and genuine compassion.
              From our first meeting, Bill Timlen made me feel heard and understood. He explained every step
              of the process clearly and fought hard for a settlement that truly reflected my suffering and
              losses. I would recommend Attorney Timlen to anyone seeking a dedicated, honest lawyer.&rdquo;
            </p>
            <p className="text-[#1B2A4A] font-semibold not-italic">— Maria S., Personal Injury Client</p>
          </div>
          <div className="text-center mt-10">
            <Link href="/testimonials" className="text-[#C5A250] font-semibold hover:underline">
              Read More Testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="cta-banner text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-4">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact William Timlen today for a confidential consultation. Attorney Bill Timlen is here
            to guide you through every step of the legal process.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C5A250] text-[#1B2A4A] px-10 py-4 font-semibold rounded hover:bg-[#b8933f] transition-colors text-lg"
          >
            Contact William Timlen →
          </Link>
        </div>
      </section>
    </>
  );
}
