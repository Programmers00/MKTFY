/** get notifications mockup */
export const getNotificationsMockup = (options) => {
  // success
  if (options)
    // success
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get My Listings Count Success",
        notifications: [
          {
            notifier: "MKTFY",
            summary: "Hey Pearl, welcome to MKTFY",
            date: "September 22 2023",
            isRead: false,
            id: 6,
          },
          {
            notifier: "MKTFY",
            summary: "Let's create your first offer!",
            date: "September 21 2023",
            isRead: false,
            id: 5,
          },
          {
            notifier: "MKTFY",
            summary: "Our Terms of Service has been updated!",
            date: "September 20 2023",
            isRead: true,
            id: 4,
          },
          {
            notifier: "MKTFY",
            summary: "Hey Pearl, welcome to MKTFY",
            date: "September 19 2023",
            isRead: true,
            id: 3,
          },
          {
            notifier: "MKTFY",
            summary: "Let's create your first offer!",
            date: "September 05 2023",
            isRead: true,
            id: 2,
          },
          {
            notifier: "MKTFY",
            summary: "Our Terms of Service has been updated!",
            date: "September 03 2023",
            isRead: false,
            id: 1,
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

/** put notification mockup */
export const putNotificationMockup = (options) => {
  // success
  if (options)
    // success
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Put Notification Success",
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
