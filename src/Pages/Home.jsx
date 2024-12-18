import React from 'react'
import '../../src/index.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import AboutUs from './AboutUs'
import Whatwedo from './Whatwedo'
import Questions from './Questions'


function Home() {
  return (
    <div style={{marginTop:'-5px'}}>
      <Navbar/>
      <Banner/>
      <AboutUs/>
      <Whatwedo/>
      <Questions/>
      
    </div>
  )
}

export default Home
 