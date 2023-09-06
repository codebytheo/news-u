import { news } from '@/types'
import Image from 'next/image'
import Tag from './Tag'
import Link from 'next/link'

const RandomArticle = ({data}:{data:news}) => {
  return (
    <div className='flex justify-between gap-2 p-2 mb-4 border-b border-gray-300'>
      <div>
        <Link href={data?.url} legacyBehavior>
          <a target="_blank" className='text-sm'>{data?.title}</a>
        </Link>
        <div className='flex flex-col space-y-2 max-w-max my-2'>
          <Tag data={data?.source.name} />
          <Tag data={new Date(data?.publishedAt).toDateString()} />
      </div>
      </div>
      <div className='relative w-[400px] h-[200px]'>
        <Image src={`${data?.urlToImage ? data?.urlToImage : "/img/news-u-logo.webp"}`} alt={data?.title} fill className='object-cover' />
      </div>
    </div>
  )
}

export default RandomArticle