import React, { useState, useEffect } from 'react';
import Prutor from '../../../assets/images/prutor.jpg';
import Sathee from '../../../assets/images/sathee.jpg'
import Tech from '../../../assets/images/tech.png'
import Ct from '../../../assets/images/ct.jpeg';
import './index.scss';

const institutions = [
  {
    name: ' Prutor.ai, IITK',
    title: "Software Developer Intern",
    time: "(Jan 2024 - Apr 2024)",
    loc: "IIT Kanpur Extension Centre, Noida",
    image: Sathee,
    background: Prutor,
    website: 'https://prutor.ai/',
    point1: " • Fixing bugs in their websites along with assigning tasks and making sure daily target is met as a Team Leader.",
    point2: "• Working with JavaScript, Nodejs and Hugo server.",
    point3:"• Learning courses including AWS Certified Cloud Practitioner Certification Complete Program and Full Stack Developer (HTML5, CSS3, JavaScript, Bootstrap, PHP with MySQL)"
  },
  {
    name: 'Creative Technologies',
    title: "Frontend Web Applications Developer Intern",
    time: "(Jul 2023- Oct 2023)",
    loc:"Remote",
    image: Ct,
    background: Tech,
    website: 'https://www.linkedin.com/in/creative-technologies-798573260/?originalSubdomain=in',
    point1: " • Worked on the frontend for various projects by the company.",
    point2: "• Main project: CRM Website.",
    point3:"• Framework used: Tailwind CSS and ViteJs."
  },
  {
    name: 'Creative Technologies',
    title: " IT Administrator Intern",
    time: "(Jul 2023- Oct 2023)",
    loc:"Remote",
    image: Ct,
    background: Tech,
    website: 'https://www.linkedin.com/in/creative-technologies-798573260/?originalSubdomain=in',
    point1: " • Working for international campaigns.",
    point2: "• Managing user’s role and credential.",
    point3:"• Building and troubleshooting hardware, applications and infrastructure updates."
  },
];

const colors = ['#4ae2f6', '#c24af6', '#c24af6']; // Define colors for each institution


const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const currentInstitution = institutions[activeIndex];
    document.body.style.backgroundImage = `url(${currentInstitution.background})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.transition = 'background-image 0.5s ease-in-out';

    // Cleanup function to reset background when component unmounts
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % institutions.length);
    setShowDetails(false); // Hide details when switching
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + institutions.length) % institutions.length);
    setShowDetails(false); // Hide details when switching
  };

  const toggleDetails = () => {
    setShowDetails((prevShow) => !prevShow);
  };

  const currentInstitution = institutions[activeIndex];
  const currentColor = colors[activeIndex]; // Get color based on active index

  return (
    <div className="experience-container">
      <button className="arrow left-arrow" onClick={handlePrevious}>&lt;</button>

      <div className="experience-item" onClick={toggleDetails}>
        <div className="experience-header">
          <img src={currentInstitution.image} alt={currentInstitution.name} className="experience-image" onClick={() => window.open(currentInstitution.website)} />
          <div className="experience-details">
          <h2><span style={{ color: currentColor }}>{currentInstitution.title}</span></h2>
            <p>{currentInstitution.name} {currentInstitution.time}</p>
          </div>
        </div>
        {showDetails && (
          <div className="additional-details">
            <p><span style={{ color: currentColor }}>Location : </span>{currentInstitution.loc}</p>
            <p><span style={{ color: currentColor }}>Tasks : </span>{currentInstitution.point1}</p>
            <p>{currentInstitution.point2}</p>
            <p>{currentInstitution.point3}</p>
          </div>
        )}
      </div>

      <button className="arrow right-arrow" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Experience;
