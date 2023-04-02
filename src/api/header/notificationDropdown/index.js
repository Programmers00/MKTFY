import {
  getNotificationsMockup,
  putNotificationMockup,
} from "./notificationsMockup";
// request api
import request from "../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get notifications data: call api or mockup */
export const getNotifications = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getNotificationsMockup(options)
    : await request(options);
};

/** put notification */
export const putNotification = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await putNotificationMockup(options)
    : await request(options);
};
