import React from 'react'
import '../../src/index.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AboutUs from './AboutUs'
import Whatwedo from './Whatwedo'
import Questions from './Questions'
import { FaWhatsapp } from 'react-icons/fa';
import Footer from './components/Footer'


function Home() {
  return (
    <section id="home" style={{marginTop:'-5px'}}>
      <Navbar/>
      <Banner/>
      <AboutUs/>
      <Whatwedo/>
      <Questions/>
      <Footer/>

      <a
        href="https://whatsapp.com/channel/0029VafT8iH7oQha2PP31o14"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <FaWhatsapp size={32} />
      </a>
      
    </section>
  )
}

export default Home
 