const initState = {
  game: { platforms: [] },
  screen: { results: [] },
  isLoading: true,
  popupIsOpen: false,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    case "POPUP_IS_OPEN":
      return {
        ...state,
        popupIsOpen: action.payload.popupIsOpen,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
