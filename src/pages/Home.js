import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animations";

const Home = () => {
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <h1>Hello world</h1>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0rem;
  }

  @media (max-width: 768px) {
    padding: 0rem 0.6rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: minmax(200px, 500px);
    justify-content: center;
  }
`;

export default Home;
