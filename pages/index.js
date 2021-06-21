import {server} from '../config'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'
export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development, programming'/>
      </Head>

      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

// Instead of making request to jsonplaceholder, request is from our API
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)

//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }