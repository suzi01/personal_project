import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom"



function Starter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
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
    <Container>
    <BgImage>
    {slides.map((slide, index) => (
        <KenBurnSlides
          key={index}
          className={index === currentIndex && 'active'}
        >
          <img src={slide.imageSrc} alt={slide.alt} />
        </KenBurnSlides>
      ))}
      
    </BgImage>
      <Content>
        <Description>
          Welcome to Entertainment Central
          <br /> Home to Movies and TV shows. <br />
          Sign up or Login now!
        </Description>
        <RegisterLink to="/login">
          <SignUp>START HERE!</SignUp>
        </RegisterLink>
      </Content>
      <Bottom>
        <Companies>
          <img src='/images/company_logos1.jpeg' />
          <img src='/images/company_logos2.jpeg' />
        </Companies>
      </Bottom>
    </Container>
  );
}
const Container = styled.section`
  position: absolute;
  ${'' /* top: 80px; */}
  background-color: black;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0; 
  z-index: -1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 0;

  @media (max-width: 768px) {
    height:100%;
  }
`;


const ken_burns = keyframes`
   0% {
    opacity: 1;
  }
  20% {
    opacity: 1;
  }
  33% {
    transform: scale(1.1) translateX(5%);
    opacity: 1;
  }
  67% {
    transform: scale(1.1) translateX(-5%);
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const KenBurnSlides = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;

  &.active{
    opacity:1;
  }
`

const BgImage = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  position: absolute;
  margin-bottom: 60px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: ${ken_burns} 10s ease-in-out infinite alternate;
  }

  @media (max-width: 768px) {
    margin-bottom:0;
    height:90%
  }
`;


const Content = styled.div`
//   background: white;
  width: 70%;
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: center;
`;
const Description = styled.p`
  padding: 0 10px;
  font-size: 35px;
  text-align:center;
  font-weight:bold;
  line-height: 40px;
  letter-spacing: 1.2px;
`;

const RegisterLink = styled(Link)`
  justify-content:center;
  display:flex;
  width:100%;
  margin:10px;
  text-decoration:none;

`

const SignUp = styled.button`
    width: 50%;
    height:45px;
    margin-bottom: 20px;
    border: 3px solid #e9ebeb; 
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    background-color: #68b8d9;
`

const Companies = styled.div`
    display:flex;
    flex-direction:row;
    img{
        width:50%;
        height:20%
        padding:0 20%
        margin-bottom: 20px;
    }

    @media (max-width: 768px) {
        
      }
`

const Bottom = styled.footer`
    width:100vw;
    height: 130px;
    background-color:black;
    color: white;
    bottom: -10px;
    position:absolute;
    @media (max-width: 768px) {
        height:40px;
        bottom: 2%;
      }
`

export default Starter;