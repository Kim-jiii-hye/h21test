import MainSeo from '@/Components/seo/MainSeo'
import Header from '@/Components/view/Header'
import Footer from '@/Components/view/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div id="viewBase" className="css3	W_M1M2L W_M2L W_L">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
