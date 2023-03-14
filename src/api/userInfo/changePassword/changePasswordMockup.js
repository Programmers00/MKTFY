/** change password mockup */
export const getManagementApiAccessTokenMockup = (options) => {
  // success
  if (options)
    // success
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Get Management Api Access Token Success",
        managementApiAccessToken:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZGTzBkdHotUC1pbk9feEFZQXZDWCJ9.eyJpc3MiOiJodHRwczovL2Rldi1lYndnaGMzZWZrYW4xNmRvLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2M2U1Y2Y0ZjU5NWM5YTk4NjdmMGQwZGEiLCJhdWQiOiJodHRwczovL2Rldi1lYndnaGMzZWZrYW4xNmRvLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjc4Nzc2NTM4LCJleHAiOjE2Nzg3ODM3MzgsImF6cCI6IjFFc1ljbXVYMVRjQVVPMlFvczFYNzBEaVJQVEhzZnBMIiwic2NvcGUiOiJyZWFkOmN1cnJlbnRfdXNlciB1cGRhdGU6Y3VycmVudF91c2VyX21ldGFkYXRhIn0.PubCb-U6KQ5nGtCG2-R7-cK5n4xJEYGG1fw5egjsX3TJvoKyeoEMlEiVK7Lad8sYKM05oVjnFaUhAWbSHkNvl95n-CAAiiHCenwDq06p8DsfUqZ2E65K16lNXzOKLOiiB9iyan16NyeYfQHWIs6tTkGbw8E0fEmyKD2frZBeTaMwyT1cM8QGOaHxMI2jW03FXCZrhj6beJI5CFRG7KSyWldSln_EXzBXwnmv0Z20RIFvgScUNIl8XvWvqNnRLaDhdN6oyHZIif2IKyDnnL5vdBtUAba4e7byvpDgZUjWn_tDfxeR89NA29bl7f3OuA-RRpGkJtGrohcxjAgGNTSaCA&scope=read%3Acurrent_user%20update%3Acurrent_user_metadata&expires_in=7200&token_type=Bearer&state=akS0KDVfX5dpeq2t1T_AYNN6Y1AnRHq3&id_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkZGTzBkdHotUC1pbk9feEFZQXZDWCJ9.eyJpc3MiOiJodHRwczovL2Rldi1lYndnaGMzZWZrYW4xNmRvLnVzLmF1dGgwLmNvbS8iLCJhdWQiOiIxRXNZY211WDFUY0FVTzJRb3MxWDcwRGlSUFRIc2ZwTCIsImlhdCI6MTY3ODc3NjUzOCwiZXhwIjoxNjc4ODEyNTM4LCJzdWIiOiJhdXRoMHw2M2U1Y2Y0ZjU5NWM5YTk4NjdmMGQwZGEiLCJhdF9oYXNoIjoiYUFidzgtNTZPajVTNTRyUzhfTTNkdyIsIm5vbmNlIjoiYTBCVUF5S1BMflhDZFhoZ0pxNHRUam9zdlQ1SFFJNGwifQ.jvFjGF6AlP7BwTk4cLvRJpFEhpHHu0wQEVyTIZ19xbYdYL07ahf_V-QeFpMdkhVnU3cNG2sL4BDnbIEI5Rk8MonoCa7j3EyTGHb3q1Xb27QjFO77iRkl2mibSxseXQh9yqOZ9TvvxfNEaKEdIVc8DCf-rBWPjqb-V3t9CmcjexQZtzLs1JgfhGCMP3hsmzh7Ja7h8IMX54wn-fzo3TJLKQLcWuYlRbfKjz0a5_Hac5iUqbc28fs7aLuGMHfn98hHNxdin59o7qEgY4onOkikQ1y3-fUZsCLXxAWsqn3Xh3b7kD0h4NVNExiz-r__BefXsGogh30I9DET77awQgengw",
      },
      error: null,
    };
  // fail
  return {
    loading: false,
    data: null,
    error: {
      code: "ERR_NETWORK",
      message: "Network Error",
      name: "AxiosError",
      status: 404,
    },
  };
};

export const putChangePasswordMockup = (options) => {
  // success
  if (options)
    // success
    return {
      loading: false,
      data: {
        code: "SUCCESS",
        status: 200,
        message: "Put Change Password Success",
      },
      error: null,
    };
  // fail
  return {
    loading: false,
    data: null,
    error: {
      code: "ERR_NETWORK",
      message: "Network Error",
      name: "AxiosError",
      status: 404,
    },
  };
};
