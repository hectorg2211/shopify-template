import Image from "next/image";
import Link from "next/link";

const customerLinks = [
  "About Nexura",
  "Research",
  "Team",
  "Amenities",
  "Careers",
  "Terms",
];

const supportLinks = [
  "Help",
  "Contact Us",
  "Product Returns",
  "Order",
  "Shipping options",
];

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=60"
            alt=""
            fill
            className="object-cover opacity-30 blur-sm"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-zinc-900/90" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col justify-between gap-12 lg:flex-row">
            <div className="flex gap-16">
              <div>
                <p className="text-4xl font-bold">80+</p>
                <p className="mt-1 text-sm text-zinc-400">travel routes</p>
              </div>
              <div>
                <p className="text-4xl font-bold">120K</p>
                <p className="mt-1 text-sm text-zinc-400">materials bought</p>
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <p className="text-sm font-bold uppercase tracking-wide">
                Subscribe to our newsletter
              </p>
              <form className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-zinc-600 bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-400 focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <p className="text-2xl font-bold">NEXURA</p>
            <p className="mt-4 text-sm text-zinc-400">
              Premium travel gear for the modern professional. Quality materials,
              thoughtful design, built to last.
            </p>
            <div className="mt-6 flex items-start gap-4">
              <div className="relative h-16 w-24 overflow-hidden rounded-lg bg-zinc-700">
                <Image
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=200&q=80"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="text-sm text-zinc-400">
                <p>8739 NE 7th St, Denver CO 80214</p>
                <a
                  href="mailto:hello@nexura.com"
                  className="mt-1 block text-white hover:underline"
                >
                  hello@nexura.com
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-wide text-zinc-400">
              Customer Info
            </p>
            <ul className="mt-4 space-y-2">
              {customerLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-zinc-300 hover:text-white"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-wide text-zinc-400">
              Support
            </p>
            <ul className="mt-4 space-y-2">
              {supportLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-zinc-300 hover:text-white"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4">
              {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="text-zinc-400 transition hover:text-white"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
          <p className="text-sm text-zinc-400">
            2023 Nexura. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-zinc-400 hover:text-white"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="text-sm text-zinc-400 hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
