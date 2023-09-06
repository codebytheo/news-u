'use client'

import Article from '@/components/Article'
import { news } from '@/types'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const Search = () => {
  const [newsData, setNewsData] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const search = searchParams ? searchParams.get('q') : null
  
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    const getNews = async () => {
      try {
        setLoading(true)
        const response = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.NEXT_PUBLIC_API_TOKEN_NEWS}&q=${search}&pageSize=10)`,{signal})
        const responseToJson = await response.json()
        const randomArticle:news[] = responseToJson?.articles
        const filterArticles = randomArticle.filter(article => article?.source.id !== null)
        setLoading(false)
        setNewsData(filterArticles)
      }
      catch(error) {
        if (typeof error === 'object' && error !== null) {
          console.log(error.toString());
        } else {
          console.log('Unexpected error', error);
        }
      }
    }
    getNews()

    return () => {
      controller.abort()
    }
  },[search])
  
  return (
    <div className='w-[700px]'>
      {loading ? (
        <p>loading...</p>
      ) : (
        <>
          {newsData.map((article:news, idx:number) => (
            <div key={`${article?.title}-${idx}`}>
              <Article data={article} />
            </div>
          ))}
        </>
        )
      }
    </div>
  )
}

export default Search