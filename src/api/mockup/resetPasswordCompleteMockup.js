export const resetPasswordCompleteMockup = (options) => {
  // success
  if (options?.params?.password === "A12341234")
    return {
      loading: false,
      data: { status: 200 },
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
