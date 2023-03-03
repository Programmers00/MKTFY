/** upload images mockup */
export const postUploadImagesMockup = (options) => {
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
            fileName: "cat.jpg",
            fileType: "image/jpeg",
            fileSize: 234567,
            fileId: "cat",
          },
          {
            fileName: "cat2.png",
            fileType: "image/png",
            fileSize: 345678,
            fileId: "cat2",
          },
          {
            fileName: "cat3.gif",
            fileType: "image/gif",
            fileSize: 456789,
            fileId: "cat3",
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

/** post create offer mockup */
export const postCreateOfferMockup = (options) => {
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
