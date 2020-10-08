import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { reveal } from "../util";

const FaqSection = () => {
  const faqControls = useAnimation();
  const [faq, faqView] = useInView({ threshold: 0.75 });
  useEffect(() => {
    if (faqView) {
      faqControls.start("show");
    }
  }, [faqControls, faqView]);
  return (
    <Faq ref={faq} animate={faqControls} initial="hidden" variants={reveal}>
      <h2>
        Any Questions?<span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            voluptatem dolorum obcaecati aperiam impedit, architecto
            reprehenderit aliquid tempore excepturi consequatur esse quis magni
            odit? Nesciunt animi veritatis distinctio rerum quo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            expedita facere quasi aliquam harum saepe fuga suscipit enim
            quisquam alias?
          </p>
        </div>
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
  );
};

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
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
