/** get my lisings count mockup */
export const getMyListingsCountMockup = (options) => {
  // success
  if (options)
    // success
    return {
      status: 200,
      statusText: "OK",
      data: {
        pendingListings: 2,
        unreadNotifications: 0,
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
