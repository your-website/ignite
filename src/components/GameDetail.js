import React from "react";
// Style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// utils
import { smallImage } from "../util";
// Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
// Star images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  // Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("card-shadow")) {
      document.body.style.overflow = "auto";
      history.goBack();
    }
  };

  const exit = () => {
    document.body.style.overflow = "auto";
    history.goBack();
  };

  // Get Platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "Playstation 4":
      case "PlayStation 5":
        return playstation;

      case "Xbox One":
      case "Xbox Series S/X":
        return xbox;

      case "Nintendo Switch":
        return nintendo;

      case "iOS":
      case "macOS":
        return apple;

      case "PC":
        return steam;

      default:
        return gamepad;
    }
  };
  // Get stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull} />);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };

  // Data
  const { screen, game, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <CardShadow onClick={exitDetailHandler} className="card-shadow">
          <Detail layoutId={pathId} className="detail">
            <button onClick={exit}>Close</button>
            <Stats className="stats">
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                {getStars()}
              </div>
              <Info className="info">
                <h3>Platforms</h3>
                <Platforms className="platforms">
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media className="media">
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
              />
            </Media>
            <Description className="description">
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  key={screen.id}
                  src={smallImage(screen.image, 1280)}
                  alt={"screenshot " + game.name}
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: #fff;
  position: absolute;
  left: 10%;
  color: #000;

  button {
    display: none;
    padding: 0.6rem;
    align-self: flex-start;
    background: transparent;
    border: 2px solid #000;
    cursor: pointer;
    transition: all 0.2s ease-out;
    font-weight: bold;
    color: #000;
    margin-top: 1.5rem;

    &:hover {
      background: #ff7676;
      color: #fff;
    }
  }

  img {
    width: 100%;
  }

  @media (max-width: 1280px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 0.6rem;

    button {
      display: block;
    }
  }

  @media (max-width: 500px) {
    width: 90%;
    left: 5%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    h3 {
      text-align: left;
    }
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  img {
    margin-left: 3rem;
  }

  @media (max-width: 1024px) {
    img {
      margin-left: 0;
      margin-top: 1rem;
      margin-right: 1rem;
    }
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
