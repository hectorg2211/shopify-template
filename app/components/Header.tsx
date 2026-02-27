import Link from 'next/link'
import { CartDrawer } from './CartDrawer'

const navLinks = ['main products', 'backpacks', 'bags', 'accessories', 'watches', 'story', 'teams']

export function Header() {
  return (
    <header className='sticky top-0 z-50 bg-transparent backdrop-blur-md'>
      <div className='px-4 pt-4'>
        <div className='rounded-lg bg-black px-4 py-4 text-center text-sm text-white'>
          Enjoy an exclusive 10% coupon for your first purchase.
        </div>
      </div>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
        <Link href='/' className='text-xl font-bold tracking-tight text-black'>
          NEXURA
        </Link>
        <nav className='hidden gap-8 md:flex'>
          {navLinks.map(link => (
            <Link
              key={link}
              href={`/#${link.replace(/\s/g, '-')}`}
              className='text-sm font-medium text-black transition hover:opacity-70'
            >
              {link}
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-4 text-black'>
          <button type='button' aria-label='Search' className='rounded p-2 text-black transition hover:bg-zinc-100'>
            <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
          <CartDrawer />
          <button type='button' aria-label='Account' className='rounded p-2 text-black transition hover:bg-zinc-100'>
            <svg className='h-5 w-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
