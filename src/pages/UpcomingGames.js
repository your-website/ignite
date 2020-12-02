import React, { useEffect } from "react";
// Components
import Game from "../components/Game";
// Style
import { Games, GameList } from "../style";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadUpcomingGames } from "../actions/gamesAction";

const UpcomingGamesPage = () => {
  const { upcoming } = useSelector((state) => state.games);
  // Fetch games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUpcomingGames());
  }, [dispatch]);
  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
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
