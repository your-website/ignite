import axios from "axios";
import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchGameURL,
} from "../api";

// Use thunk
export const loadNewGames = () => async (dispatch) => {
  // Fetch Axios
  const newGamesData = await axios.get(newGamesUrl());
  dispatch({
    type: "FETCH_NEW_GAMES",
    payload: {
      newGames: newGamesData.data.results,
    },
  });
};

export const loadUpcomingGames = () => async (dispatch) => {
  // Fetch Axios
  const upcomingData = await axios.get(upcomingGamesUrl());
  dispatch({
    type: "FETCH_UPCOMING_GAMES",
    payload: {
      upcoming: upcomingData.data.results,
    },
  });
};

export const loadPopularGames = () => async (dispatch) => {
  // Fetch Axios
  const popularData = await axios.get(popularGamesUrl());
  dispatch({
    type: "FETCH_POPULAR_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
