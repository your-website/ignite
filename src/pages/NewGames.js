import React, { useEffect } from "react";
// Components
import Game from "../components/Game";
// Style
import { Games, GameList } from "../style";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadNewGames } from "../actions/gamesAction";

const NewGamesPage = () => {
  const { newGames } = useSelector((state) => state.games);
  // Fetch games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNewGames());
  }, [dispatch]);

  return (
    <GameList>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
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

export default NewGamesPage;
