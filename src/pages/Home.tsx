import Header from '../components/HomeComponents/TopAd'
import TopNab from '../components/HomeComponents/TopNabver/TopNab'
import Menu from '../components/HomeComponents/Menu/Menu'
import TopCategory from '../components/HomeComponents/Category/TopCategory'
import Banner from '../components/HomeComponents/Banner/Banner'
import Support from '../components/HomeComponents/Support/Support'
import ShopCategory from '../components/HomeComponents/ShopCategory/ShopCategory'
import FeaturedProducts from '../components/HomeComponents/FeaturedProducts/FeaturedProducts'

const Home = () => {
  return (
    <>
    <Header/>
    <TopNab/>
    <Menu/>
    <TopCategory/>
    <Banner/>
    <Support/>
    <ShopCategory/>
    <FeaturedProducts/>
    </>
  )
}

export default Home