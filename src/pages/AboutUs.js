import React from "react";
import styled from "styled-components";
import Wave from "../components/Wave";
import Cards from "../components/Cards";
import homeImg1 from "../img/home1.png";
import homeImg2 from "../img/home2.png";

const AboutUs = () => {
  return (
    <>
      <About>
        <Description>
          <h2>
            We work to make your <span>dreams</span> come true.
          </h2>
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
  padding: 1rem 10rem;
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

export default AboutUs;
