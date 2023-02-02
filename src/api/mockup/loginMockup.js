export const loginMockup = (options) => {
  if (!options)
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
  return { loading: false, data: { status: 200 }, error: null };
};
