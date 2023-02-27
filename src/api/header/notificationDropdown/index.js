import {
  getNotificationsMockup,
  putNotificationMockup,
} from "./notificationsMockup";
// process api for request api
import { processApi } from "../../../utils/processApi.js";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get notifications data: call api or mockup */
export const getNotificationsData = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getNotificationsMockup(options)
    : await processApi(options);
};

/** put notification */
export const putNotification = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await putNotificationMockup(options)
    : await processApi(options);
};
