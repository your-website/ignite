import React, { useState } from "react";
// Components
import Game from "../components/Game";
import GameDetails from "../components/GameDetail";
// Style
import styled from "styled-components";
import { Games, GameList } from "../style";
// Redux
import { useSelector } from "react-redux";
import { fetchSearch } from "../actions/gamesAction";

// Animate
import { AnimatePresence } from "framer-motion";
import { fadeIn } from "../animations";
// Route
import { useLocation } from "react-router-dom";
// Redux and Routes
import { useDispatch } from "react-redux";

const SearchedGames = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  // get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[3];
  const { pathname } = location;

  // Get that data from reducer
  const { searched } = useSelector((state) => state.games);

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimatePresence>
        {pathId && <GameDetails pathId={pathId} />}
      </AnimatePresence>
      <H2 className="title">Searched Games</H2>
      <Form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </Form>
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

const H2 = styled.h2`
  &.title {
    padding: 5rem 0rem 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  padding: 0rem 0rem 3rem;

  input {
    width: 30%;
    font-size: 1.5rem;
    border: none;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    height: 45px;
  }

  button {
    height: 45px;
    font-size: 1.5rem;
    border: none;
    padding: 0rem 2rem;
    cursor: pointer;
    background: lightblue;
    color: #000;
  }

  @media (max-width: 1280px) {
    input {
      width: 90%;
    }
  }
`;

export default SearchedGames;
