import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fade, lineAnim, workPhoto } from "../util";

const Movie = ({ imgSrc, title }) => {
  return (
    <StyledMovie>
      <motion.h2 variants={fade}>{title}</motion.h2>
      <motion.div variants={lineAnim} className="line"></motion.div>
      <div className="img-container">
        <motion.img
          animate="show"
          initial="hidden"
          variants={workPhoto}
          whileHover={{
            scale: 1.2,
          }}
          src={imgSrc}
          alt=""
        />
      </div>
    </StyledMovie>
  );
};

const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 1rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  .img-container {
    overflow: hidden;
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    transition: all 0.75s ease-in-out;
  }
`;

export default Movie;
