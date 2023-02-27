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
            title: "Pearl The cat: Christmas edtion",
            img: "cat3",
            price: "500",
            date: "September 07 2020",
            active: true,
          },
          {
            id: "cat4",
            title: "Pearl The cat: Halloween edtion",
            img: "cat4",
            price: "500",
            date: "September 07 2020",
            active: true,
          },
          {
            id: "cat5",
            title:
              "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
            img: "cat",
            price: "500",
            date: "September 07 2020",
            active: true,
          },
          {
            id: "cat6",
            title: "Pearl The cat: Donut edtion",
            img: "cat",
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
