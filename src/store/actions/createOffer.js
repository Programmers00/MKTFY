// post create offer api
import { postCreateOffer } from "../../api/userMain/createOffer";
// request options for create offer
const options = {
  url: "/api/postCreateOffer",
  method: "post",
};

/** set create offer action */
export const setCreateOffer = (params) => {
  return (dispatch) => {
    dispatch({ type: "SET_CREATE_OFFER", params });
  };
};

/** create offer action */
export const createCreateOffer = (params) => {
  return async () => {
    try {
      return await postCreateOffer({
        ...options,
        params,
      });
    } catch (error) {}
  };
};
