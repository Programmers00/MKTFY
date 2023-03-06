// post create offer api
import { postCreateOffer } from "../../api/userMain/createOffer";
// request options for create offer
const options = {
  url: "/api/postCreateOffer",
  method: "post",
};

/** action: set create offer */
export const setCreateOffer = (params) => {
  console.log("##set Params", params);
  return (dispatch) => {
    dispatch({ type: "SET_CREATE_OFFER", params });
  };
};
/** action: reset create offer */
export const resetCreateOffer = () => {
  return (dispatch) => {
    dispatch({ type: "RESET_CREATE_OFFER" });
  };
};
/** action: create create offer */
export const createCreateOffer = (params) => {
  console.log("##params", params);
  return async () => {
    try {
      return await postCreateOffer({
        ...options,
        params,
      });
    } catch (error) {}
  };
};
