import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
import { generatePersonSchema, generateBusinessSchema } from "@/lib/schema-generators";
import { SITES } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const site = SITES.law;

export const metadata: Metadata = {
  title: {
    default: "William Timlen, Esq. | Attorney at Law | Newark, NJ",
    template: "%s | William Timlen, Esq.",
  },
  description:
    "William Timlen, Esq. is an experienced attorney at law serving Newark, NJ and surrounding areas. Bill Timlen provides dedicated legal representation in personal injury, estate planning, and business law.",
  robots: { index: true, follow: true },
};

const personSchema = generatePersonSchema({
  name: site.name,
  alternateName: site.alternateName,
  jobTitle: site.jobTitle,
  address: site.address,
  phone: site.phone,
  email: site.email,
  domain: site.domain,
});

const businessSchema = generateBusinessSchema({
  businessType: site.businessType,
  businessName: site.businessName,
  description:
    "Full-service law firm led by William Timlen, Esq. in Newark, NJ. Specializing in personal injury, estate planning, and business law.",
  address: site.address,
  phone: site.phone,
  email: site.email,
  domain: site.domain,
  founderName: "William Timlen",
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="font-[family-name:var(--font-inter)] bg-white text-gray-900 min-h-screen flex flex-col">
        {/* Top info bar with phone/email */}
        <div className="top-bar">
          <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between">
            <span>{site.phone} | {site.email}</span>
            <span>{site.address.streetAddress}, {site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}</span>
          </div>
        </div>

        {/* Main nav with centered logo */}
        <header className="bg-[#1B2A4A] text-white">
          <nav className="max-w-6xl mx-auto px-4 py-5">
            <div className="flex flex-col items-center gap-4">
              <Link href="/" className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#C5A250] tracking-wide">
                Law Offices of William Timlen
              </Link>
              <ul className="flex flex-wrap justify-center gap-8 text-sm tracking-wide">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[#C5A250] transition-colors pb-1 border-b border-transparent hover:border-[#C5A250]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-[#1B2A4A] text-white">
          {/* Footer top: 4 columns */}
          <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
            <div className="md:col-span-2">
              <h3 className="font-[family-name:var(--font-playfair)] text-[#C5A250] text-xl font-bold mb-3">
                Law Offices of William Timlen
              </h3>
              <p className="text-gray-300 leading-relaxed">
                William Timlen, Esq. provides dedicated legal counsel to individuals and businesses
                throughout northern New Jersey. Bill Timlen brings over 15 years of experience to every case.
              </p>
            </div>
            <div>
              <h3 className="text-[#C5A250] font-semibold mb-3 text-sm uppercase tracking-wider">Practice Areas</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Personal Injury</li>
                <li>Estate Planning</li>
                <li>Business Law</li>
                <li>Real Estate Law</li>
                <li>Family Law</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#C5A250] font-semibold mb-3 text-sm uppercase tracking-wider">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>{site.address.streetAddress}</li>
                <li>{site.address.addressLocality}, {site.address.addressRegion} {site.address.postalCode}</li>
                <li>{site.phone}</li>
                <li>{site.email}</li>
              </ul>
            </div>
          </div>
          {/* Footer bottom */}
          <div className="border-t border-gray-600">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between text-xs text-gray-400">
              <p>&copy; {new Date().getFullYear()} Law Offices of William Timlen. All rights reserved.</p>
              <ul className="flex gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-[#C5A250] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
