/** create offer mockup */
export const createOfferMockup = (options) => {
  // success
  if (options)
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Success",
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
