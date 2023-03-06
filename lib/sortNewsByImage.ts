export default function sortNewsByImage(news: NewsResponse){
    return news.data.filter((item)=> item.image!==null)
}