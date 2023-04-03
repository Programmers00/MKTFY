const envs = {
  /** setting system mockup */
  isOnlyMockup: false, // if false -> no mockup, true -> only mockcup
  /** api base */
  baseUrl: "http://mktfy-proof.ca-central-1.elasticbeanstalk.com", // api endpoint base url
  /** environment(development or build) */
  devUrl: "http://localhost:3000", //localhost for development.
  buildUrl: "https://mktfy.netlify.app", // for deployment
};
export default envs;
