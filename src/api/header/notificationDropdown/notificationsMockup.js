/** get notifications mockup */
export const getNotificationsMockup = (options) => {
  // success
  if (options)
    // success
    return {
      status: 200,
      statusText: "OK",
      data: {
        new: [],
        seen: [
          {
            id: "9c5bd046-7fa6-4efd-9707-e10a530a5f01",
            message: "SAM NOH has offered to buy your listing of Dororo!",
            created: "2023-04-11T02:45:58.595926Z",
            read: true,
          },
          {
            id: "9df9c30c-026a-4bc6-b504-ce1d720e5be4",
            message: "SAM NOH has offered to buy your listing of Tamama!",
            created: "2023-04-11T02:46:03.811792Z",
            read: true,
          },
          {
            id: "fb05b172-54dc-4c8b-a8a0-9647cfa88b8e",
            message: "SAM NOH has offered to buy your listing of KERORO!",
            created: "2023-04-11T03:42:54.31328Z",
            read: true,
          },
          {
            id: "d489b47c-b880-47ad-8f2b-5a77fcff688e",
            message:
              "SAM NOH has offered to buy your listing of Keroro Collection!",
            created: "2023-04-12T07:42:00.516513Z",
            read: true,
          },
          {
            id: "ca95d218-6ea7-45cf-b3b1-b48949eb73c0",
            message:
              "SAM NOH has offered to buy your listing of KERORORORORORO!",
            created: "2023-04-12T07:42:07.535623Z",
            read: true,
          },
          {
            id: "c8551b51-f2b4-43d2-945a-ad66cc6df835",
            message: "SAM NOH has offered to buy your listing of Dororo!",
            created: "2023-04-12T07:42:14.603211Z",
            read: true,
          },
          {
            id: "4a396306-8517-4ec7-adc8-85b392346b36",
            message: "SAM NOH has offered to buy your listing of Dororo!",
            created: "2023-04-12T07:43:55.075688Z",
            read: true,
          },
          {
            id: "4b9ef022-74a7-4899-94de-95b28ac934e4",
            message: "SAM NOH has offered to buy your listing of 1!",
            created: "2023-04-12T18:15:04.746104Z",
            read: true,
          },
          {
            id: "581df284-4503-49ee-bb61-080495314c2b",
            message: "SAM NOH has offered to buy your listing of TAMAMAS!",
            created: "2023-04-12T18:15:57.828784Z",
            read: true,
          },
          {
            id: "97eb4bbf-1e30-4dd6-b780-96e79c98a0de",
            message: "SAM NOH has offered to buy your listing of keroro!",
            created: "2023-04-13T05:15:20.421792Z",
            read: true,
          },
          {
            id: "bda0934a-4e30-4cbc-b07b-f4405c4322b0",
            message: "SAM NOH has offered to buy your listing of Dororo!",
            created: "2023-04-13T05:23:36.029437Z",
            read: true,
          },
        ],
      },
    };
  // fail
  return {
    status: 400,
    statusText: "Bad Request",
    data: {},
  };
};

/** put notification mockup */
// export const putNotificationMockup = (options) => {
//   // success
//   if (options)
//     // success
//     return {
//       loading: false,
//       data: {
//         code: "SUCCESS",
//         status: 200,
//         message: "Put Notification Success",
//       },
//       error: null,
//     };
//   // fail
//   return {
//     loading: false,
//     data: null,
//     error: {
//       code: "ERR_NETWORK",
//       message: "Network Error",
//       name: "AxiosError",
//       status: 404,
//     },
//   };
// };
