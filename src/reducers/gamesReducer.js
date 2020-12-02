const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_NEW_GAMES":
      return {
        ...state,
        newGames: action.payload.newGames,
      };

    case "FETCH_POPULAR_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
      };

    case "FETCH_UPCOMING_GAMES":
      return {
        ...state,
        upcoming: action.payload.upcoming,
      };

    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };

    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };

    default:
      return { ...state };
  }
};

export default gamesReducer;
