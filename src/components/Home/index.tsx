import React from 'react'
import Carousel from '../Carousel'
import Brands from '../Brands'
import NewArrivals from './NewArrival'
import Banner from './Banner'
import GamerWorld from './GamerWorld'
import PopularSales from './PopularSales'
import Sales from '../Sales'

const HomePage = () => {
  return (
    <div>
      <Carousel/>
      <Brands/>
      <NewArrivals/>
      <Banner/>
      <GamerWorld/>

      <Sales/>
      <PopularSales/>
    </div>
  )
}

export default HomePage
