import {
  postUploadImagesMockup,
  postCreateOfferMockup,
} from "./createOfferMockup";
// request api
import request from "../../../utils/request";
// global variable: envs.isOnlyMockup for project mockup test
import envs from "../../../envs";

// global variable
const isOnlyMockup = envs.isOnlyMockup;

/** post upload images: call api or mockup */
export const postUploadImages = async (options) => {
  let isTest = false; // local variable Test => true
  return isOnlyMockup || isTest
    ? await postUploadImagesMockup(options)
    : await request(options);
};

/** post create offer: call api or mockup */
export const postCreateOffer = async (options) => {
  let isTest = false; // local variable Test => true
  return isOnlyMockup || isTest
    ? await postCreateOfferMockup(options)
    : await request(options);
};
