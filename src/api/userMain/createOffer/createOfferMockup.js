/** upload images mockup */
export const uploadImagesMockup = (options) => {
  // success
  if (options)
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Upload Images Success",
        uploadedFiles: [
          {
            fileName: "image1.jpg",
            fileType: "image/jpeg",
            fileSize: 234567,
            fileId: "abc123",
          },
          {
            fileName: "image2.png",
            fileType: "image/png",
            fileSize: 345678,
            fileId: "def456",
          },
          {
            fileName: "image3.gif",
            fileType: "image/gif",
            fileSize: 456789,
            fileId: "ghi789",
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

/** create offer mockup */
export const createOfferMockup = (options) => {
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