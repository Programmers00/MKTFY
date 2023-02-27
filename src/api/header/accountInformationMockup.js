/** account information mockup */
export const accountInformationMockup = (options) => {
  // success
  if (options)
    // success
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get Welcome Success",
        accountInformation: {
          firstName: "Samuel",
          lastName: "Noh",
          email: "nes0410@gmail.com",
          phone: "+1 (825)999-9999",
          streeAddress: "100 Main St",
          city: "Calgary",
          province: "Alberta",
          country: "Canada",
        },
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
