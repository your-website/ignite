import React from "react";
// Style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animations";
// Router
import { Link } from "react-router-dom";
// utils
import { smallImage } from "../util";

const Game = ({ name, released, id, image, pathname }) => {
  const stringPathId = id.toString();

  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
    >
      <Link to={`${pathname}/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
