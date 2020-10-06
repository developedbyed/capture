import React from "react";
import styled from "styled-components";
import Movie from "../components/Movie";

//Import Images
import athlete from "../img/athlete-small.png";
import goodtimes from "../img/goodtimes-small.png";
import theracer from "../img/theracer-small.png";
//Motion
import { motion } from "framer-motion";
import { containerWork } from "../util";

const OurWork = () => {
  return (
    <Work variants={containerWork} initial="hidden" animate="show" exit="exit">
      <Movie imgSrc={athlete} title={"The Athlete"} />
      <Movie imgSrc={goodtimes} title={"Good Times Never End"} />
      <Movie imgSrc={theracer} title={"The Racer"} />
    </Work>
  );
};

const Work = styled(motion.section)`
  min-height: 100vh;
  padding: 5rem 10rem;
`;

export default OurWork;
