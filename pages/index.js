import Head from 'next/head'
import MainSeo from '@/Seo/MainSeo'
import { BOOKDATA, MAINDATA } from '@/lib/constants'
import ViewHome from '@/Components/view/Viewhome'
import { SWRConfig } from 'swr'
import Sitemap from '@/Components/Sitemap'

export default function Home({ fallback }) {
  return (
    <>
    <MainSeo />
    <SWRConfig value = {{ fallback }}>
      <ViewHome />
      <Sitemap />
    </SWRConfig>
    </>
  )
}
export const getServerSideProps = async () => {

  const main_res = await fetch(`${MAINDATA}`);
  const main_data = await main_res.json();
  const book_res = await fetch(`${BOOKDATA}`);
  const book_data = await book_res.json();
  const book = book_data.data;

  return {
    props: {
      fallback:{
        '/api/main' : main_data,
        '/api/book' : book  
      }
    },
  }
}