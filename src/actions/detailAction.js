import axios from "axios";
import { gameDetailsUrl, gameScreenUrl } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailsUrl(id));
  const screenShotData = await axios.get(gameScreenUrl(id));
  document.body.style.overflow = "hidden";

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};

export const setPopupIsOpen = (payload) => (dispatch) => {
  dispatch({
    type: "POPUP_IS_OPEN",
    payload: {
      popupIsOpen: payload,
    },
  });
};
