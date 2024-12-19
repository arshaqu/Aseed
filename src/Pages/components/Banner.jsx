import React, { useState, useEffect } from 'react';
import BannerImage from '../Assets/Banner1.jpg';
import BannerImage2 from '../Assets/Banner3.jpg';
import '../Home.css'; // Import the CSS file
import greenBg from '../Assets/Bg.png';

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
  const textColor = currentBanner === 0 ? '#fbaf3a' : '#ffff';
  const titleColor = currentBanner === 0 ? '#ffff' : '#ffff';
  const description =
    currentBanner === 0
      ? '"Together for equality, empowerment, and a brighter, inclusive society for all."'
      : '"Empowering communities through social engineering and entrepreneurship."';
  const title =
    currentBanner === 0
      ? 'Association for Social Engineering & Entrepreneurship Development'
      : 'Association for Social Engineering and Entrepreneurship Development';

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
      <div
  className="relative z-10 flex flex-col items-center justify-center h-full px-6 sm:px-12 text-white"
  style={{
    backgroundImage: currentBanner === 0 ? `url(${greenBg})` : `url(${greenBg})`,
    backgroundPosition: '20% 50%',  // Default background position for larger screens
    backgroundSize: '250px', // Size of the background image
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Content goes here */}

        <div className="max-w-5xl">
          <h1
            style={{ color: textColor }}
            className="text-3xl lg:text-5xl mb-4 text-start leading-tight max-w-4xl oleo"
          >
            {title}
          </h1>
          
          <p style={{ color: titleColor, fontWeight: 'bold' }} className="text-lg text-gray-200 mb-6 leading-relaxed montserrat">
            {description}
          </p>
          <a
            href="#"
            className="bg-white hover:bg-yellow-500 text-gray-800 font-bold lg:py-[12px] py-2 lg:px-[25px] px-2 rounded-md transition duration-300"
          >
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
