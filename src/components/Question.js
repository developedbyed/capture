import React from "react";
import { motion } from "framer-motion";

const Question = ({ faq, setToggleFaq, toggleFaq }) => {
  const toggleActive = () => {
    console.log(toggleFaq);
    const newFaqs = toggleFaq.map((state) => {
      if (state.title === faq.title) {
        return { ...state, active: !state.active };
      } else {
        return { ...state };
      }
    });
    setToggleFaq(newFaqs);
  };
  return (
    <motion.div layout onClick={toggleActive} className="question">
      <h4>{faq.title}</h4>
      <div className="answer">
        {faq.active && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p>{faq.description}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              expedita facere quasi aliquam harum saepe fuga suscipit enim
              quisquam alias?
            </p>
          </motion.div>
        )}
      </div>
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Question;
