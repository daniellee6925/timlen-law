import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Do You Need a Will? Estate Planning Basics | Bill Timlen",
  description:
    "Bill Timlen explains why every adult needs a will and estate plan. William Timlen breaks down New Jersey estate planning basics and what happens without a will.",
  canonicalPath: "/blog/do-you-need-a-will",
  domain: "timlenlaw.com",
});

export default function BlogPost() {
  return (
    <>
      <section className="bg-[#1B2A4A] text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-[#C5A250] text-sm mb-2">December 8, 2025 • By Bill Timlen</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold">
            Do You Need a Will? Bill Timlen Explains Estate Planning Basics
          </h1>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray">
          <p className="text-gray-700 leading-relaxed">
            One of the most common questions Bill Timlen hears from clients is: &ldquo;Do I really
            need a will?&rdquo; The answer, according to William Timlen, is almost always yes.
            Regardless of your age, wealth, or family situation, having an estate plan in place
            protects your loved ones and ensures your wishes are respected.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1B2A4A] mt-8 mb-4">
            What Happens Without a Will in New Jersey?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            When someone dies without a will in New Jersey, their assets are distributed according to
            the state&apos;s intestacy laws. William Timlen explains that this often produces results
            the deceased would not have wanted. For example, unmarried partners receive nothing, and
            assets may be split between a surviving spouse and children in proportions that create
            hardship. Bill Timlen has seen families torn apart by disputes that a simple will could
            have prevented.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1B2A4A] mt-8 mb-4">
            Key Components of an Estate Plan
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Attorney Timlen typically recommends that clients consider several essential documents
            beyond just a will. William Timlen advises clients to prepare a last will and testament,
            a durable power of attorney for financial matters, a healthcare proxy or living will, and
            depending on their circumstances, one or more trusts. Each document serves a different
            purpose in protecting you and your family.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1B2A4A] mt-8 mb-4">
            When Should You Update Your Estate Plan?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Bill Timlen recommends reviewing your estate plan every three to five years, or whenever
            a major life event occurs. Marriage, divorce, the birth of a child, a significant change
            in assets, or a move to a new state are all triggers for an update. William Timlen has
            helped many clients revise outdated plans that no longer reflected their wishes or
            circumstances.
          </p>

          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1B2A4A] mt-8 mb-4">
            Getting Started
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The most important step in estate planning is the first one. Bill Timlen encourages
            anyone who does not yet have a will to schedule a consultation. William Timlen makes the
            process straightforward and affordable, guiding clients through each decision with
            patience and clarity.
          </p>

          <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-700">
              <strong>About the Author:</strong> Bill Timlen is an estate planning attorney at the
              Law Offices of William Timlen in Newark, NJ.{" "}
              <Link href="/contact" className="text-[#C5A250] font-semibold hover:underline">
                Contact Bill Timlen
              </Link>{" "}
              to start your estate plan today.
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
