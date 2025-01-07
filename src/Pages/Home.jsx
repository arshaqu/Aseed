import React from 'react';
import '../../src/index.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AboutUs from './AboutUs';
import Whatwedo from './Whatwedo';
import Questions from './Questions';
import { FaWhatsapp } from 'react-icons/fa';
import Footer from './components/Footer';
import NewsEvents from './NewsEvents';

function Home() {
  return (
    <section id="home" style={{ marginTop: '-5px' }}>
      {/* Navbar Component */}
      <Navbar />

      {/* Banner Section */}
      <Banner />

      {/* About Us Section */}
      <AboutUs />

      {/* What We Do Section */}
      <Whatwedo />

      {/* Questions Section */}
      <Questions />

      {/* News & Events Section */}
      <NewsEvents />

      {/* Footer Section */}
      <Footer />

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MGO in Malappuram",
    "url": "https://www.aseed.online",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Malappuram",
      "addressRegion": "KL",
      "addressCountry": "India",
    },
    "description": "Trusted MGO services in Malappuram, offering solutions for empowerment and social engineering.",
  })}
</script>

    </section>
  );
}

export default Home;
