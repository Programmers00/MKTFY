import {
  postUploadImagesMockup,
  postCreateOfferMockup,
} from "./createOfferMockup";
// process api for request api
import { processApi } from "../../../utils/processApi.js";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** post upload images: call api or mockup */
export const postUploadImages = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await postUploadImagesMockup(options)
    : await processApi(options);
};

/** post create offer: call api or mockup */
export const postCreateOffer = async (options) => {
  let isTest = true; // local variable Test => true
  return isOnlyMockup || isTest
    ? await postCreateOfferMockup(options)
    : await processApi(options);
};
