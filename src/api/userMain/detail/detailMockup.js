/** detail mockup */
export const detailMockup = (options) => {
  // success
  if (options.params.id === "cat")
    return {
      loading: false,
      data: {
        id: "cat",
        images: ["cat"],
        title: "Pearl The Cat: Toy edition",
        price: "340.00",
        status: "new",
        description:
          "The world's most beautiful cat. Pearl The Cat is a pretty cat who is grey with black stripes on top and spots on the belly. She likes catching flies and eating beef jerky as well as yogurt. This edition of Pearl The Cat includes toys for maximum Pearl enjoyment. (Batteries not included)",
        sellerInfo: {
          name: "Matt Smith",
          contact: "+1 825-999-9999",
          listingCount: 2,
        },
      },
      error: null,
    };
  else if (options.params.id === "cat2")
    return {
      loading: false,
      data: {
        id: "cat2",
        images: ["cat", "cat2"],
        title: "Pearl The Cat: Toy edition",
        price: "340.00",
        status: "new",
        description:
          "The world's most beautiful cat. Pearl The Cat is a pretty cat who is grey with black stripes on top and spots on the belly. She likes catching flies and eating beef jerky as well as yogurt. This edition of Pearl The Cat includes toys for maximum Pearl enjoyment. (Batteries not included)",
        sellerInfo: {
          name: "Matt Smith",
          contact: "+1 825-999-9999",
          listingCount: 2,
        },
      },
      error: null,
    };
  else if (options.params.id === "cat3")
    return {
      loading: false,
      data: {
        id: "cat3",
        images: ["cat", "cat2", "cat3"],
        title: "Pearl The Cat: Toy edition",
        price: "340.00",
        status: "new",
        description:
          "The world's most beautiful cat. Pearl The Cat is a pretty cat who is grey with black stripes on top and spots on the belly. She likes catching flies and eating beef jerky as well as yogurt. This edition of Pearl The Cat includes toys for maximum Pearl enjoyment. (Batteries not included)",
        sellerInfo: {
          name: "Matt Smith",
          contact: "+1 825-999-9999",
          listingCount: 2,
        },
      },
      error: null,
    };
  else if (options.params.id === "cat4")
    return {
      loading: false,
      data: {
        id: "cat4",
        images: ["cat", "cat2", "cat3", "cat4"],
        title: "Pearl The Cat: Toy edition",
        price: "340.00",
        status: "new",
        description:
          "The world's most beautiful cat. Pearl The Cat is a pretty cat who is grey with black stripes on top and spots on the belly. She likes catching flies and eating beef jerky as well as yogurt. This edition of Pearl The Cat includes toys for maximum Pearl enjoyment. (Batteries not included)",
        sellerInfo: {
          name: "Matt Smith",
          contact: "+1 825-999-9999",
          listingCount: 2,
        },
      },
      error: null,
    };
  else if (options.params)
    return {
      loading: false,
      data: {
        id: "cat5",
        images: ["cat", "cat2", "cat3", "cat4", "cat"],
        title: "Pearl The Cat: Toy edition",
        price: "340.00",
        status: "new",
        description:
          "The world's most beautiful cat. Pearl The Cat is a pretty cat who is grey with black stripes on top and spots on the belly. She likes catching flies and eating beef jerky as well as yogurt. This edition of Pearl The Cat includes toys for maximum Pearl enjoyment. (Batteries not included)",
        sellerInfo: {
          name: "Matt Smith",
          contact: "+1 825-999-9999",
          listingCount: 2,
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

/** checkout mockup */
export const checkoutMockup = (options) => {
  // success
  if (options)
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Success",
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
