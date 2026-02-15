import React from 'react'
import Header from '../components/HomeComponents/TopAd'
import TopNab from '../components/HomeComponents/TopNabver/TopNab'
import Menu from '../components/HomeComponents/Menu/Menu'
import TopCategory from '../components/HomeComponents/Category/TopCategory'

const Home = () => {
  return (
    <>
    <Header/>
    <TopNab/>
    <Menu/>
    <TopCategory/>
    </>
  )
}

export default Home