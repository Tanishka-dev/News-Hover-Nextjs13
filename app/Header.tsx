import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'
function Header() {
  return (
    <header>
        <div className='grid grid-cols-3 p-10 items-center'>
            <Bars3Icon className="h-6 w-6 text-gray-500" />
            <Link href="/" prefetch={false}>
            <h1 className='font-serif text-4xl text-center underline decoration-6 decoration-orange-400 '>
              News-Hover</h1>
            </Link>
            <div className='flex items-center justify-end space-x-2'>
                <button className="mid:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
                    Subscribe Now
                </button>
            </div>
        </div>
        <NavLinks/>
        <SearchBox/>
    </header>
  )
}

export default Header