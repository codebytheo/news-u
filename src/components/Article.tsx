import { news } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tag'

const Article = ({data}:{data:news}) => {
  return (
    <div className='py-2 border-b border-gray-300 mb-4'>
      <div className='relative w-full h-[300px]'>
        <Image src={`${data?.urlToImage !== null ? data?.urlToImage : '/img/news-u-logo.webp'}`} alt={data?.title} fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 100vw" className='object-cover' />
      </div>
      <Link href={data?.url} legacyBehavior>
        <a target="_blank" className='font-bold text-lg'>
          {data?.title}
        </a>
      </Link>
      <div className='flex space-x-4 my-2'>
        <Tag data={data?.source.name} />
        <Tag data={data?.author} />
        <Tag data={new Date(data?.publishedAt).toDateString()} />
      </div>
      <p className='text-sm'>{data?.description}</p>
    </div>
  )
}

export default Article