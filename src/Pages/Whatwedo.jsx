import React, { useState, useEffect } from 'react';
import Agriculture from './Assets/Agriculture1.jpg';
import Enterprenuer from './Assets/Enterprenurship2.jpg';
import Health from './Assets/Health.jpg';
import YouthandChild from './Assets/Youth&Child4.jpg';
import SocialEnter from './Assets/SocialEnter.jpg';
import Education from './Assets/Education6.jpg';
import Social from './Assets/Social9.jpg';
import Wellbeing from './Assets/wellbeing.jpg';
import Community from './Assets/Community10.jpg';
import Levlihood from './Assets/Levlihood.jpg'






function Whatwedo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const initialCards = [
    {
      id: 1,
      image: Agriculture,
      alt: 'Organic Products',
      title: 'Agriculture and Livelihood',
      description: 'Continue indulged speaking technical out horrible domestic position.',
    },
    {
      id: 2,
      image: Enterprenuer,
      alt: 'Dairy Production',
      title: 'Entrepreneurship ',
      description: 'Continue indulged speaking technical out horrible domestic position.',
    },
    {
      id: 3,
      image: Health,
      alt: 'Sweet Exotic Fruits',
      title: 'Health',
      description: 'Continue indulged speaking technical out horrible domestic position.',
    },
    {
      id: 4,
      image: YouthandChild,
      alt: 'Fresh Vegetables',
      title: 'Women youth and child ',
      description: 'Continue indulged speaking technical out horrible domestic position.',
    },
    {
      id: 5,
      image: Social,
      alt: 'More Vegetables',
      title: 'Social Entrepreneurship',
      description: 'Continue indulged speaking technical out horrible domestic position.',
    },
    {
      id: 6,
      image: Education,
      alt: 'Education',
      title: 'Education',
      description: 'Continue indulged speaking technical out horrible domestic position.',
    },
    {
      id: 7,
      image: Levlihood,
      alt: 'Rare Spices',
      title: 'Livelihood Support',
      description: 'Continue indulged speaking technical out horrible domestic position.',
    },
    {
      id: 8,
      image: Wellbeing,
      alt: 'Gourmet Ingredients',
      title: 'Health and Wellbeing',
      description: 'Continue indulged speaking technical out horrible domestic position.',
    },
    {
        id: 9,
        image: Social,
        alt: ' Social Protection',
        title:  'Social Protection',
        description: 'Continue indulged speaking technical out horrible domestic position.',
      },
      {
        id: 10,
        image: Community,
        alt: 'Gourmet Ingredients',
        title: 'Community Engagement',
        description: 'Continue indulged speaking technical out horrible domestic position.',
      },
  ];

  // Cycle through cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 4) % initialCards.length
      );
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [initialCards.length]);

  // Determine the visible cards
  const visibleCards = initialCards.slice(
    currentIndex,
    currentIndex + 4
  );

  // Wrap around to show remaining cards if near the end
  const displayedCards =
    visibleCards.length < 4
      ? [...visibleCards, ...initialCards.slice(0, 4 - visibleCards.length)]
      : visibleCards;

  return (
    <div>
      {/* Header Section */}
      <section className="bg-gray-100 py-12 mt-5">
        <div
          style={{ marginBottom: '50px' }}
          className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24"
        >
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <p className="text-green-600 font-semibold uppercase mb-2">WHAT WE DO</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Currently we are{' '}
              <span className="text-black">selling organic food</span>
            </h2>
          </div>
          <div className="hidden md:block border-l border-gray-300 h-32 mx-8"></div>
          <div className="w-full md:w-1/2">
            <p className="text-gray-600 mb-6 leading-relaxed">
              Everything melancholy uncommonly but solicitude inhabiting projection off.
              Connection stimulated estimating excellence an to impression. Ladies she
              basket season age her uneasy saw. Discourse unwilling am no described.
            </p>
            <button className="bg-green-500 text-white font-semibold py-3 px-6 rounded hover:bg-green-600 transition duration-300">
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* Scrollable Card Section */}
      
  


      <section style={{backgroundColor:'#1f4e3d'}} className="mb-5 ">
  <div className="p-5 mx-auto max-w-full">
    <h1 style={{color:'white'}} className='text-center color-white montserrat'>Our Key Features</h1>
    <div className="flex flex-wrap gap-5 justify-center mt-3">
      {displayedCards.map((card) => (
        <div className="flex-shrink-0 w-[calc(50%-10px)] sm:w-1/2 md:w-1/3 lg:w-1/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full" src={card.image} alt={card.alt} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2x2 text-center font-bold tracking-tight text-gray-900 dark:text-white montserrat">{card.title}</h5>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>











    </div>
  );
}

export default Whatwedo;
