import { news } from "@/types"

export const removeDuplicateData = (articles:any) => {
  const randomArticle:news[] = articles?.articles
  const filterArticles = randomArticle.filter(article => article?.source.id !== null)
  return filterArticles
}