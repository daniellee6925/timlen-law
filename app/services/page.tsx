import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Legal Services | William Timlen, Esq. | Newark, NJ",
  description:
    "William Timlen offers comprehensive legal services in Newark, NJ including personal injury, estate planning, business law, real estate, and family law. Call Bill Timlen today.",
  canonicalPath: "/services",
  domain: "timlenlaw.com",
});

const services = [
  {
    title: "Personal Injury",
    icon: "&#9878;",
    summary:
      "Aggressive advocacy for accident victims throughout New Jersey.",
    description:
      "William Timlen represents victims of car accidents, slip-and-fall incidents, workplace injuries, and medical malpractice. Bill Timlen fights aggressively to secure the compensation you deserve, handling negotiations with insurance companies and litigation when necessary.",
    details: [
      "Motor vehicle and truck accidents",
      "Slip-and-fall and premises liability",
      "Workplace and construction injuries",
      "Medical malpractice claims",
      "Insurance company negotiations",
      "Trial litigation when settlement fails",
    ],
  },
  {
    title: "Estate Planning",
    icon: "&#9733;",
    summary:
      "Protecting your family and preserving your legacy for generations.",
    description:
      "Protect your assets and provide for your loved ones with estate planning services from William Timlen. Attorney Timlen drafts wills, establishes trusts, prepares powers of attorney, and guides families through the probate process with compassion and expertise.",
    details: [
      "Last wills and testaments",
      "Revocable and irrevocable trusts",
      "Powers of attorney and healthcare directives",
      "Probate administration and guidance",
      "Asset protection strategies",
      "Guardianship designations",
    ],
  },
  {
    title: "Business Law",
    icon: "&#9830;",
    summary:
      "Strategic counsel for entrepreneurs and established businesses alike.",
    description:
      "From startup formation to contract drafting and commercial disputes, Bill Timlen supports businesses at every stage. William Timlen advises on LLC and corporation formation, partnership agreements, employment matters, and regulatory compliance.",
    details: [
      "LLC and corporation formation",
      "Contract drafting and review",
      "Partnership and operating agreements",
      "Commercial dispute resolution",
      "Employment law compliance",
      "Regulatory and licensing matters",
    ],
  },
  {
    title: "Real Estate Law",
    icon: "&#9824;",
    summary:
      "Experienced guidance through every real estate transaction.",
    description:
      "Whether you are buying your first home or managing commercial properties, William Timlen provides experienced real estate legal counsel. Bill Timlen handles closings, title disputes, landlord-tenant matters, and zoning issues throughout New Jersey.",
    details: [
      "Residential and commercial closings",
      "Title searches and dispute resolution",
      "Landlord-tenant representation",
      "Zoning and land use matters",
      "Purchase and sale agreements",
      "Property lien resolution",
    ],
  },
  {
    title: "Family Law",
    icon: "&#9829;",
    summary:
      "Compassionate advocacy during life's most difficult transitions.",
    description:
      "Attorney Timlen handles sensitive family law matters with discretion and care. William Timlen assists clients with divorce proceedings, child custody arrangements, support modifications, and prenuptial agreements.",
    details: [
      "Divorce and legal separation",
      "Child custody and parenting time",
      "Child and spousal support",
      "Support modification petitions",
      "Prenuptial and postnuptial agreements",
      "Domestic violence restraining orders",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero Banner */}
      <section className="cta-banner text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#C5A250] text-sm font-semibold uppercase tracking-wider mb-4">
            Practice Areas
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Legal Services by William Timlen
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Comprehensive Legal Representation in Newark, NJ — Attorney Bill
            Timlen brings over 15 years of experience to every case.
          </p>
        </div>
      </section>

      {/* Services Detail Blocks */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1B2A4A] text-center mb-4 heading-accent mx-auto">
            Our Practice Areas
          </h2>
          <p className="text-gray-500 text-center mb-16 max-w-2xl mx-auto">
            William Timlen provides dedicated legal counsel across five core
            practice areas, each backed by years of hands-on experience.
          </p>

          <div className="space-y-16">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`flex flex-col md:flex-row gap-10 items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Number / Icon panel */}
                <div className="md:w-5/12">
                  <div className="law-card rounded-lg p-8 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="text-3xl text-[#C5A250]"
                        dangerouslySetInnerHTML={{ __html: service.icon }}
                      />
                      <span className="font-[family-name:var(--font-playfair)] text-[#1B2A4A]/15 text-5xl font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1B2A4A] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#C5A250] font-medium text-sm">
                      {service.summary}
                    </p>
                  </div>
                </div>

                {/* Description + detail list */}
                <div className="md:w-7/12">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="credential-sidebar rounded-r-lg">
                    <h4 className="font-semibold text-[#1B2A4A] mb-3 text-sm uppercase tracking-wide">
                      Services Include
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="text-gray-600 text-sm flex items-start gap-2"
                        >
                          <span className="text-[#C5A250] mt-0.5">&#8226;</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-4">
            Schedule a Consultation with Bill Timlen
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            William Timlen offers free initial consultations for most legal
            matters. Contact Attorney Timlen today to discuss your case.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C5A250] text-[#1B2A4A] px-10 py-4 font-semibold rounded hover:bg-[#b8933f] transition-colors text-lg"
          >
            Contact William Timlen
          </Link>
        </div>
      </section>
    </>
  );
}
