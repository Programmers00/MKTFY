import auth0js from "auth0-js";
import jwt_decode from "jwt-decode";

export const webAuth = new auth0js.WebAuth({
  domain: "dev-ebwghc3efkan16do.us.auth0.com",
  clientID: "1EsYcmuX1TcAUO2Qos1X70DiRPTHsfpL",
  redirectUri: "http://localhost:3000/",
  audience: "https://dev-ebwghc3efkan16do.us.auth0.com/api/v2/",
  responseType: "token id_token",
  scope: "read:current_user update:current_user_metadata",
});
