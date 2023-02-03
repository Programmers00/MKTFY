// regex
export const regex = {
  //account@domain.com
  email:
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
  // minimum of 8 and maximum of 10 characters, at least one uppercase letter, one lowercase letter, one number and at least one special character
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/,
};

// validation message
export const validationMessage = {
  email: "Your email is incorrect",
  password:
    "minimum of 8 and maximum of 10 characters, at least one uppercase letter, one lowercase letter, one number and at least one special character",
};
