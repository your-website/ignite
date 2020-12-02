import React from "react";
// Components
import Game from "../components/Game";
import GameDetails from "../components/GameDetail";
// Style
import { Games, GameList } from "../style";
// Redux
import { useSelector } from "react-redux";
// Animate
import { AnimatePresence } from "framer-motion";
import { fadeIn } from "../animations";
// Route
import { useLocation } from "react-router-dom";

const SearchedGames = () => {
  // get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[3];
  const { pathname } = location;

  // Get that data from reducer
  const { searched } = useSelector((state) => state.games);

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimatePresence>
        {pathId && <GameDetails pathId={pathId} />}
      </AnimatePresence>
      <h2>Searched Games</h2>
      <Games>
        {searched.map((game) => (
          <Game
            pathname={pathname}
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

export default SearchedGames;
