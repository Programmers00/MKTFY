import {
  getNotifications,
  // putNotification,
} from "../../api/header/notificationDropdown";

/** action : get notifications */
// options
const getOptions = {
  url: "/api/User/notifications",
};
export const fetchNotifications = () => {
  return async () => {
    try {
      return await getNotifications({ ...getOptions });
    } catch (error) {
      console.error("#Error getNotifications:", error);
    }
  };
};

/** action : put notification */
// const putOptions = {
//   url: "/api/user/notifications",
//   method: "put",
// };
// export const updateNotification = (params) => {
//   return async () => {
//     try {
//       return await putNotification({ ...putOptions, params });
//     } catch (error) {
//       console.log("#Error putNotification", error);
//     }
//   };
// };
