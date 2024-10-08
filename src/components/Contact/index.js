import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import 'leaflet/dist/leaflet.css';
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)

        // Cleanup function to clear the timeout
        return () => clearTimeout(timeoutId);
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_08ox0gr',
                'template_kudovij',
                form.current,
                'k8UjzZav9GUUC4YlS'
            )
            .then(
                () => {
                  alert('Message successfully sent!')
                  window.location.reload(false)
                },
                () => {
                  alert('Failed to send the message, please try again')
                }
              )
          }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                            strArray = {['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} 
                            idx={15}
                        />
                    </h1>
                    <p>
                    I'm always eager to <span style={{ color: '#5cf64a' }}>connect</span> with fellow professionals, discuss new 
                    opportunities, and <span style={{ color: '#5cf64a' }}>collaborate</span> on exciting projects. Whether you have a 
                    question, need assistance, or want to share an idea, feel free to reach out. 
                    You can contact me via email or through my social media profiles. I look forward 
                    to hearing from you and together we can <span style={{ color: '#5cf64a' }}>explore</span> how we can work to <span style={{ color: '#5cf64a' }}>achieve </span>great things.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                           <ul>
                            <li className='half'>
                                <input 
                                type='text' 
                                name='name' 
                                placeholder='Name' 
                                required 
                                />
                            </li>
                            <li className='half'>
                                <input 
                                type='email' 
                                name='email' 
                                placeholder='Email' 
                                required 
                                />
                            </li>
                            <li>
                                <input 
                                type='text' 
                                name='subject' 
                                placeholder='Subject' 
                                required 
                                />
                            </li>
                            <li>
                                <textarea  
                                name='message' 
                                placeholder='Your Message' 
                                required>
                                </textarea>
                            </li>
                            <li>
                                <input
                                type="submit" 
                                className='flat-button'
                                value="SEND"
                                />
                            </li>
                            </ul> 
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Subhangee Bhattacharjee,
                    <br />
                    7361 Qutub Road Chowk,
                    <br />
                    Delhi, India
                    <br />
                    <span>subhisa19@gmail.com</span>

                </div>
                <div className='map-wrap'>
                    <MapContainer center={[28.649217, 77.217817]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[28.649217, 77.217817]}>
                            <Popup>Subhu lives here, come over for a cup of coffee! </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact
