import React from 'react'
import '../../src/index.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AboutUs from './AboutUs'
import Whatwedo from './Whatwedo'
import Questions from './Questions'
import { FaWhatsapp } from 'react-icons/fa';
import Footer from './components/Footer'
import NewsEvents from './NewsEvents'


function Home() {
  return (
    <section id="home" style={{marginTop:'-5px'}}>
      <Navbar/>
      <Banner/>
      <AboutUs/>
      <Whatwedo/>
      <Questions/>
      <NewsEvents/>
      <Footer/>

    
    </section>
  )
}

export default Home
 