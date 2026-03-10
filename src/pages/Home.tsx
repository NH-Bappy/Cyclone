import Header from '../components/HomeComponents/TopAd'
import TopNab from '../components/HomeComponents/TopNabver/TopNab'
import Menu from '../components/HomeComponents/Menu/Menu'
import TopCategory from '../components/HomeComponents/Category/TopCategory'
import Banner from '../components/HomeComponents/Banner/Banner'
import Support from '../components/HomeComponents/support/Support'

const Home = () => {
  return (
    <>
    <Header/>
    <TopNab/>
    <Menu/>
    <TopCategory/>
    <Banner/>
    <Support/>
    </>
  )
}

export default Home