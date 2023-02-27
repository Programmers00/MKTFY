/** account information mockup */
export const getAccountInformationMockup = (options) => {
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
          streetAddress: "100 Main St",
          city: "Camrose",
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

export const putAccountInformationMockup = (options) => {
  // success
  if (options)
    // success
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Put Account Information Success",
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
