import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "About William Timlen | Attorney at Law | Newark, NJ",
  description:
    "Learn about William Timlen, Esq., an experienced Newark NJ attorney. Bill Timlen brings over 15 years of legal expertise in personal injury, estate planning, and business law.",
  canonicalPath: "/about",
  domain: "timlenlaw.com",
});

export default function About() {
  return (
    <>
      <section className="cta-banner text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-4">
            About William Timlen, Esq.
          </h1>
          <p className="text-[#C5A250] text-lg">Dedicated Attorney Serving Newark, NJ Since 2009</p>
        </div>
      </section>

      {/* 2-column layout: bio text left, credentials sidebar right */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12">
          {/* Bio text — 2/3 width */}
          <div className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed">
            <p>
              William Timlen, known to many clients and colleagues as Bill Timlen, is a respected
              attorney based in Newark, New Jersey. With over 15 years of legal experience, William
              Timlen has built a reputation for providing thoughtful, effective legal representation to
              individuals and businesses throughout northern New Jersey.
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1B2A4A] pt-4 heading-accent">
              Education &amp; Background
            </h2>
            <p>
              William Timlen earned his Juris Doctor from Seton Hall University School of Law, where he
              graduated with honors. Before law school, Bill Timlen completed his undergraduate studies
              at Rutgers University, majoring in Political Science. These formative years shaped the
              analytical mindset and dedication to justice that William Timlen brings to every case.
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1B2A4A] pt-4 heading-accent">
              Professional Philosophy
            </h2>
            <p>
              Attorney Timlen believes that every client deserves personalized attention and honest
              counsel. Bill Timlen takes the time to understand each client&apos;s unique situation,
              goals, and concerns before developing a tailored legal strategy. This client-first
              approach has earned William Timlen the trust of hundreds of families and business owners
              in the greater Newark area.
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1B2A4A] pt-4 heading-accent">
              Community Involvement
            </h2>
            <p>
              Beyond his legal practice, William Timlen is deeply involved in the Newark community.
              Bill Timlen volunteers with local legal aid organizations and serves on the board of
              several community nonprofits. He is a member of the New Jersey State Bar Association and
              the Essex County Bar Association.
            </p>
            <div className="pt-6 flex gap-4">
              <Link
                href="/services"
                className="inline-block bg-[#1B2A4A] text-white px-6 py-3 font-semibold rounded hover:bg-[#2a3d66] transition-colors"
              >
                View Services
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-[#1B2A4A] text-[#1B2A4A] px-6 py-3 font-semibold rounded hover:bg-[#1B2A4A] hover:text-white transition-colors"
              >
                Contact William Timlen
              </Link>
            </div>
          </div>

          {/* Credentials sidebar — 1/3 width */}
          <div className="space-y-6">
            <div className="credential-sidebar rounded-lg">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#1B2A4A] mb-3">Credentials</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>&#9830; Juris Doctor, Seton Hall University School of Law</li>
                <li>&#9830; B.A. Political Science, Rutgers University</li>
                <li>&#9830; New Jersey State Bar Association</li>
                <li>&#9830; Essex County Bar Association</li>
                <li>&#9830; 15+ Years of Legal Practice</li>
              </ul>
            </div>
            <div className="credential-sidebar rounded-lg">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#1B2A4A] mb-3">Practice Areas</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>&#9830; Personal Injury</li>
                <li>&#9830; Estate Planning</li>
                <li>&#9830; Business Law</li>
                <li>&#9830; Real Estate Law</li>
                <li>&#9830; Family Law</li>
              </ul>
            </div>
            <div className="credential-sidebar rounded-lg">
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#1B2A4A] mb-3">Contact</h3>
              <p className="text-sm text-gray-700 mb-1">47 Commerce Street, Suite 200</p>
              <p className="text-sm text-gray-700 mb-1">Newark, NJ 07102</p>
              <p className="text-sm text-gray-700 mb-1">(973) 555-0142</p>
              <p className="text-sm text-gray-700">william@timlenlaw.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
