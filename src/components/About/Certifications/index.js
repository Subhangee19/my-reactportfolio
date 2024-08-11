import React from 'react';
import { useEffect, useState } from 'react'
import Badminton from '../../../assets/images/badminton.jpg';
import Quiz from '../../../assets/images/quiz.jpg.jpg';
import Innov from '../../../assets/images/innovative.jpg.jpg';
import Seminar from '../../../assets/images/seminar.jpg.jpg';
import Tug from '../../../assets/images/tug-of-war.jpg.jpg';
import Four from '../../../assets/images/400m2020.jpg';
import One from '../../../assets/images/100m2020.jpg';
import Two from '../../../assets/images/200m2018.jpg';
import Cricket from '../../../assets/images/cricket2018.jpg';
import Hockey from '../../../assets/images/hockey2017.jpg';
import Speech from '../../../assets/images/speech2013.jpg';
import Throw from '../../../assets/images/throwball2019.jpg';
import Shot from '../../../assets/images/shot2020.jpg';
import Dance from '../../../assets/images/dance2016.jpg';
import Sing from '../../../assets/images/sing2017.jpg';
import High from '../../../assets/images/high2019.jpg';
import Hindi from '../../../assets/images/nationalhindi2014.jpg';
import Nco from '../../../assets/images/nco2012.jpg';
import Attend from '../../../assets/images/attend.png';
import Book from '../../../assets/images/book.png';
import Cyber from '../../../assets/images/cyberthon.png';
import Publish from '../../../assets/images/publish.png';
import './index.scss';
import AnimatedLetters from '../../AnimatedLetters'

const certifications = [
  {
    title: 'Publication : Role of Artificial Intelligence and Internet of Things in Neurodegenerative Diseases(2024)',
    image: Publish,
    url: 'https://link.springer.com/chapter/10.1007/978-3-031-53148-4_2',
  },
  {
    title: (
      <>
        <span style={{ color: '#5cf64a' }}>1st Runner Up in Innovative Ideas</span> - Noida International University <span style={{ color: '#5cf64a' }}>(2023)</span>
      </>
    ),
    image: Innov,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>Winner of Book Reading Competition</span> - Noida International University <span style={{ color: '#5cf64a' }}>(2023)</span>
        </>
    ),
    image: Book,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>Winner of Tug Of War</span> - Noida International University <span style={{ color: '#5cf64a' }}>(2023)</span>
        </>
    ),
    image: Tug,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>Participated in Cyberthon seminar</span> - Amity University <span style={{ color: '#5cf64a' }}>(2023)</span>
        </>
    ),
    image: Cyber,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>Winner of Technomania Quiz Competition</span> - Noida International University <span style={{ color: '#5cf64a' }}>(2021)</span>
        </>
    ),
    image: Quiz,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>Student Co-ordinator for annual events</span> - Noida International University <span style={{ color: '#5cf64a' }}>(2021)</span>
        </>
    ),
    image: Badminton,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>Winner of Inter-Branch 400m mixed circular relay</span> - Julien Day School <span style={{ color: '#5cf64a' }}>(2020)</span>
        </>
    ),
    image: Four,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>Winner of Inter-Branch 100m Flat Race</span> - Julien Day School <span style={{ color: '#5cf64a' }}>(2020)</span>
        </>
    ),
    image: One,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>Winner of Inter-House shotput</span> - Julien Day School <span style={{ color: '#5cf64a' }}>(2020)</span>
        </>
    ),
    image: Shot,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>Award for 100% attendance from KG to class X</span> - The Julien Educational Trust <span style={{ color: '#5cf64a' }}>(2019)</span>
        </>
    ),
    image: Attend,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>Winner of Inter-Branch High Jump</span> - Julien Day School <span style={{ color: '#5cf64a' }}>(2019)</span>
        </>
    ),
    image: High,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>1st RunnerUp in Inter-House Throwball</span> - Julien Day School <span style={{ color: '#5cf64a' }}>(2019)</span>
        </>
    ),
    image: Throw,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>Winner of Inter-Branch 200m Flat Race</span> - Julien Day School <span style={{ color: '#5cf64a' }}>(2018)</span>
        </>
    ),
    image: Two,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>Winner of Inter-House Cricket</span> - Julien Day School <span style={{ color: '#5cf64a' }}>(2018)</span>
        </>
    ),
    image: Cricket,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>2nd RunnerUp in Inter-House Hockey</span> - Julien Day School <span style={{ color: '#5cf64a' }}>(2017)</span>
        </>
    ),
    image: Hockey,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>1st RunnerUp in Inter-House English Vocals</span> - Julien Day School <span style={{ color: '#5cf64a' }}>(2017)</span>
        </>
    ),
    image: Sing,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>1st RunnerUp in Inter-House Dance Competition</span> - Julien Day School <span style={{ color: '#5cf64a' }}>(2016)</span>
        </>
    ),
    image: Dance,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>1st in National Hindi Olympiad</span> - <span style={{ color: '#5cf64a' }}>(2014)</span>
        </>
    ),
    image: Hindi,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>1st RunnerUp in Inter-House Hindi Elocution</span> - Julien Day School <span style={{ color: '#5cf64a' }}>(2013)</span>
        </>
    ),
    image: Speech,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>Distinctive performance in National Cyber Olympiad</span> - <span style={{ color: '#5cf64a' }}>(2012)</span>
        </>
    ),
    image: Nco,
  },
  {
    title: (
      <>
      <span style={{ color: '#5cf64a' }}>Participated in Data Analytics session</span> - DUCAT, Noida 
        </>
    ),
    image: Seminar,
  },
];

const Certifications = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="certifications-container">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'c', 'h', 'i', 'e', 'v', 'e', 'm', 'e', 'n', 't', 's']}
            idx={15}
          />
        </h1>
      </div>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          cert.url ? (
            <a href={cert.url} target="_blank" rel="noopener noreferrer" key={index} className="cert-card">
              <img src={cert.image} alt={cert.title} className="cert-image" />
              <div className="cert-info">
                <h3>{cert.title}</h3>
              </div>
            </a>
          ) : (
            <div className="cert-card" key={index}>
              <img src={cert.image} alt={cert.title} className="cert-image" />
              <div className="cert-info">
                <h3>{cert.title}</h3>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Certifications;
