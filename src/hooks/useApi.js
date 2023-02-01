import envs from "../envs";
import { useAxios } from "./useAxios";
/** option => {url, param, header}, isTest: true or false,  */
const useApi = async (options, mockup, isTest = false) => {
  // 1. envs.onlyMockup or isTest: true => return mockup
  if (envs.onlyMockup || isTest) {
    console.log("mockup");
    await (() => mockup())();
  }
  // 2. return useAxios
  return await useAxios(options);
};

export default useApi;
