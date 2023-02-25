// get detail data api
import { getDetailData } from "../../api/userMain/detail";
/** actions : get detail data, depending on params */
/** get detail action*/
export const getDetail = (requestOptions) => {
  return async () => {
    try {
      return await getDetailData(requestOptions);
    } catch (error) {
      console.log("Error");
    }
  };
};
