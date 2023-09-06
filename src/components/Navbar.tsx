import Link from 'next/link'
import {FC} from 'react'

const Navbar:FC = () => {
  return (
    <nav className=''>
      <ul className='py-2 border-t border-gray-300'>
        <li className='space-x-6 text-xs'>
          <Link href="/world">World</Link>
          <Link href="/business">Business</Link>
          <Link href="/science">Science</Link>
          <Link href="/health">Health</Link>
          <Link href="/sports">Sports</Link>
          <Link href="">Books</Link>
          <Link href="">Lifestyle</Link>
          <Link href="">Food</Link>
          <Link href="">Travel</Link>
          <Link href="">Bitcoin</Link>
          <Link href="">Share</Link>
          <Link href="">E-Sport</Link>
          <Link href="/indonesia">Indonesia</Link>
        </li>
      </ul>
      <div className='w-full h-[1px] bg-black mb-1' />
      <div className='w-full h-[1px] bg-black' />
    </nav>
  )
}

export default Navbar