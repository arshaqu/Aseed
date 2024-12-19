import React from 'react';
import image1 from './Assets/Levlihood.jpg'; // Replace with your actual image path
import image2 from './Assets/Image2.jpg'; // Replace with your actual image path
import Leaf from './Assets/leaf.png'; // Replace with your actual image path
import round from './Assets/15.png'


function AboutUs() {
    return (
        <section  
          id="about-us"
          className="flex flex-wrap items-center justify-center bg-no-repeat bg-right bg-[length:400px] py-12 px-6"
          style={{ backgroundImage: `url(${Leaf})` }}
        >
          {/* Left Section - Image and Circular Overlay */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/* Background Large Image */}
            <div className="rounded-full overflow-hidden w-[400px] h-[300px] lg:w-[500px] lg:h-[500px]">
              <img
                src={image1}
                alt="Agriculture Background "
                className="w-full h-full object-cover "
              />
            </div>
            {/* Circular Overlay Image */}
            <div className="absolute bottom-[-10%] left-[15%] lg:left-[35%] w-[180px] h-[180px] rounded-full  overflow-hidden shadow-lg">
                <img   src={round} alt="" className='absolute inset-0 mt-1 mr-2 z-10' />
              <img
                src={image2}
                alt="Farmer"
                className= " absolute w-full h-full object-cover"
              />
            </div>
          </div>
    
          {/* Right Section - Content */}
          <div className="w-full lg:w-1/2 px-6 lg:px-12 mt-10 lg:mt-0">
            <h2 style={{fontWeight:'900px'}} className="text-3xl lg:text-4xl  text-gray-800 mb-4 marcellus text-center">
              About Us
            </h2>
            <p className="text-gray-900 mb-6 leading-relaxed marcellus">
              The Association for Social Engineering and Entrepreneurship Development (ASEED) is a non-profit organization
              based in Malappuram district of Kerala. The institution is aiming at the sustainable and comprehensive
              development of the marginalized sections of the community. Since April 2018 ASEEDs activities are primarily in
              Malappuram, Kozhikode, and Palakkad districts. The organization actively participated in 2018 and 2019
              post-flood relief activities and 2020 post-covid prevention activities. The other major activities, including
              health education, campaigns, awareness programs, training, library construction for students in tribal areas,
              and distribution of study materials in the Nilamarbur region.
              <br />
              <br />
              In the year 2022, this association was registered under the 1860 Society Act and decided to expand its further
              activities throughout.
            </p>
    
           
          </div>
        </section>
  );
}

export default AboutUs;
