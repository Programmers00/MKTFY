import { request } from "../utils/request";
/** processApi util based in axios: parameter => options(url, params, method, header) */
/**options example
 const requestRealEstateOptions = {
    url: "https://jsonplaceholder.typicode.com/posts", // it is possible to send whole url
    url: "/contents", // baseUrl("http://localhost:3000/") + url("/contents") => "http://localhost:3000/contents"
    meta: { apiVersion: '1.0.0'},
    params: {},
    method: "get",
    headers: { Accept: "application/json" },
  };
 */
export const processApi = async (options) => {
  //state
  let state = {
    loading: true,
    data: null,
    error: null,
  };
  try {
    const data = await request(options);
    state.data = data;
    state.loading = false;
  } catch (error) {
    state.error = error;
    state.loading = false;
  }
  return { ...state };
};
