"use client"

import { useState, FormEvent} from 'react'
import { BiSearch } from 'react-icons/bi'
import { useRouter } from 'next/navigation'

const SearchInput = () => {
  const [keywords,setKeywords] = useState<string>("")
  const router = useRouter()

  const searchKeywords = (e:FormEvent) => {
    e.preventDefault()
    if(!keywords) {
      router.push('/')
    }
    else {
      router.push(`/search?q=${keywords}`)
    }
  }

  return (
    <form className='flex space-x-2 items-center' onSubmit={searchKeywords}>
      <input type="text" placeholder='e.g. sports, lifestyle' className='px-2 py-1 outline-none border border-[#0e0e0e] text-sm' onChange={(e) => setKeywords(e.target.value)} />
      <button type="submit">
        <BiSearch className="text-black text-xl" />
      </button>
    </form>
  )
}

export default SearchInput