import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { Link } from 'react-router-dom'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
    }, [])
    
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                Tech-savvy Software Developer with a passion for React.js, Tailwind CSS, and JavaScript. I’m all about <span style={{ color: '#5cf64a' }}>crafting cool, user-friendly web apps</span> and having fun while doing it! Whether solo or in a team, I love solving problems and learning new tricks. <span style={{ color: '#5cf64a' }}>Ready to bring some creative energy to a web development role!</span>
                </p>
                <p>Throughout my academic journey, I’ve always been the one who couldn’t sit still—whether it’s on the field as an <span style={{ color: '#5cf64a' }}>athlete</span> or in the spotlight at <span style={{ color: '#5cf64a' }}>cultural events.</span> I love the thrill of <span style={{ color: '#5cf64a' }}>anchoring events</span> and <span style={{ color: '#5cf64a' }}>sharing presentations;</span> there’s just something about connecting with an audience that energizes me and makes the whole experience unforgettable.</p>
                <p><span style={{ color: '#5cf64a' }}>Click on these tabs to learn more <b>ABOUT ME!</b></span></p>
                
                    <Link to="/education" className='flat-button'>EDUCATION</Link>
            <Link to="/experience" className='flat-button'>EXPERIENCE</Link>
            <Link to="/certifications" className='flat-button'>CERTIFICATIONS</Link>
        
            </div>
            

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
            </div>
        <Loader type="pacman" />
        </>
    )
}

export default About