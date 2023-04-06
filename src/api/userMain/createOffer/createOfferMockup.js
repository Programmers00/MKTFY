/** upload images mockup */
export const postUploadImagesMockup = (options) => {
  // success
  if (options)
    return {
      status: 200,
      statusText: "OK",
      data: [{ id: "b49da890-47e7-437d-a8fc-f03bdabf6397" }],
    };
  // fail
  return {
    errors: { data: ["The JSON value could not be converted to System"] },
    data: [],
    status: 400,
    title: "One or more validation errors occurred.",
  };
};

/** post create offer mockup */
export const postCreateOfferMockup = (options) => {
  // success
  if (options)
    return {
      status: 200,
      statusText: "OK",
      data: {
        address: "99 Keroro St SW",
        category: "REAL_ESTATE",
        city: "Calgary",
        condition: "NEW",
        created: "2023-04-06T18:56:04.9809783Z",
        description: "Kero?",
        id: "703ae08d-2906-410c-a22a-f7283b9a98fa",
        images: [
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/4905de7e-098e-44f0-8117-24178fc14814",
        ],
        price: 99,
        productName: "Keoro",
        sellerListingCount: null,
        sellerProfile: null,
        status: "ACTIVE",
        userId: "auth0|642f13286698f24cf0b9e5b5",
      },
    };
  // fail
  return {
    errors: { data: ["The JSON value could not be converted to System"] },
    data: [],
    status: 400,
    title: "One or more validation errors occurred.",
  };
};
