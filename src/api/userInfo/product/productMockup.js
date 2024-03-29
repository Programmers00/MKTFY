/** product mockup */
/** get product */
export const getProductByIdMockup = (options) => {
  // success
  if (options)
    // success
    return {
      status: 200,
      statusText: "OK",
      data: {
        id: "f99eb9bc-929d-4522-99a4-14127be193ac",
        productName: "test",
        description: "2 pic",
        price: 90,
        category: "VEHICLES",
        condition: "NEW",
        status: "PENDING",
        address: "ijij",
        city: "Calgary",
        sellerListingCount: 15,
        created: "2023-04-06T16:49:57.914742Z",
        userId: "auth0|642c50f59e6ad19131004452",
        sellerProfile: {
          id: "auth0|642c50f59e6ad19131004452",
          firstName: "Jon",
          lastName: "Mo",
          email: "P24+moirjonathan@gmail.com",
          phone: "4034649810",
          address: "18-8533 Silver Springs Rd NW",
          city: "Calgary",
        },
        images: [
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/6ab91a79-b118-4c3d-9698-dc80025ecb69",
        ],
      },
    };
  // fail
  return {
    status: 400,
    statusText: "Bad Request",
    data: {
      // message: "This porduct does not hava a buyer",
    },
  };
};

/** put product */
export const putProductMockup = (options) => {
  // success
  if (options)
    // success
    return {
      status: 200,
      statusText: "OK",
      data: {
        id: "4e31057e-9930-4e39-913b-e4b0d6250da9",
        productName: "Keroro Collection",
        description: "Keroro Collection",
        price: 10,
        category: "RealEstate",
        condition: "used",
        status: "ACTIVE",
        address: "4 Keroro Collection",
        city: "calgary",
        sellerListingCount: null,
        created: "2023-04-06T08:08:34.802597Z",
        userId: "auth0|642b1676b60b6913044e6270",
        sellerProfile: null,
        images: [
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/9bc3eea0-95b7-4c77-9a6e-109d8e1ae12f",
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/c955965b-c0b0-4ec7-bc1a-14bcf2576385",
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/c955965b-c0b0-4ec7-bc1a-14bcf2576385",
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/61cc2814-021a-4568-b029-f0c86e00d2b8",
        ],
      },
    };
  // fail
  return {
    status: 400,
    statusText: "Bad Request",
    data: {
      type: "https://tools.ietf.org/html/rfc7231#section-6.5.1",
      title: "One or more validation errors occurred.",
      status: 400,
      traceId: "00-5fb8cb936012c369532bb07b3182166f-307d65adbfb7154a-00",
      errors: {
        data: ["The data field is required."],
        "$.images[0]": [
          "The JSON value could not be converted to System.Guid. Path: $.images[0] | LineNumber: 0 | BytePositionInLine: 322.",
        ],
      },
    },
  };
};

/** put product complete */
export const putProductCompleteMockup = (options) => {
  // success
  if (options)
    // success
    return {
      status: 200,
      statusText: "OK",
      data: {
        id: "04b4415d-8b2f-42e7-9cbe-21465bb7c87b",
        productName: "Dororo",
        description: "Dororo",
        price: 199,
        category: "VEHICLES",
        condition: "NEW",
        status: "COMPLETE",
        address: "199 Dororo St SW",
        city: "Calgary",
        sellerListingCount: null,
        created: "2023-04-06T18:40:46.898334Z",
        userId: "auth0|642b1676b60b6913044e6270",
        sellerProfile: null,
        images: [
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/a8314d25-43ef-48cb-9fb4-ca574280d9a3",
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/68c40dd6-f9ee-4ab8-ae19-4dcf253ff011",
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/4eed387b-1e60-4f96-9594-b833f7ab1235",
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/9b145ec1-6d93-45c6-8dc6-31d78b3603f8",
        ],
      },
    };
  // fail
  return {
    status: 400,
    statusText: "Bad Request",
    data: {
      message: "This porduct does not hava a buyer",
    },
  };
};

/** delete product */
export const putProductCancelMockup = (options) => {
  // success
  if (options)
    // success
    return {
      status: 200,
      statusText: "OK",
      data: {
        id: "666581a3-010f-46af-ba8f-6c350a65dc05",
        productName: "good one1234",
        description: "good",
        price: 110,
        category: "REAL_ESTATE",
        condition: "NEW",
        status: "CANCELLED",
        address: "10 string",
        city: "Calgary",
        sellerListingCount: null,
        created: "2023-04-05T06:43:08.178519Z",
        userId: "auth0|642b1676b60b6913044e6270",
        sellerProfile: null,
        images: [
          "https://mktfy-proof-staging.s3.ca-central-1.amazonaws.com/39e25933-791a-4c9c-8d18-f18682280b78",
        ],
      },
    };
  // fail
  return {
    status: 400,
    statusText: "Bad Request",
    data: { message: "This product has a buyer and cannot be cancelled" },
  };
};
