import {
  getAccountInformationMockup,
  putAccountInformationMockup,
} from "./accountInformationMockup";
// request api
import request from "../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** get account information data: call api or mockup */
export const getAccountInformation = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await getAccountInformationMockup(options)
    : await request(options);
};

/** put account information: call api or mockup */
export const putAccountInformation = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await putAccountInformationMockup(options)
    : await request(options);
};
