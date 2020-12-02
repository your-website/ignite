import React, { useEffect } from "react";
// Components
import Game from "../components/Game";
import GameDetails from "../components/GameDetail";

// Style
import { Games, GameList } from "../style";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadUpcomingGames } from "../actions/gamesAction";
// Animate
import { AnimatePresence } from "framer-motion";
import { fadeIn } from "../animations";
// Route
import { useLocation } from "react-router-dom";

const UpcomingGamesPage = () => {
  const { upcoming } = useSelector((state) => state.games);
  const location = useLocation();
  const pathId = location.pathname.split("/")[3];
  const { pathname } = location;

  // Fetch games
  const dispatch = useDispatch();

  useEffect(() => {
    if (upcoming.length) {
      return;
    } else {
      dispatch(loadUpcomingGames());
    }
  }, [dispatch, upcoming.length]);

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimatePresence>
        {pathId && <GameDetails pathId={pathId} />}
      </AnimatePresence>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
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

export default UpcomingGamesPage;
