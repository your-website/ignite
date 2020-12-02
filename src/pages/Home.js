import React from "react";
import GameDetails from "../components/GameDetail";
import { useLocation } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
// Components
import Game from "../components/Game";
// Style and animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../anamations";

const Home = () => {
  // get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  // Get that data from reducer
  const { searched } = useSelector((state) => state.games);

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetails pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}
      </AnimateSharedLayout>
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
