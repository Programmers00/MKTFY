/** account information mockup */

export const postAccountInformationMockup = (options) => {
  // success
  if (options)
    // success
    return {
      status: 200,
      statusText: "OK",
      data: {
        address: "100 Main St",
        city: "Calgary",
        email: "admin@gmail.com",
        firstName: "Samuel",
        lastName: "Noh",
        phone: "+1 (825) 994-4199",
        id: "auth0|123a456e789bfd01a234efba",
      },
    };
  // fail
  return {
    status: 500,
    statusText: "Internal Server Error",
    data: {
      message: "Unable to contact the database",
    },
  };
};

export const getAccountInformationMockup = (options) => {
  // success
  if (options)
    // success
    return {
      statusText: "OK",
      status: 200,
      data: {
        address: "100 Main St",
        city: "Calgary",
        email: "admin@gmail.com",
        firstName: "Samuel",
        lastName: "Noh",
        phone: "+1 (825) 994-4199",
        id: "auth0|123a456e789bfd01a234efba",
      },
    };
  // fail
  return {
    status: 400,
    statusText: "Bad Request",
    data: {
      message: "Unable to retrieve the requested user",
    },
  };
};

export const putAccountInformationMockup = (options) => {
  // success
  if (options)
    // success
    return {
      statusText: "OK",
      status: 200,
      data: {
        address: "100 Main St",
        city: "Calgary",
        email: "admin@gmail.com",
        firstName: "Samuel",
        lastName: "Noh",
        phone: "+1 (825) 994-4199",
        id: "auth0|123a456e789bfd01a234efba",
      },
    };
  // fail
  return {
    status: 400,
    statusText: "Bad Request",
    data: {
      title: "One or more validation errors occurred.",
      traceId: "00-af630d862617c3809b07442d213c9cd9-6d49bd0dcb0361ec-00",
      type: "https://tools.ietf.org/html/rfc7231#section-6.5.1",
      status: 400,
      error: {
        Address: ["The Address field is required."],
        Id: ["The Id field is required."],
      },
    },
  };
};
