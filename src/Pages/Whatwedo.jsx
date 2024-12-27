import React, { useEffect, useRef, useState } from 'react';
import Agriculture from './Assets/keyImages/Agriculture101.jpg';
import Enterprenuer from './Assets/keyImages/Enterprenurship101.jpg';
import YouthandChild from './Assets/keyImages/Women,child101.jpg';
import Health from './Assets/keyImages/Health101.jpg';
import Education from './Assets/keyImages/Education101.jpg';
import Levlihood from './Assets/keyImages/livelihood101.jpg';
import Community from './Assets/keyImages/CommunityEngagement.jpg';
import SocialEnter from './Assets/keyImages/socialenterprenuership101.jpg'
import SkillDevelop from './Assets/keyImages/SkillDevelop101.jpg'
import Wellbeing from './Assets/keyImages/Socialsecuritywellbeing101.jpg'

function Whatwedo() {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const cardWidth = 272;

  const cards = [
    {
      id: 1,
      image: Agriculture,
      alt: 'Organic Products',
      title: 'Agriculture',
      description: 'Enhancing food security and improving economic conditions through sustainable agricultural practices.',
    },
    {
      id: 2,
      image: Enterprenuer,
      alt: 'Dairy Production',
      title: 'Entrepreneurship',
      description: 'Cultivating a spirit of innovation and supporting small businesses to foster economic independence.',
    },
    {
      id: 3,
      image: Health,
      alt: 'Sweet Exotic Fruits',
      title: 'Health',
      description: 'Providing access to healthcare, nutrition, and mental wellness services to improve quality of life.',
    },
    {
      id: 4,
      image: YouthandChild,
      alt: 'Fresh Vegetables',
      title: 'Women youth and child',
      description: 'Focusing on gender equity, youth empowerment, and child development to create brighter futures for the next generation.',
    },
    {
      id: 5,
      image: SocialEnter,
      alt: 'More Vegetables',
      title: 'Social Entrepreneurship',
      description: 'Encouraging business models that address social challenges and promote community development.',
    },
    {
      id: 6,
      image: Education,
      alt: 'Education',
      title: 'Education',
      description: 'Ensuring marginalized children and women have access to quality, accessible learning experiences that empower and uplift.',
    },
    {
      id: 7,
      image: Levlihood,
      alt: 'Rare Spices',
      title: 'Livelihood ',
      description: 'Economic empowerment through skills training, entrepreneurship, and job placement.',
    },
    {
      id: 8,
      image: SkillDevelop,
      alt: 'Skill Development',
      title: 'Skill Development',
      description: 'Offering skills training, entrepreneurship support, and job placement initiatives to foster economic empowerment.',
    },
    {
      id: 10,
      image: Community,
      alt: 'Gourmet Ingredients',
      title: 'Community Engagement',
      description: 'Building resilient and supportive communities through participatory approaches that empower individuals to drive change.',
    },
    {
      id: 11,
      image: Wellbeing,
      alt: 'Gourmet Ingredients',
      title: 'Social security Wellbeing',
      description: 'Building resilient and supportive communities through participatory approaches that empower individuals to drive change.',
    },
  ];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      const container = scrollContainerRef.current;
      
      // Check if we need to reset the scroll position
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - cardWidth) {
        container.scrollLeft = 0;
      } else if (container.scrollLeft <= 0 && direction === 'left') {
        container.scrollLeft = container.scrollWidth - container.clientWidth - cardWidth;
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoScrolling && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        
        // Check if we're near the end
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - cardWidth) {
          container.scrollLeft = 0;
        } else {
          handleScroll('right');
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  return (
    <div>
      <section id='features' style={{ backgroundColor: '#1f4e3d' }} className="py-8 overflow-hidden relative">
        <h1 className="text-center text-white montserrat text-2xl font-bold">Our Key Areas</h1>
        <h2 style={{ fontWeight: 100 }} className='text-center mb-8 text-white montserrats text-1xl'>
          Our work spans across key areas such as:
        </h2>

        <button 
          onClick={() => handleScroll('left')} 
          className="absolute left-4 top-1/2 z-10 bg-white/80 hover:bg-white text-green-700 rounded-full p-2 transform -translate-y-1/2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button 
          onClick={() => handleScroll('right')} 
          className="absolute right-4 top-1/2 z-10 bg-white/80 hover:bg-white text-green-700 rounded-full p-2 transform -translate-y-1/2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <div className="relative w-full overflow-hidden" ref={scrollContainerRef}>
          <div className="flex whitespace-nowrap">
            {/* Original cards */}
            {cards.map((card) => (
              <div key={`${card.id}-duplicate`} className="flex-shrink-0 w-64 mx-4 bg-white rounded-lg shadow dark:bg-gray-800 overflow-hidden h-80">
                <div className="flex flex-col h-full">
                  <div className="flex justify-center items-center pt-6 pb-1">
                    <img className="rounded-full w-32 h-32 object-cover" src={card.image} alt={card.alt} />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <h5 className="font-bold text-gray-900 dark:text-white text-center text-lg mb-2 montserrat">{card.title}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center flex-grow montserrat whitespace-normal break-words">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicated cards for seamless looping */}
            {cards.map((card) => (
              <div key={`${card.id}-duplicate`} className="flex-shrink-0 w-64 mx-4 bg-white rounded-lg shadow dark:bg-gray-800 overflow-hidden h-80">
                <div className="flex flex-col h-full">
                  <div className="flex justify-center items-center pt-6 pb-1">
                    <img className="rounded-full w-32 h-32 object-cover" src={card.image} alt={card.alt} />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <h5 className="font-bold text-gray-900 dark:text-white text-center text-lg mb-2 montserrat">{card.title}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center flex-grow montserrat whitespace-normal break-words">{card.description}</p>
                  </div>
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