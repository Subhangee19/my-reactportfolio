import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import LogoS from '../../../assets/images/susu.png';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
       
        duration: 20,
      });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <div className="circle-bg"></div>
      <div className="circle-bgs"></div>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript, Developer"
      />
    </div>
  );
};

export default Logo;
