import React from "react";
import styled from "styled-components";
import Movie from "../components/Movie";

//Import Images
import athlete from "../img/athlete-small.png";
import goodtimes from "../img/goodtimes-small.png";
import theracer from "../img/theracer-small.png";

const OurWork = () => {
  return (
    <Work>
      <Movie imgSrc={athlete} title={"The Athlete"} />
      <Movie imgSrc={goodtimes} title={"Good Times Never End"} />
      <Movie imgSrc={theracer} title={"The Racer"} />
    </Work>
  );
};

const Work = styled.section`
  min-height: 100vh;
  padding: 5rem 10rem;
`;

export default OurWork;
