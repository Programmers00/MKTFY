// poset create offer api
import { postCreateOfferData } from "../../../api/userMain/createOffer";
// request options for request offer
const requestCreateOfferOptions = {
  url: "/api/postCreateOffer",
  method: "post",
};

/** set create offer action */
export const setCreateOffer = (params) => {
  return (dispatch) => {
    dispatch({ type: "SET_CREATE_OFFER", params });
  };
};

/** set request create offer action */
export const requestCreateOffer = (params) => {
  return async () => {
    try {
      return await postCreateOfferData({
        ...requestCreateOfferOptions,
        params,
      });
    } catch (error) {}
  };
};
