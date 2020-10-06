import React from "react";
import styled from "styled-components";

const Movie = ({ imgSrc, title }) => {
  return (
    <StyledMovie>
      <h2>{title}</h2>
      <div className="line"></div>
      <div className="img-container">
        <img src={imgSrc} alt="" />
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
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export default Movie;
