export const loginMockup = (options) => {
  // success
  if (
    options?.params?.email === "admin@domain.com" &&
    options.params?.password === "1234"
  )
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
