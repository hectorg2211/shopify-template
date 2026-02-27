import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className='flex h-[calc(100dvh-150px)] min-h-[500px] items-center overflow-hidden'>
      <div className='mx-auto grid w-full h-full items-stretch gap-4 px-6 lg:grid-cols-2 lg:gap-8'>
        <div className='flex flex-col gap-4 lg:gap-6'>
          <div className='rounded-2xl border border-zinc-200 bg-zinc-100 p-6 lg:rounded-3xl lg:p-8'>
            <h1 className='text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl xl:text-6xl'>
              GET READY FOR YEAR-END BUSINESS TRAVEL
            </h1>
            <p className='mt-3 max-w-lg text-base text-zinc-600 lg:mt-4 lg:text-lg'>
              Travel gear that keeps you organized and ready for your next trip. Premium backpacks and accessories
              designed for the modern traveler.
            </p>
            <Link
              href='/products'
              className='mt-4 inline-block w-fit rounded-full border-2 border-black bg-white px-6 py-2.5 text-black transition hover:bg-black hover:text-white lg:mt-6'
            >
              Shop Now
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-3 lg:gap-4'>
            <div className='rounded-xl border border-zinc-200 bg-zinc-100 p-4 lg:rounded-2xl lg:p-5'>
              <div className='mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200 lg:mb-3 lg:h-12 lg:w-12'>
                <svg className='h-6 w-6 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
                  />
                </svg>
              </div>
              <h3 className='text-xs font-bold uppercase tracking-wide text-black lg:text-sm'>FREE SHIPPING</h3>
              <p className='mt-0.5 text-xs text-zinc-600 lg:mt-1 lg:text-sm'>
                On orders over $50. Fast delivery anywhere.
              </p>
            </div>
            <div className='rounded-xl border border-zinc-200 bg-zinc-100 p-4 lg:rounded-2xl lg:p-5'>
              <div className='mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200 lg:mb-3 lg:h-12 lg:w-12'>
                <svg className='h-6 w-6 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                  />
                </svg>
              </div>
              <h3 className='text-xs font-bold uppercase tracking-wide text-black lg:text-sm'>SECURE CHECKOUT</h3>
              <p className='mt-0.5 text-xs text-zinc-600 lg:mt-1 lg:text-sm'>
                Your payment information is protected.
              </p>
            </div>
          </div>
        </div>
        <div className='relative min-h-[200px] h-full overflow-hidden rounded-2xl rounded-br-[3rem] lg:min-h-[280px] lg:rounded-3xl lg:rounded-br-[4rem]'>
          <Image
            src='https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80'
            alt='Person with backpack looking at cityscape'
            fill
            className='object-cover object-center'
            priority
            sizes='(max-width: 1024px) 100vw, 50vw'
          />
        </div>
      </div>
    </section>
  )
}
