export const getNewsTopHeadlines = async () => {
  const newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_TOKEN_NEWS}`,{cache:"no-store"})
  return newsData.json()
}

export const getNewsSearch = async (keyword:string) => {
  const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.API_TOKEN_NEWS}&q=${keyword}&pageSize=10`,{cache:"no-store"})
  return newsData.json()
}