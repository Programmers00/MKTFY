export const forgotPasswordMockup = (options) => {
  // success
  if (options?.params?.email === "admin@domain.com")
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
