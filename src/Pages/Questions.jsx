import React from 'react';
import questionImg from './Assets/qustin2.png';

function Questions() {
  return (
    <div style={{ ...containerStyle, }}>
      {/* Image Section */}
      <div style={imageContainerStyle}>
        <img 
          src={questionImg}
          alt="Farmer with organic produce" 
          style={imageStyle}
        />
      </div>

      {/* Question and Answers Section */}
      <div className='montserrat' style={textContainerStyle}>
        <h4 style={headerStyle}>GET TO KNOW US</h4>
        <h2 style={titleStyle}>
        ASEED is the key to the future of <br /> sustainable social development
        </h2>

        {/* Accordion Section */}
        <div style={accordionContainerStyle}>
          <details style={accordionStyle}>
            <summary style={summaryStyle}>What is our vision ?</summary>
            <p style={contentStyle}>
            Our vision is to create a society where every individual, regardless of their background, caste, gender, ability, or socioeconomic status, has equal access to resources, opportunities, and social justice.
            </p>
          </details>

          <details style={accordionStyle}>
            <summary style={summaryStyle}>How did we evolve ?</summary>
            <p style={contentStyle}>
            Since 2018, ASEED has worked in Malappuram, Kozhikode, and Palakkad districts, contributing to post-flood relief (2018-2019) and post-COVID prevention efforts in 2020. The organization also focuses on health education, awareness campaigns, training, and building libraries for students in tribal areas, especially in Nilambur. Registered in 2022 under the 1860 Society Act, ASEED aims to expand its activities and continue empowering vulnerable communities throughout the region
            </p>
          </details>

       
        </div>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
  gap: '20px',
  backgroundSize: '400px 335px', // Adjust size of the background image
  backgroundPosition: 'start',
  backgroundRepeat: 'no-repeat',
};

const imageContainerStyle = {
  position: 'relative',
  flex: '1 1 300px',
  maxWidth: '400px',
};

const imageStyle = {
  width: '100%',
  borderRadius: '10px',
};

const textContainerStyle = {
  flex: '1 1 300px',
  maxWidth: '600px',
};

const headerStyle = {
  color: '#6DBE4E',
  marginBottom: '15px',
};

const titleStyle = {
  marginBottom: '30px',
  fontWeight: 500,
  color: '#000',
};

const accordionContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const accordionStyle = {
  background: '#F7F7F7',
  border: '1px solid #E1E1E1',
  borderRadius: '8px',
  padding: '10px 15px',
  cursor: 'pointer',
};

const summaryStyle = {
  fontWeight: 600,
  color: '#1f4e3d',
  fontSize: '13px',
  marginBottom: '8px',
};

const contentStyle = {
  marginTop: '10px',
  color: '#5A6C57',
  fontSize:'11px'
};

export default Questions;
