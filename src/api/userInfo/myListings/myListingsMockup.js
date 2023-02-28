/** account information mockup */
export const getMyListingsMockup = (options) => {
  // success
  if (options.params.status === "active") {
    // success
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get Welcome Success",
        items: [
          {
            id: "cat3",
            productName: "Pearl The cat: Christmas edtion",
            image: "cat3",
            price: "500",
            date: "September 07 2020",
            active: true,
          },
          {
            id: "cat4",
            productName: "Pearl The cat: Halloween edtion",
            image: "cat4",
            price: "500",
            date: "September 07 2020",
            active: true,
          },
          {
            id: "cat5",
            productName:
              "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
            image: "cat",
            price: "500",
            date: "September 07 2020",
            active: true,
          },
          {
            id: "cat6",
            productName: "Pearl The cat: Donut edtion",
            image: "cat",
            price: "500",
            date: "September 07 2020",
            active: true,
          },
        ],
      },
      error: null,
    };
  } else if (options.params.status === "sold") {
    // success
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get Welcome Success",
        items: [
          {
            id: "cat1",
            productName: "Pearl The cat: Donut edtion",
            image: "cat",
            price: "500",
            active: false,
          },
          {
            id: "cat2",
            productName: "Pearl The cat: Monster edtion",
            image: "cat2",
            price: "500",
            active: false,
          },
          {
            id: "cat3",
            productName: "Pearl The cat: Christmas edtion",
            image: "cat3",
            price: "500",
            active: false,
          },
        ],
      },
      error: null,
    };
  }
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
