import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import Cards from "../components/Cards";
import styled from "styled-components";
import homeImg2 from "../img/home2.png";
import { reveal } from "../util";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const serviceControls = useAnimation();
  const [description, descView] = useInView({ threshold: 0.75 });
  //Use Effect
  useEffect(() => {
    if (descView) {
      serviceControls.start("show");
    }
  }, [serviceControls, descView]);
  return (
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
  );
};

const Services = styled(motion.section)`
  background: #1b1b1b;
  min-height: 90vh;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  h2 {
    margin-bottom: 4rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
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

export default ServicesSection;
