/** get listings mockup */
export const getListingsMockup = (options) => {
  // success
  if (options.params.category === "")
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get Deals Success",
        id: "deals",
        title: "Deals",
        items: [
          {
            id: "cat1",
            productName: "Pearl The cat: Donut edtion",
            image: "cat",
            price: "100",
          },
          {
            id: "cat2",
            productName: "Pearl The cat: Monster edtion",
            image: "cat2",
            price: "200",
          },
          {
            id: "cat3",
            productName: "Pearl The cat: Christmas edtion",
            image: "cat3",
            price: "300",
          },
          {
            id: "cat4",
            productName: "Pearl The cat: Halloween edtion",
            image: "cat4",
            price: "400",
          },
          {
            id: "cat5",
            productName:
              "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
            image: "cat",
            price: "500",
          },
          {
            id: "cat6",
            productName: "Pearl The cat: Donut edtion",
            image: "cat",
            price: "600",
          },
          {
            id: "cat7",
            productName: "Pearl The cat: Monster edtion",
            image: "cat2",
            price: "700",
          },
          {
            id: "cat8",
            productName: "Pearl The cat: Christmas edtion",
            image: "cat3",
            price: "800",
          },
          {
            id: "cat9",
            productName: "Pearl The cat: Halloween edtion",
            image: "cat4",
            price: "900",
          },
          {
            id: "cat10",
            productName:
              "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
            image: "cat",
            price: "1000",
          },
        ],
      },
      error: null,
    };
  // carsVehicles
  else if (options.params.category === "carsVehicles") {
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get CarsVehicles Success",
        id: "carsVehicles",
        title: "CarsVehicles",
        items: [
          {
            id: "cat",
            productName: "Pearl The cat: Donut edtion",
            image: "cat2",
            price: "500",
          },
          {
            id: "cat2",
            productName: "Pearl The cat: Monster edtion",
            image: "cat2",
            price: "500",
          },
          {
            id: "cat3",
            productName: "Pearl The cat: Christmas edtion",
            image: "cat2",
            price: "500",
          },
          {
            id: "cat4",
            productName: "Pearl The cat: Halloween edtion",
            image: "cat2",
            price: "500",
          },
          {
            id: "cat5",
            productName:
              "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
            image: "cat2",
            price: "500",
          },
        ],
      },
      error: null,
    };
  }
  // furniture
  else if (options.params.category === "furniture")
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get Furniture Success",
        id: "furniture",
        title: "Furniture",
        items: [
          {
            id: "cat",
            productName: "Pearl The cat: Donut edtion",
            image: "cat3",
            price: "500",
          },
          {
            id: "cat2",
            productName: "Pearl The cat: Monster edtion",
            image: "cat3",
            price: "500",
          },
          {
            id: "cat3",
            productName: "Pearl The cat: Christmas edtion",
            image: "cat3",
            price: "500",
          },
          {
            id: "cat4",
            productName: "Pearl The cat: Halloween edtion",
            image: "cat3",
            price: "500",
          },
          {
            id: "cat5",
            productName:
              "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
            image: "cat3",
            price: "500",
          },
        ],
      },
      error: null,
    };
  // electronics
  else if (options.params.category === "electronics")
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get Electronics Success",
        id: "electronics",
        title: "Electronics",
        items: [
          {
            id: "cat",
            productName: "Pearl The cat: Donut edtion",
            image: "cat4",
            price: "500",
          },
          {
            id: "cat2",
            productName: "Pearl The cat: Monster edtion",
            image: "cat4",
            price: "500",
          },
          {
            id: "cat3",
            productName: "Pearl The cat: Christmas edtion",
            image: "cat4",
            price: "500",
          },
          {
            id: "cat4",
            productName: "Pearl The cat: Halloween edtion",
            image: "cat4",
            price: "500",
          },
          {
            id: "cat5",
            productName:
              "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
            image: "cat4",
            price: "500",
          },
        ],
      },
      error: null,
    };
  // realEstate
  else if (options.params.category === "realEstate")
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get RealEstate Success",
        id: "realEstate",
        title: "RealEstate",
        items: [
          {
            id: "cat",
            productName: "Pearl The cat: Donut edtion",
            image: "cat",
            price: "500",
          },
          {
            id: "cat2",
            productName: "Pearl The cat: Monster edtion",
            image: "cat",
            price: "500",
          },
          {
            id: "cat3",
            productName: "Pearl The cat: Christmas edtion",
            image: "cat",
            price: "500",
          },
          {
            id: "cat4",
            productName: "Pearl The cat: Halloween edtion",
            image: "cat",
            price: "500",
          },
          {
            id: "cat5",
            productName:
              "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
            image: "cat",
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
