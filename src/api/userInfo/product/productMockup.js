/** product mockup */
/** get product */
export const getProductMockup = (options) => {
  // success
  if (options.params.id === "cat3")
    // success
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get Product Success",
        item: {
          id: "cat3",
          productName: "Pearl The Cat: Toy edition",
          description:
            "The world's most beautiful cat. Pearl The Cat is a pretty cat who is grey with black stripes on top and spots on the belly. She likes catching flies and eating beef jerky as well as yogurt. This edition of Pearl The Cat includes toys for maximum Pearl enjoyment. (Batteries not included)",
          category: "CarsVehicles",
          condition: "used",
          price: "340",
          address: "100 Main st",
          city: "Calgary",
          images: ["cat"],
          active: true,
        },
      },
      error: null,
    };
  if (options.params.id === "cat4")
    // success
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get Product Success",
        item: {
          id: "cat4",
          productName: "Pearl The cat: Halloween edtion",
          description:
            "The world's most beautiful cat. Pearl The Cat is a pretty cat who is grey with black stripes on top and spots on the belly. She likes catching flies and eating beef jerky as well as yogurt. This edition of Pearl The Cat includes toys for maximum Pearl enjoyment. (Batteries not included)",
          category: "CarsVehicles",
          condition: "used",
          price: "400",
          address: "100 Main st",
          city: "Calgary",
          images: ["cat2", "cat3", "cat4", "cat5"],
          active: true,
        },
      },
      error: null,
    };
  else if (options.params.id === "cat5")
    // success
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get Product Success",
        item: {
          id: "cat5",
          productName:
            "Pearl The cat: Breakfast edtion Pearl The cat: Breakfast edtion",
          description:
            "The world's most beautiful cat. Pearl The Cat is a pretty cat who is grey with black stripes on top and spots on the belly. She likes catching flies and eating beef jerky as well as yogurt. This edition of Pearl The Cat includes toys for maximum Pearl enjoyment. (Batteries not included)",
          category: "CarsVehicles",
          condition: "used",
          price: "500",
          address: "100 Main st",
          city: "Calgary",
          images: ["cat3"],
          active: true,
        },
      },
      error: null,
    };
  else if (options.params.id === "cat6")
    // success
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get Product Success",
        item: {
          id: "cat6",
          productName: "Pearl The cat: Donut edtion",
          description:
            "The world's most beautiful cat. Pearl The Cat is a pretty cat who is grey with black stripes on top and spots on the belly. She likes catching flies and eating beef jerky as well as yogurt. This edition of Pearl The Cat includes toys for maximum Pearl enjoyment. (Batteries not included)",
          category: "CarsVehicles",
          condition: "used",
          price: "600",
          address: "100 Main st",
          city: "Calgary",
          images: ["cat4"],
          active: true,
        },
      },
      error: null,
    };
  // success
  else if (options.params.id)
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get Product Success",
        item: {
          productName: "cat3",
          description: "cat3",
          category: "CarsVehicles",
          condition: "used",
          price: "300",
          address: "100 Main st",
          city: "Calgary",
          imagesId: [],
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

/** put product */
export const putProductMockup = (options) => {
  // success
  if (options)
    // success
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: `Put Product ${options.params.id} Success`,
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

/** delete product */
export const deleteProductMockup = (options) => {
  // success
  if (options)
    // success
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: `delete Product ${options.params.id} Success`,
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
