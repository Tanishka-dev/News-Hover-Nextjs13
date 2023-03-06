export default function sortByNewsImage(news: NewsResponse){
   return news.data.filter((item: DataEntry)=> item.image!==null) //filtering out images taht have image with it
}