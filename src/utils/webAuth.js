import auth0js from "auth0-js";
import envs from "../envs";

const findDomainInfo = () => {
  const whoseAuth = "jason";
  const jasonAuth = {
    domain: "mktfy-proof.us.auth0.com",
    audience: "http://mktfy.com",
    clientID: "XC5xNkx2fMFYrKFecp9tWIHf1bsdloFz",
    realm: "Username-Password-Authentication",
  };

  const myAuth = {
    domain: "dev-ebwghc3efkan16do.us.auth0.com",
    audience: "https://dev-ebwghc3efkan16do.us.auth0.com/api/v2/",
    clientID: "1EsYcmuX1TcAUO2Qos1X70DiRPTHsfpL",
    realm: "Username-Password-Authentication",
  };
  return whoseAuth === "jason" ? jasonAuth : myAuth;
};

export const webAuth = new auth0js.WebAuth({
  domain: findDomainInfo().domain, //required
  clientID: findDomainInfo().clientID, //required
  redirectUri:
    process.env.NODE_ENV === "development" ? envs.devUrl : envs.buildUrl, //optional, if don't use here, you have to add in your parameter
  audience: findDomainInfo().audience, //optional, if don't use here, you have to add in your parameter
  // id_token for getting userId
  responseType: "token id_token", //optional, if don't use here, you have to add in your parameter
  scope: "read:current_user update:current_user_metadata", //optional
  realm: findDomainInfo().realm,
});
