import defaultAxios from "axios";
/** processApi util based in axios: parameter => options(url, params, method, header) */
export const processApi = async (options, axiosInstance = defaultAxios) => {
  //state
  let state = {
    loading: true,
    data: null,
    error: null,
  };
  try {
    const data = await axiosInstance(options);
    state.data = data;
    state.loading = false;
  } catch (error) {
    state.error = error;
    state.loading = false;
  }
  return { ...state };
};
