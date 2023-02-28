/** account information mockup */
export const getMyPurchasesMockup = (options) => {
  // success
  if (options)
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
