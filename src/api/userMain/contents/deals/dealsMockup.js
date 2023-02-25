/** deals mockup */
export const dealsMockup = (options) => {
  // success
  // if no params, deals
  if (Object.keys(options.params).length === 0)
    return {
      loading: false,
      data: {
        id: "deals",
        title: "Deals",
        items: [
          {
            id: "cat",
            title: "Pearl The cat: Donut edtion",
            img: "cat",
            price: "500",
          },
          {
            id: "cat2",
            title: "Pearl The cat: Monster edtion",
            img: "cat2",
            price: "500",
          },
          {
            id: "cat3",
            title: "Pearl The cat: Christmas edtion",
            img: "cat3",
            price: "500",
          },
          {
            id: "cat4",
            title: "Pearl The cat: Halloween edtion",
            img: "cat4",
            price: "500",
          },
          {
            id: "cat5",
            title:
              "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
            img: "cat",
            price: "500",
          },
          {
            id: "cat6",
            title: "Pearl The cat: Donut edtion",
            img: "cat",
            price: "500",
          },
          {
            id: "cat7",
            title: "Pearl The cat: Monster edtion",
            img: "cat2",
            price: "500",
          },
          {
            id: "cat8",
            title: "Pearl The cat: Christmas edtion",
            img: "cat3",
            price: "500",
          },
          {
            id: "cat9",
            title: "Pearl The cat: Halloween edtion",
            img: "cat4",
            price: "500",
          },
          {
            id: "cat10",
            title:
              "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
            img: "cat",
            price: "500",
          },
        ],
      },
      error: null,
    };
  // carsVehicles
  else if (options.params.id === "carsVehicles") {
    return {
      loading: false,
      data: {
        id: "carsVehicles",
        title: "CarsVehicles",
        items: [
          {
            id: "cat",
            title: "Pearl The cat: Donut edtion",
            img: "cat2",
            price: "500",
          },
          {
            id: "cat2",
            title: "Pearl The cat: Monster edtion",
            img: "cat2",
            price: "500",
          },
          {
            id: "cat3",
            title: "Pearl The cat: Christmas edtion",
            img: "cat2",
            price: "500",
          },
          {
            id: "cat4",
            title: "Pearl The cat: Halloween edtion",
            img: "cat2",
            price: "500",
          },
          {
            id: "cat5",
            title:
              "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
            img: "cat2",
            price: "500",
          },
        ],
      },
      error: null,
    };
  }
  // furniture
  else if (options.params.id === "furniture")
    return {
      loading: false,
      data: {
        id: "furniture",
        title: "Furniture",
        items: [
          {
            id: "cat",
            title: "Pearl The cat: Donut edtion",
            img: "cat3",
            price: "500",
          },
          {
            id: "cat2",
            title: "Pearl The cat: Monster edtion",
            img: "cat3",
            price: "500",
          },
          {
            id: "cat3",
            title: "Pearl The cat: Christmas edtion",
            img: "cat3",
            price: "500",
          },
          {
            id: "cat4",
            title: "Pearl The cat: Halloween edtion",
            img: "cat3",
            price: "500",
          },
          {
            id: "cat5",
            title:
              "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
            img: "cat3",
            price: "500",
          },
        ],
      },
      error: null,
    };
  // electronics
  else if (options.params.id === "electronics")
    return {
      loading: false,
      data: {
        id: "electronics",
        title: "Electronics",
        items: [
          {
            id: "cat",
            title: "Pearl The cat: Donut edtion",
            img: "cat4",
            price: "500",
          },
          {
            id: "cat2",
            title: "Pearl The cat: Monster edtion",
            img: "cat4",
            price: "500",
          },
          {
            id: "cat3",
            title: "Pearl The cat: Christmas edtion",
            img: "cat4",
            price: "500",
          },
          {
            id: "cat4",
            title: "Pearl The cat: Halloween edtion",
            img: "cat4",
            price: "500",
          },
          {
            id: "cat5",
            title:
              "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
            img: "cat4",
            price: "500",
          },
        ],
      },
      error: null,
    };
  // realEstate
  else if (options.params.id === "realEstate")
    return {
      loading: false,
      data: {
        id: "realEstate",
        title: "RealEstate",
        items: [
          {
            id: "cat",
            title: "Pearl The cat: Donut edtion",
            img: "cat",
            price: "500",
          },
          {
            id: "cat2",
            title: "Pearl The cat: Monster edtion",
            img: "cat",
            price: "500",
          },
          {
            id: "cat3",
            title: "Pearl The cat: Christmas edtion",
            img: "cat",
            price: "500",
          },
          {
            id: "cat4",
            title: "Pearl The cat: Halloween edtion",
            img: "cat",
            price: "500",
          },
          {
            id: "cat5",
            title:
              "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
            img: "cat",
            price: "500",
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
