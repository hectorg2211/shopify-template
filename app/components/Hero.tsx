import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl">
            GET READY FOR YEAR-END BUSINESS TRAVEL
          </h1>
          <p className="mt-6 max-w-lg text-lg text-zinc-600">
            Travel gear that keeps you organized and ready for your next trip.
            Premium backpacks and accessories designed for the modern traveler.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-block w-fit rounded-full border-2 border-black bg-white px-8 py-3 text-black transition hover:bg-black hover:text-white"
          >
            Shop Now
          </Link>
          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100">
                <svg
                  className="h-6 w-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <h3 className="font-bold uppercase tracking-wide text-black">
                FREE SHIPPING
              </h3>
              <p className="mt-1 text-sm text-zinc-600">
                On orders over $50. Fast delivery anywhere.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100">
                <svg
                  className="h-6 w-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="font-bold uppercase tracking-wide text-black">
                SECURE CHECKOUT
              </h3>
              <p className="mt-1 text-sm text-zinc-600">
                Your payment information is protected.
              </p>
            </div>
          </div>
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl rounded-br-[4rem]">
          <Image
            src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"
            alt="Person with backpack looking at cityscape"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
