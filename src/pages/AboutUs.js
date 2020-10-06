import React from "react";
import styled from "styled-components";
import Wave from "../components/Wave";
import Cards from "../components/Cards";
import homeImg1 from "../img/home1.png";
import homeImg2 from "../img/home2.png";
import { motion } from "framer-motion";

const AboutUs = () => {
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  };
  const textAnim = {
    hidden: { y: 100 },
    show: {
      y: 0,
      transition: { type: "tween", ease: "circOut", duration: 0.75 },
    },
  };
  return (
    <>
      <About>
        <Description>
          <motion.div variants={textContainer} initial="hidden" animate="show">
            <Hide>
              <motion.h2 variants={textAnim}>We work to make</motion.h2>
            </Hide>
            <Hide>
              <motion.h2 variants={textAnim}>
                your <span>dreams</span> come
              </motion.h2>
            </Hide>
            <Hide>
              <motion.h2 variants={textAnim}> true.</motion.h2>
            </Hide>
          </motion.div>
          <p>
            Contact us for any photography or videography ideas that you have.
            We have professionals with amazing skills to help you achieve it.
          </p>
          <button>Contact Us</button>
        </Description>
        <Image>
          <img src={homeImg1} alt="camera holding" />
        </Image>
        <Wave />
      </About>
      <Services>
        <Description>
          <h2>
            High <span>quality</span> services.
          </h2>
          <Cards />
        </Description>
        <Image>
          <img src={homeImg2} alt="camera" />
        </Image>
      </Services>
      <Faq>
        <h2>
          Any Questions?<span>FAQ</span>
        </h2>
        <div className="question">
          <h4>How do I start?</h4>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>What Products do you offer?</h4>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Diferrent Payment Methods</h4>
          <div className="faq-line"></div>
        </div>
        <div className="question">
          <h4>Daily Schedule</h4>
          <div className="faq-line"></div>
        </div>
      </Faq>
    </>
  );
};

const About = styled.section`
  background: #1b1b1b;
  min-height: 90vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
`;
const Description = styled.div`
  color: white;
  z-index: 2;
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  p {
    padding: 3rem 0rem;
    color: #cccccc;
  }
  span {
    font-weight: bold;
    color: #23d997;
  }
  button {
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
      background: #23d997;
      color: white;
    }
  }
`;
const Image = styled.div`
  z-index: 2;
  flex: 1;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Services = styled(About)`
  h2 {
    margin-bottom: 4rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Faq = styled.section`
  min-height: 100vh;
  padding: 5rem 10rem;
  background: #1b1b1b;
  color: white;
  span {
    display: block;
    color: #23d997;
    font-weight: bold;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 2rem;
  }
  .question {
    padding: 3rem 0rem;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 1rem 0rem;
    width: 100%;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default AboutUs;
