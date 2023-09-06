import { getNewsTopHeadlines } from '@/api'
import { removeDuplicateData } from '@/utils'
import Article from './Article'

const TopHeadlines = async () => {
  const newsTop = await getNewsTopHeadlines()
  const filterArticles = removeDuplicateData(newsTop)

  return (
    <div className='w-[700px]'>
      {filterArticles.map((article,idx) => (
        <div key={`${article?.title}-${idx}`}>
          <Article data={article} />
        </div>
      ))}
    </div>
  )
}

export default TopHeadlines