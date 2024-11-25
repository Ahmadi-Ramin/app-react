import React from 'react'
import './Home.css'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import Hero from '../../components/hero/Hero'
import PopularLocation from '../../components/popularLocations/PopularLoaction'
import Footer from '../../components/footer/Footer'
import sea from '../../../public/assets/sea.jpg';
import SearchItem from '../../components/searchItem/SearchItem'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero 
        image={sea}
        mainHeader="Are you ready for an adventure?" 
        secondaryHeader="Browse through the popular locations."
      />
      <PopularLocation  path="/Catalog"/>
      <SearchItem />
      <MailList/>
      <Footer/>
    </div>
  )
}

export default Home;