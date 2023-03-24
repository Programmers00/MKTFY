import auth0js from "auth0-js";
import envs from "../envs";

export const webAuth = new auth0js.WebAuth({
  domain: "dev-ebwghc3efkan16do.us.auth0.com", //required
  clientID: "1EsYcmuX1TcAUO2Qos1X70DiRPTHsfpL", //required
  redirectUri:
    process.env.NODE_ENV === "development" ? envs.devUrl : envs.buildUrl, //optional, if don't use here, you have to add in your parameter
  audience: "https://dev-ebwghc3efkan16do.us.auth0.com/api/v2/", //optional, if don't use here, you have to add in your parameter
  responseType: "token id_token", //optional, if don't use here, you have to add in your parameter
  scope: "read:current_user update:current_user_metadata", //optional
});
