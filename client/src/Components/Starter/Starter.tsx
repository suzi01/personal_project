import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./StarterStyles.scss";

interface Slide{
  imageSrc: string;
  alt: string;
}

function Starter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides:Slide [] = [
    { imageSrc: '/images/top-gun-maverick.jpg', alt: 'top-gun-maverick' },
    { imageSrc: '/images/daredevil.jpg', alt: 'daredevil' },
    { imageSrc: '/images/avengers-endgame.jpeg', alt:'end-game'},
    { imageSrc: '/images/stranger-things.jpg', alt:'stranger-things'}
 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);


  return (
    <div className="outer-section">
    <div className="bgImage">
    {slides.map((slide, index) => (
        <div className={`kenBurnSlides ${index === currentIndex ? 'active' : ''}`}
          key={index}
          // className={index === currentIndex && 'active'}
        >
          <img src={slide.imageSrc} alt={slide.alt} />
        </div>
      ))}

    </div>
      <div className="content">
        <div className="description">
          Welcome to Entertainment Central
          <br /> Home to Movies and TV shows. <br />
          Sign up or Login now!
        </div>
        <Link className="registerLink" to="/login">
          <button className="signUp">START HERE!</button>
        </Link>
      </div>
      <footer className="bottom">
        <div className="companies">
          <img src='/images/company_logos1.jpeg' />
          <img src='/images/company_logos2.jpeg' />
        </div>
      </footer>
    </div>
  );
}

export default Starter;