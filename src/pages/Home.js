import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn, sliderContainer, animSlideFromLeft } from "../animations";
import { GameList } from "../style";

const Home = () => {
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <motion.div variants={sliderContainer} initial="hidden" animate="show">
        <Title variants={animSlideFromLeft}>Hello!</Title>
        <Paragraph variants={fadeIn}>
          This is an application for searching games by various parameters.
        </Paragraph>
        <Paragraph variants={fadeIn}>
          Click on the category of interest in the navigation above and start
          your journey.
        </Paragraph>
      </motion.div>
    </GameList>
  );
};

const Paragraph = styled(motion.p)``;

const Title = styled(motion.h2)``;

export default Home;
