import React, { useEffect } from "react";
import styled from "styled-components";
import Wave from "../components/Wave";
import Cards from "../components/Cards";
import homeImg1 from "../img/home1.png";
import homeImg2 from "../img/home2.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { container, titleAnim, fade, photoAnim, reveal } from "../util";
const AboutUs = () => {
  const serviceControls = useAnimation();
  const faqControls = useAnimation();
  const [description, descView] = useInView({ threshold: 0.75 });
  const [faq, faqView] = useInView({ threshold: 0.75 });
  //Use Effect
  useEffect(() => {
    if (descView) {
      serviceControls.start("show");
    }
    if (faqView) {
      faqControls.start("show");
    }
  }, [serviceControls, faqControls, descView, faqView]);
  return (
    <>
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
            Contact us for any photography or videography ideas that you have.
            We have professionals with amazing skills to help you achieve it.
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
      <Services
        ref={description}
        animate={serviceControls}
        initial="hidden"
        variants={reveal}
      >
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
      <Faq ref={faq} animate={faqControls} initial="hidden" variants={reveal}>
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

const Services = styled(About)`
  h2 {
    margin-bottom: 4rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Faq = styled(motion.section)`
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
