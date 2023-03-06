import { gql } from "graphql-request"
import { categories } from "../constants";

const fetchNews= async (category?: Category | string,
    keywords?: string,
    isDynamic?: boolean    
    ) => {
        const query=gql`
        query MyQuery(
            $access_key: String, 
            $categories: String,
            $keywords: String
        ){
            myQuery(access_key: $access_key, categories: $categories, keywords: $keywords, countries: "us,in") {
              data {
                author
                category
                country
                description
                image
                language
                published_at
                source
                title
                url
              }
              pagination {
                count
                limit
                offset
                total
              }
            }
          }
          `;

          const res= await fetch('https://monfortheights.stepzen.net/api/geared-chimp/__graphql',{
            method:'POST',
            cache:isDynamic? "no-cache": "default",
            next: isDynamic? {revalidate:0}:{revalidate:20},
            headers:{
                "Content-Type": "application/json",
                Authorization: `Apikey ${process.env.STEPZEN_GRAPHQL_KEY}`
            },
            body: JSON.stringify({
                query,
                variables:{
                    $access_key: process.env.MEDIASTACK_API_KEY, 
                    $categories: category,
                    $keywords: keywords
                }
            })

          });
          console.log("load", category, keywords);

          const newsResponse= await res.json();

          const newsWithImage= newsResponse.data.filter((item: DataEntry)=> item.image!==null)
}

export default fetchNews;