import React from "react";
import homeImg1 from "../img/home1.png";
import { motion } from "framer-motion";
import { container, titleAnim, fade, photoAnim } from "../util";
import styled from "styled-components";
import Wave from "../components/Wave";

const AboutSection = () => {
  return (
    <About variants={container} initial="hidden" animate="show" exit="exit">
      <Description>
        <div>
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}> true.</motion.h2>
          </Hide>
        </div>

        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills to help you achieve it.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          initial="hidden"
          animate="show"
          variants={photoAnim}
          src={homeImg1}
          alt="camera holding"
        />
      </Image>
      <Wave />
    </About>
  );
};

const About = styled(motion.div)`
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
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
