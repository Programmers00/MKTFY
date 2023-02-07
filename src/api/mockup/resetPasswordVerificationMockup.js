export const resetPasswordVerificationMockup = (options) => {
  // success
  if (options?.params?.verificationCode === "123456")
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
