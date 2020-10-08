import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { reveal } from "../util";
import Question from "./Question";

const FaqSection = () => {
  //State
  const [toggleFaq, setToggleFaq] = useState([
    {
      title: "How Do I Start?",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum voluptatem dolorum obcaecati aperiam impedit, architecto reprehenderit aliquid tempore excepturi consequatur esse quis magni odit? Nesciunt animi veritatis distinctio rerum quo.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita facere quasi aliquam harum saepe fuga suscipit enim quisquam alias?`,
      active: false,
    },
    {
      title: "What Products do you offer?",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum voluptatem dolorum obcaecati aperiam impedit, architecto reprehenderit aliquid tempore excepturi consequatur esse quis magni odit? Nesciunt animi veritatis distinctio rerum quo.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita facere quasi aliquam harum saepe fuga suscipit enim quisquam alias?`,
      active: false,
    },
    {
      title: "Diferrent Payment Methods",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum voluptatem dolorum obcaecati aperiam impedit, architecto reprehenderit aliquid tempore excepturi consequatur esse quis magni odit? Nesciunt animi veritatis distinctio rerum quo.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita facere quasi aliquam harum saepe fuga suscipit enim quisquam alias?`,
      active: false,
    },
    {
      title: "Daily Schedule",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum voluptatem dolorum obcaecati aperiam impedit, architecto reprehenderit aliquid tempore excepturi consequatur esse quis magni odit? Nesciunt animi veritatis distinctio rerum quo.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum expedita facere quasi aliquam harum saepe fuga suscipit enim quisquam alias?`,
      active: false,
    },
  ]);
  //Scroll Animation
  const faqControls = useAnimation();
  const [faq, faqView] = useInView({ threshold: 0.75 });
  useEffect(() => {
    if (faqView) {
      faqControls.start("show");
    }
  }, [faqControls, faqView]);
  return (
    <Faq
      transition={{ duration: 0.75 }}
      ref={faq}
      animate={faqControls}
      initial="hidden"
      variants={reveal}
    >
      <h2>
        Any Questions?<span>FAQ</span>
      </h2>
      {toggleFaq.map((faq) => (
        <Question
          toggleFaq={toggleFaq}
          key={faq.title}
          faq={faq}
          setToggleFaq={setToggleFaq}
        />
      ))}
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
    cursor: pointer;
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
