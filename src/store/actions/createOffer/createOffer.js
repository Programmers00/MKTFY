// create offer api
import { postCreateOfferData } from "../../../api/userMain/createOffer";

const requestCreateOfferOptions = {
  url: "/api/postCreateOffer",
  method: "post",
};

/** actions : create offer */
// create offer form data action
export const setCreateOffer = (params) => {
  return (dispatch) => {
    dispatch({ type: "SET_CREATE_OFFER", params });
  };
};

// reset create offer action
export const resetCreateOffer = () => {
  return (dispatch) => {
    dispatch({ type: "RESET_CREATE_OFFER" });
  };
};
// request create offer acction
export const requestCreateOffer = (params) => {
  return async (dispatch) => {
    // dispatch({ type: "REQUEST_CREATE_OFFER" });
    try {
      return await postCreateOfferData({
        ...requestCreateOfferOptions,
        params,
      });
    } catch (error) {
      console.log("##error", error);
    }
  };
};
