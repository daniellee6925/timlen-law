import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";
import { SITES } from "@/lib/constants";

export const metadata = generatePageMetadata({
  title: "Contact William Timlen | Attorney at Law | Newark, NJ",
  description:
    "Contact William Timlen, Esq. for a free legal consultation in Newark, NJ. Reach Bill Timlen by phone, email, or visit our office. Experienced attorney ready to help.",
  canonicalPath: "/contact",
  domain: "timlenlaw.com",
});

const site = SITES.law;

export default function Contact() {
  return (
    <>
      {/* Hero Banner */}
      <section className="cta-banner text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#C5A250] text-sm font-semibold uppercase tracking-wider mb-4">
            Get in Touch
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Contact William Timlen, Esq.
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Schedule Your Free Consultation Today
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          {/* Contact Form — spans 2 columns */}
          <div className="md:col-span-2">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1B2A4A] mb-2 heading-accent">
              Send a Message to William Timlen
            </h2>
            <p className="text-gray-500 mt-6 mb-8">
              Fill out the form below and Attorney Timlen will respond within
              one business day.
            </p>

            <div className="law-card rounded-lg p-8">
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[#1B2A4A] mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-[#C5A250] focus:ring-1 focus:ring-[#C5A250] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[#1B2A4A] mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-[#C5A250] focus:ring-1 focus:ring-[#C5A250] transition-colors"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#1B2A4A] mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-[#C5A250] focus:ring-1 focus:ring-[#C5A250] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#1B2A4A] mb-1"
                  >
                    How Can William Timlen Help You?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full border border-gray-300 rounded px-4 py-2.5 focus:outline-none focus:border-[#C5A250] focus:ring-1 focus:ring-[#C5A250] transition-colors"
                    placeholder="Briefly describe your legal matter..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#C5A250] text-[#1B2A4A] py-3 font-semibold rounded hover:bg-[#b8933f] transition-colors text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Credential Sidebar — contact info */}
          <div className="md:col-span-1">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#1B2A4A] mb-2 heading-accent">
              Reach Bill Timlen
            </h2>
            <div className="mt-6 space-y-6">
              {/* Office Address */}
              <div className="credential-sidebar rounded-r-lg">
                <h3 className="font-[family-name:var(--font-playfair)] font-semibold text-[#1B2A4A] mb-2">
                  Office Address
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {site.address.streetAddress}
                  <br />
                  {site.address.addressLocality}, {site.address.addressRegion}{" "}
                  {site.address.postalCode}
                </p>
              </div>

              {/* Phone */}
              <div className="credential-sidebar rounded-r-lg">
                <h3 className="font-[family-name:var(--font-playfair)] font-semibold text-[#1B2A4A] mb-2">
                  Phone
                </h3>
                <p className="text-gray-600 text-sm">{site.phone}</p>
              </div>

              {/* Email */}
              <div className="credential-sidebar rounded-r-lg">
                <h3 className="font-[family-name:var(--font-playfair)] font-semibold text-[#1B2A4A] mb-2">
                  Email
                </h3>
                <p className="text-gray-600 text-sm">{site.email}</p>
              </div>

              {/* Office Hours */}
              <div className="credential-sidebar rounded-r-lg">
                <h3 className="font-[family-name:var(--font-playfair)] font-semibold text-[#1B2A4A] mb-2">
                  Office Hours
                </h3>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM</p>
                  <p>Saturday: By Appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Personal note */}
              <div className="bg-[#1B2A4A] text-white rounded-lg p-6">
                <p className="font-[family-name:var(--font-playfair)] text-[#C5A250] font-semibold mb-2">
                  A Note from Attorney Timlen
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  William Timlen welcomes inquiries from prospective clients.
                  Whether you have a quick question or need comprehensive legal
                  representation, Bill Timlen and his team are here to assist
                  you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Links */}
      <section className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            Looking for more information?{" "}
            <Link
              href="/about"
              className="text-[#C5A250] font-semibold hover:underline"
            >
              Learn about William Timlen
            </Link>{" "}
            or{" "}
            <Link
              href="/services"
              className="text-[#C5A250] font-semibold hover:underline"
            >
              view our legal services
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
