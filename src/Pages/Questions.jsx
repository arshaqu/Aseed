import React from 'react';
import questionImg from './Assets/qustin2.png';
import Plant from './Assets/bgImg.png';

function Questions() {
  return (
    <div style={{ ...containerStyle, backgroundImage: `url(${Plant})` }}>
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
          Agriculture matters to <br /> the future of development
        </h2>

        {/* Accordion Section */}
        <div style={accordionContainerStyle}>
          <details style={accordionStyle}>
            <summary style={summaryStyle}>What do you add to the soil before you plant a crop?</summary>
            <p style={contentStyle}>
              We add natural compost, organic fertilizers, and nutrient-rich materials to enrich the soil and ensure healthy plant growth.
            </p>
          </details>

          <details style={accordionStyle}>
            <summary style={summaryStyle}>Do you use herbicides?</summary>
            <p style={contentStyle}>
              No, we avoid herbicides and focus on organic farming practices to keep our produce healthy and chemical-free.
            </p>
          </details>

          <details style={accordionStyle}>
            <summary style={summaryStyle}>Where does the water come from that you use on your crops?</summary>
            <p style={contentStyle}>
              We use natural rainwater collection, sustainable irrigation methods, and groundwater sources responsibly for crop hydration.
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
  fontSize: '14px',
  marginBottom: '8px',
};

const contentStyle = {
  marginTop: '10px',
  color: '#5A6C57',
};

export default Questions;
