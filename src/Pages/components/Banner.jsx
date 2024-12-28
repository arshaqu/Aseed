import React, { useState, useEffect } from 'react';
import BannerImage from '../Assets/Banner1.jpg';
import BannerImage2 from '../Assets/Banner3.jpg';
import '../Home.css'; // Import the CSS file
import greenBg from '../Assets/Bg.png';
import Logoas from '../Assets/AseedBlack.png'

function Banner() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // Key to trigger animation restart

  useEffect(() => {
    // Change the banner every 5 seconds
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => {
        const nextBanner = prevBanner === 0 ? 1 : 0;
        setAnimationKey((prevKey) => prevKey + 1); // Update animation key to reset animation
        return nextBanner;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const bannerImage = currentBanner === 0 ? BannerImage : BannerImage2;
  const textColor = currentBanner === 0 ? '#ffff' : '#EFE784';
  const titleColor = currentBanner === 0 ? '#ffff' : '#ffff';
  const description =
    currentBanner === 0
      ? '"Together for equality, empowerment, and a brighter, inclusive society for all."'
      : '"Empowering communities through social engineering and entrepreneurship."';
  const title =
    currentBanner === 0
      ? 'Association for Social Engineering & Entrepreneurship Development'
      : 'Association for Social Engineering & Entrepreneurship Development';

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        key={animationKey} // Unique key to restart animation
        className="banner-zoom absolute inset-0 bg-cover bg-center"
        style={{
          marginTop: '-10px',
          backgroundImage: `url(${bannerImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      ></div>

      {/* Overlay Content with Conditional Background */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 sm:px-12 text-white">
      {/* Background and Logo Container */}
      <div className="absolute inset-0 z-0">
        <div 
          className="relative h-full  w-full "
          style={{
            backgroundImage: `url(${greenBg})`,
            backgroundPosition: '25% 48%',
            backgroundSize: '250px',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="">
    <img 
        src={Logoas} 
        alt="Logo"
        className="absolute w-80 h-auto mt-3 ml-[80px] sm:ml-[160px]"
        style={{
            top: '42%',
            left: '19%',
            transform: 'translate(-50%, -50%)',
        }}
    />
</div>


        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl">
      <h1
  style={{ color: textColor, fontWeight: 'bold' }}
  className="text-5xl lg:text-7xl  mt-[-200px] lg:mt-[00px] mb-4 text-start leading-tight smax-w-5xl oswald"
>
  {title}
</h1>

        
        <p 
          style={{ color: titleColor }} 
          className="lg:text-1xl text-gray-200 mb-6 leading-relaxed montserrat"
        >
          {description}
        </p>
        
        <a
          href="#"
          className="bg-white hover:bg-yellow-500 text-gray-800 font-bold lg:py-[12px] py-2 lg:px-[25px] px-2 rounded-md transition duration-300"
        >
          Discover More
        </a>
      </div>
    
  
  {/* Content goes here */}

    
      </div>
    </div>
  );
}

export default Banner;
