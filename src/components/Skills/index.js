import React, { useEffect, useState } from 'react';
import TagCloud from 'TagCloud';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const container = document.querySelector('.tag-cloud');
        if (container) {
            container.innerHTML = ''; // Clear the container before initializing
        }

        const texts = [
            'My Skills', 'React', 'Node.js', 'Express', 'MongoDB', 
            'HTML', 'CSS', 'SASS', 'Bootstrap', 'Git',  
            'GitHub', 'Firebase', 'AWS', 'Java', 'Kotlin'
        ];

        const options = {
            radius: 250,
            maxSpeed: 'normal',
            initSpeed: 'normal',
            direction: 135,
            keep: true
        };

        TagCloud(container, texts, options);

        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);


        // Cleanup function to clear the timeout and clean up the TagCloud container
        return () => {
            clearTimeout(timeoutId);
            if (container) {
                container.innerHTML = ''; // Clear the container to prevent duplication
            }
        };
    }, []);

    return (
        <>
            <div className="container skills-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'A', 'c', 't', 'i', 'v', 'i', 't','i','e','s']}
                            idx={15}
                        />
                    </h1>
                    <p><span style={{ color: '#5cf64a' }}>TECHNICAL SKILLS : </span>React.jS, Tailwind CSS, SASS, Vite.jS, Hugo Server, JavaScript ES6+, HTML+
                    CSS, React Router, Leaflet, EmailJS, Firebase, Full-Stack Web Development,
                    Web Design, Adaptive Design, Responsiveness,
                    Java, C, C++, Python, Kotlin,
                    Flutter, Android Studio,
                    AWS Certified Cloud Practitioner.</p>
                    <p><span style={{ color: '#5cf64a' }}>SOFT SKILLS : </span>Effective Communication, Teamwork, Team Collaboration, Presentation, Time
                    Management and Leadership, Ability to troubleshoot, Problem-Solving Skills and
                    Critical Thinking.</p>
                    <p><span style={{ color: '#5cf64a' }}>EXTRA-CURRICULAR ACTIVITIES : </span></p>
                    <p><span style={{ color: '#5cf64a' }}>• Team Leader in projects at Prutor.ai - </span>Assigning tasks to team members and making sure all queries are taken care of, daily target is met and responsibility is fulfilled as a Team Leader.</p>
                    <p><span style={{ color: '#5cf64a' }}>• Student President of CyberZero club - </span>Organizing and hosting events and motivating participants to join the Computer Science club for promoting innovation, holistic skill development, and knowledge sharing.</p>
                    <p><span style={{ color: '#5cf64a' }}>• Student Coordinator of Annual Sports Meet - </span>Managing participants, maintaining discipline, and helping with queries.</p>
                    <p><span style={{ color: '#5cf64a' }}>• Class Representative - </span>Standing up for student interests and Ensuring the class does not face any problems regarding academic resources.</p>
                    <p><span style={{ color: '#5cf64a' }}>• Others - </span>Anchoring, Miss SPARK 2021, Miss JDS 2019, Athletics, Dance, Vocals, Speech, Art & Craft.</p>
                </div>
                <div className="tag-cloud"></div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Skills;
