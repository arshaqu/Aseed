import React, { useState, useEffect } from 'react';
import BannerImage from '../Assets/Banner1.jpg';
import BannerImage2 from '../Assets/Banner2.jpg';
import brush from '../Assets/brush.png';


function Banner() {
  // State to manage the background image, text, and title
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    // Change the banner every 5 seconds
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner === 0 ? 1 : 0));
    }, 5000); // 5000 ms = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Select banner images, title, text, and color based on the state
  const bannerImage = currentBanner === 0 ? BannerImage : BannerImage2;
  const textColor = currentBanner === 0 ? '#ffffff' : '#f7c35f';
   // Change text color based on banner
  const description =
    currentBanner === 0
      ? '"Together for equality, empowerment, and a brighter, inclusive society for all."'
      : '"Empowering communities through social engineering and entrepreneurship."';
  const title =
    currentBanner === 0
      ? 'Association for Social Engineering & Entrepreneurship Development'
      : 'Association for Social Engineering and Entrepreneurship Development';

  return (
    <div className="relative h-screen">
  {/* Background Image */}
  <div style={{backgroundColor:'white'}} className="">
    <img  src={brush} alt="brush" style={{ opacity: 0.5 }} />
    </div>
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      marginTop: '-20px', // Adjust the margin-top to create space above the image
      backgroundImage: `url(${bannerImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      zIndex: -1, // Ensure background image is below the navbar
    }}
  ></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 sm:px-12 w-full text-white">
        <div className="max-w-5xl">
          {/* Title */}
          <h1 style={{ color: textColor }} className="text-4xl lg:text-6xl font-bold mb-4 text-start leading-tight max-w-4xl">
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-200 mb-6 leading-relaxed montserrat">
            {description}
          </p>

          {/* Button */}
          <a
            href="#"
            className="bg-white hover:bg-yellow-500 text-gray-800 font-bold py-4 px-16  rounded-md transition duration-300"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Left & Right Arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button style={{ color: '#f7c35f' }} className="text-white hover:text-white-400 text-4xl px-4">
          &#8249;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button style={{ color: '#f7c35f' }} className="text-white hover:text-yellow-400 text-4xl px-4">
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Banner;
