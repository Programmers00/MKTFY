import {
  dealsMockup,
  carsVehiclesMockup,
  furnitureMockup,
  electronicsMockup,
  realEstateMockup,
} from "./dealsMockup";
// process api for request api
import { processApi } from "../../../../utils/processApi.js";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** getDeals: call api or mockup */
export const getDeals = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await dealsMockup(options)
    : await processApi(options);
};

/** getCarsVehicles: call api or mockup */
export const getCarsVehicles = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await carsVehiclesMockup(options)
    : await processApi(options);
};

/** getFurniture: call api or mockup */
export const getFurniture = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await furnitureMockup(options)
    : await processApi(options);
};

/** getElectronics: call api or mockup */
export const getElectronics = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await electronicsMockup(options)
    : await processApi(options);
};

/** getRealEstate: call api or mockup */
export const getRealEstate = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await realEstateMockup(options)
    : await processApi(options);
};
