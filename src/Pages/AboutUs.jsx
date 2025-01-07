import React from 'react';
import image1 from './Assets/Aboutus.jpg'; // Replace with your actual image path
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
                loading='lazy'
                src={image1}
                alt="MGO services in Malappuram "
                className="w-full h-full object-cover "
              />
            </div>
            {/* Circular Overlay Image */}
            <div className="absolute bottom-[-10%] left-[15%] lg:left-[35%] w-[180px] h-[180px] rounded-full  overflow-hidden shadow-lg">
                <img loading='lazy'  src={round} alt="MGO services in Malappuram" className='absolute inset-0 mt-1 mr-2 z-10' />
              <img
                loading='lazy'
                src={image2}
                alt="MGO services in Malappuram"
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
            Association for Social Engineering and Entrepreneurship Development (ASEED) is a Non 
            profit organisation registered under 1860 societies registration act, Located in
             Munduparambu Malappuram District Kerala, we ASEED, dedicated to fostering a society 
             where every individual has equal access to opportunities, resources, and social justice.
              Our vision is rooted in inclusivity, striving to create a world where background, caste, 
              gender, ability, or socioeconomic status do not limit one's access to a better life. 
              <br />
              <br />
              We believe in empowering individuals and communities to thrive through a comprehensive approach to social, economic, 
              and health development.
            </p>
    
           
          </div>
        </section>
  );
}

export default AboutUs;
