import React, { useState, useEffect } from 'react';
import Niu from '../../../assets/images/niu.png';
import Niulogo from '../../../assets/images/niulogo.jpeg';
import Julien from '../../../assets/images/jds.png';
import Jdslogo from '../../../assets/images/jdslogo.jpeg';
import './index.scss';

const institutions = [
  {
    name: 'Noida International University',
    time: "(2021-2024)",
    image: Niulogo,
    background: Niu,
    loc: "Yamuna Expy, Sector 17A, Uttar Pradesh 203201",
    website: 'https://niu.edu.in',
    degree: "Bachelor of Science",
    specialization: "Computer Science (Hons.)",
    finalGrade: "9.40 CGPA"
  },
  {
    name: 'Julien Day School',
    time: "(2019-2021)",
    image: Jdslogo,
    loc: "A-10, Kalyani Nadia, West Bengal 741235",
    background: Julien,
    website: 'https://www.juliendayschool.org/kalyani',
    degree: "High School Diploma (ISC)",
    specialization: "Science Stream (PCM with Computer)",
    finalGrade: "91%"
  },
  {
    name: 'Julien Day School',
    time: "(2008-2019)",
    loc: "A-10, Kalyani Nadia, West Bengal 741235",
    image: Jdslogo,
    background: Julien,
    website: 'https://www.juliendayschool.org/kalyani',
    specialization: "Science",
    degree: "Marticulation (ICSE)",
    finalGrade: "91.6%"
  },
];

const colors = ['#5cf64a', '#dd6f2b', '#dd6f2b']; // Define colors for each institution

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const currentInstitution = institutions[activeIndex];
    document.body.style.backgroundImage = `url(${currentInstitution.background})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.transition = 'background-image 0.5s ease-in-out';

    return () => {
      document.body.style.backgroundImage = '';
    };
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % institutions.length);
    setShowDetails(false);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + institutions.length) % institutions.length);
    setShowDetails(false);
  };

  const toggleDetails = () => {
    setShowDetails((prevShow) => !prevShow);
  };

  const currentInstitution = institutions[activeIndex];
  const currentColor = colors[activeIndex]; // Get color based on active index

  return (
    <div className="education-container">
      <button className="arrow left-arrow" onClick={handlePrevious}>&lt;</button>

      <div className="education-item" onClick={toggleDetails}>
        <div className="education-header">
          <img
            src={currentInstitution.image}
            alt={currentInstitution.name}
            className="education-image"
            onClick={() => window.open(currentInstitution.website)}
          />
          <div className="education-details">
            <h2><span style={{ color: currentColor }}>{currentInstitution.name}</span></h2>
            <p>{currentInstitution.time}</p>
          </div>
        </div>
        {showDetails && (
          <div className="additional-details">
            <p><span style={{ color: currentColor }}>Degree: </span>{currentInstitution.degree}</p>
            <p><span style={{ color: currentColor }}>Specialization: </span>{currentInstitution.specialization}</p>
            <p ><span style={{ color: currentColor }}>Final Grade: </span>{currentInstitution.finalGrade}</p>
            <p><span style={{ color: currentColor }}>Location:</span> {currentInstitution.loc}</p>
          </div>
        )}
      </div>

      <button className="arrow right-arrow" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Education;
