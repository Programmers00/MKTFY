// regex
export const regex = {
  // Samuel
  firstName: /^[A-Z][a-z]+$/,
  // Noh
  lastName: /^[A-Z][a-z]+$/,
  // +(1)000-0000
  phone: /^\+\d{1}\(\d{3}\)\d{3}-\d{4}$/,
  // 100 Main St
  streetAddress: /^\d+\s[a-zA-Z\s]+$/,
  // Calgary
  city: /^[a-zA-Z\s]+$/,
  // Alberta
  province: /^[a-zA-Z\s]+$/,
  // Canada
  country: /^[a-zA-Z\s]+$/,
  //account@domain.com
  email:
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
  // minimum of 8 and maximum of 10 characters, at least one uppercase letter, one lowercase letter, one number and at least one special character
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,10}/,
};

// validation message
export const validationMessage = {
  firstName: "your first name is incorrect",
  lastName: "Your last name is incorrect",
  phone: "Invailid phone number",
  streetAddress: "Street address is incorrect",
  city: "City name is incorrect",
  province: "Province name is incorrect",
  country: "Country name is incorrect",
  email: "Your email is incorrect",
  password:
    "Minimum of 8 and maximum of 10 characters, at least one uppercase letter, one lowercase letter, one number and at least one special character",
};
