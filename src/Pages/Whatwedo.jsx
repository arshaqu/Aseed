import React from 'react';
import Agriculture from './Assets/Agriculture1.jpg';
import Enterprenuer from './Assets/Enterprenurship2.jpg';
import YouthandChild from './Assets/WomenChild.jpg';
import Health from './Assets/Health.jpg';
import Social from './Assets/Social9.jpg';
import Education from './Assets/Education6.jpg';
import Levlihood from './Assets/Levlihood.jpg';
import Community from './Assets/Community10.jpg';
import SocialEnter from './Assets/SocialEnter.jpg'
import SkillDevelop from './Assets/SkillDevelop.jpg'

function Whatwedo() {
  const cards = [
    {
      id: 1,
      image: Agriculture,
      alt: 'Organic Products',
      title: 'Agriculture and Livelihood',
      description: ' Enhancing food security and improving economic conditions through sustainable agricultural practices.',
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
      image:SocialEnter,
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
      title: 'Livelihood Support',
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
      id: 9,
      image: Social,
      alt: 'Social Protection',
      title: 'Social Protection',
      description: 'Advocacy, counseling, and legal aid for vulnerable individuals',
    },
    {
      id: 10,
      image: Community,
      alt: 'Gourmet Ingredients',
      title: 'Community Engagement',
      description: 'Building resilient and supportive communities through participatory approaches that empower individuals to drive change.',
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <section id='mission' className="bg-gray-100 py-12 mt-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <p className="text-green-600 font-semibold uppercase mb-2">Explore</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
             Our Misssion{' '}
              <span className="text-black"></span>
            </h2>
          </div>
          <div className="hidden md:block border-l border-gray-300 h-32 mx-8"></div>
          <div className="w-full md:w-1/2">
            <p style={{fontSize:'13px'}} className="text-gray-400  leading-relaxed montserrat">
            Our mission focuses on bridging the gap between marginalized communities and mainstream opportunities. By leveraging initiatives
             in livelihood and entrepreneurship, we aim to create pathways for social cohesion, inclusive growth, and the restoration of human
              dignity. Through empowering women, youth, children, and vulnerable groups, we are laying the foundation for a future built on equality,
               self-reliance, and mutual support.

            </p>

            <p style={{fontSize:'13px'}} className="text-gray-400 mt-3 mb-6 leading-relaxed montserrat">
            We are committed to creating sustainable change by addressing these interconnected areas. Through our collective efforts, we aim to inspire a society that embraces diversity, encourages opportunity, and fosters social justice for all.

            </p>
            <button className="bg-green-500 text-white font-semibold py-3 px-6 rounded hover:bg-green-600 transition duration-300">
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* Improved Continuous Scrolling Section */}
      <section id='features' style={{ backgroundColor: '#1f4e3d' }} className="py-8 overflow-hidden relative">
        <h1 className="text-center text-white montserrat text-2xl font-bold ">
          Our Key Areas
        </h1>
        <h2 style={{fontWeight:100}} className='text-center mb-8 text-white montserrats text-1xl'>Our work spans across key areas such as:</h2>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex whitespace-nowrap animate-scroll"
            style={{ animationDuration: `${cards.length * 2 }s` }}
          >
            {cards.concat(cards).map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 mx-4 bg-white rounded-lg shadow dark:bg-gray-800 overflow-hidden h-80"
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-center items-center pt-6 pb-1">
                    <img
                      className="rounded-full w-32 h-32 object-cover"
                      src={card.image}
                      alt={card.alt}
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                <h5 className="font-bold text-gray-900 dark:text-white text-center text-lg mb-2 montserrat">
                  {card.title}
                </h5>
                <p 
                  style={{
                    maxWidth: '500px',
                    overflowWrap: 'break-word', 
                    whiteSpace: 'normal'
                  }} 
                  className="text-sm text-gray-600 dark:text-gray-400 text-center flex-grow montserrat"
                >
                  {card.description}
                </p>
              </div>

                </div>
              </div>
            ))}
          </div>
        </div>
        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
                 0% {
                transform: translateX(0);
              }
            }
            .animate-scroll {
              display: flex;
              animation: scroll linear infinite;
            }
            .line-clamp-2 {
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
            .line-clamp-4 {
              display: -webkit-box;
              -webkit-line-clamp: 4;
              -webkit-box-orient: vertical;
              overflow: hidden;
            }
          `}
        </style>
      </section>
    </div>
  );
}

export default Whatwedo;
