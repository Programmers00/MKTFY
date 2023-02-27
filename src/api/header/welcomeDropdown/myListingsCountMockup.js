/** my lisings count mockup */
export const myListingsCountMockup = (options) => {
  // success
  if (options)
    // success
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get My Listings Count Success",
        myListingsCount: 3,
      },
      error: null,
    };
  // fail
  return {
    loading: false,
    data: null,
    error: {
      code: "ERR_NETWORK",
      message: "Network Error",
      name: "AxiosError",
      status: 404,
    },
  };
};
