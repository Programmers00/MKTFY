// post create offer api
import { postCreateOffer } from "../../api/userMain/createOffer";

/** action: set create offer */
export const setCreateOffer = (params) => {
  return (dispatch) => {
    dispatch({ type: "SET_CREATE_OFFER", payload: params });
  };
};
/** action: reset create offer */
export const resetCreateOffer = () => {
  return (dispatch) => {
    dispatch({ type: "RESET_CREATE_OFFER" });
  };
};
/** action: create create offer */
// request options for create offer
const options = {
  url: "/api/Product",
  method: "post",
};
export const createCreateOffer = (data) => {
  return async () => {
    try {
      return await postCreateOffer({
        ...options,
        data,
      });
    } catch (error) {}
  };
};
