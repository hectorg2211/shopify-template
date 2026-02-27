'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className='flex h-[calc(100dvh-150px)] min-h-[500px] items-center overflow-hidden'>
      <div className='mx-auto grid w-full h-full items-stretch gap-4 px-4 lg:grid-cols-2'>
        <div className='flex h-full flex-col gap-4'>
          <motion.div
            className='flex min-h-0 flex-1 flex-col justify-center rounded-lg border border-zinc-200 bg-zinc-100 p-6 lg:p-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <h1 className='flex flex-wrap gap-x-2 gap-y-1 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl xl:text-6xl'>
              {'GET READY FOR YEAR-END BUSINESS TRAVEL'.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  className='inline-block'
                  initial={{ filter: 'blur(12px)', opacity: 0 }}
                  animate={{ filter: 'blur(0px)', opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: 0.2 + i * 0.08,
                  }}
                >
                  {word}
                </motion.span>
              ))}
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
          </motion.div>
          <motion.div
            className='grid shrink-0 grid-cols-2 gap-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          >
            <motion.div
              className='rounded-lg border border-zinc-200 bg-zinc-100 p-4 lg:p-5'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
            >
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
            </motion.div>
            <motion.div
              className='rounded-lg border border-zinc-200 bg-zinc-100 p-4 lg:p-5'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
            >
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
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className='group relative h-full cursor-pointer overflow-hidden rounded-lg'
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <Image
            src='https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80'
            alt='Person with backpack looking at cityscape'
            fill
            className='object-cover object-center h-full transition-all duration-1000 ease-out group-hover:scale-110 group-hover:blur-sm'
            priority
            sizes='(max-width: 1024px) 100vw, 50vw'
          />
          <Link
            href='/products'
            className='absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-1000 group-hover:opacity-100'
          >
            <span className='rounded-full border-2 border-white bg-white px-8 py-3 font-medium text-black shadow-lg transition-colors hover:bg-black hover:text-white'>
              View Products
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
