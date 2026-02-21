import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo-utils";

export const metadata = generatePageMetadata({
  title: "Legal Blog | William Timlen, Esq. | Newark, NJ",
  description:
    "Read legal insights and practical advice from William Timlen, Esq. Bill Timlen shares expert guidance on personal injury, estate planning, and business law in Newark, NJ.",
  canonicalPath: "/blog",
  domain: "timlenlaw.com",
});

const posts = [
  {
    slug: "what-to-do-after-a-car-accident",
    title: "What to Do After a Car Accident in New Jersey",
    excerpt:
      "William Timlen explains the essential steps to take immediately following a car accident in New Jersey to protect your rights and strengthen your injury claim.",
    date: "January 15, 2026",
  },
  {
    slug: "do-you-need-a-will",
    title: "Do You Need a Will? Bill Timlen Explains Estate Planning Basics",
    excerpt:
      "Attorney Bill Timlen breaks down why every adult needs an estate plan and what happens when you pass away without a will in New Jersey.",
    date: "December 8, 2025",
  },
  {
    slug: "choosing-the-right-business-structure",
    title: "Choosing the Right Business Structure: Advice from William Timlen",
    excerpt:
      "William Timlen discusses the pros and cons of LLCs, corporations, and partnerships for New Jersey entrepreneurs starting a new business.",
    date: "November 20, 2025",
  },
];

export default function Blog() {
  return (
    <>
      <section className="bg-[#1B2A4A] text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-4">
            Legal Blog by William Timlen
          </h1>
          <p className="text-[#C5A250] text-lg">
            Practical Legal Insights from Attorney Bill Timlen
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1B2A4A] mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:text-[#C5A250] transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-3">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-[#C5A250] font-semibold hover:underline"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
