import React, { useEffect } from "react";
// Components
import Game from "../components/Game";
// Style
import { Games, GameList } from "../style";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadPopularGames } from "../actions/gamesAction";

const PopularGamesPage = () => {
  const { popular } = useSelector((state) => state.games);
  // Fetch games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPopularGames());
  }, [dispatch]);
  return (
    <GameList>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
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

export default PopularGamesPage;
