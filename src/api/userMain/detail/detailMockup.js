/** get detail mockup */
export const getDetailMockup = (options) => {
  // success
  if (options.data)
    return {
      status: 200,
      statusText: "OK",
      data: {
        id: "2bf9b8a2-8256-42a4-9fe2-adb9c903954c",
        productName: "TEST321321321",
        description: "TEST",
        price: 12,
        category: "FURNITURE",
        condition: "USED",
        status: "ACTIVE",
        address: "3213",
        city: "Calgary",
        sellerListingCount: 14,
        created: "2023-04-07T23:22:38.639347Z",
        userId: "auth0|642f4b88b60b6913044f09fc",
        sellerProfile: {
          id: "auth0|642f4b88b60b6913044f09fc",
          firstName: "Hatori",
          lastName: "Hanzo",
          email: "hh@hh.com",
          phone: "911",
          address: "123 St. E",
          city: "Edmonton",
        },
        images: [
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/9ce21266-46a5-473f-b0fd-bb89608a7ce7",
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/05c1481b-a617-40e2-ae4c-29c21fd87533",
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/105ea10a-197d-49cb-b831-3688849bd7c2",
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/3151480e-8b10-4f48-9caa-13543588eb03",
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/32d916f2-011e-4e2b-a0dd-fff978058795",
        ],
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

/** post checkout mockup */
export const putCheckoutMockup = (options) => {
  // success
  if (options)
    return {
      status: 200,
      statusText: "OK",
      data: {
        id: "703ae08d-2906-410c-a22a-f7283b9a98fa",
        productName: "Keoro",
        description: "Kero?",
        price: 99,
        category: "REAL_ESTATE",
        condition: "NEW",
        status: "PENDING",
        address: "99 Keroro St SW",
        city: "Calgary",
        sellerListingCount: null,
        created: "2023-04-06T18:56:04.980978Z",
        userId: "auth0|642f13286698f24cf0b9e5b5",
        sellerProfile: {
          id: "auth0|642f13286698f24cf0b9e5b5",
          firstName: "Samuel",
          lastName: "Noh",
          email: "nes0410+00@gmail.com",
          phone: "+1 (825) 994-4199",
          address: "8 Bridlecrest Dr SW",
          city: "Calgary",
        },
        images: [
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/4905de7e-098e-44f0-8117-24178fc14814",
        ],
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
