import {
  getNotificationsData,
  putNotification,
} from "../../api/header/notificationDropdown";

/** actions : get notifications data */
export const getNotifications = (options) => {
  return async () => {
    try {
      return await getNotificationsData(options);
    } catch (error) {
      console.log("Error");
    }
  };
};

/** actions : read notification */
export const readNotification = (options) => {
  return async () => {
    try {
      return await putNotification(options);
    } catch (error) {
      console.log("Error");
    }
  };
};
