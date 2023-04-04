/** initialize state */
const initailState = {
  listings: {
    loading: false,
    data: {
      code: "",
      status: null,
      message: "",
      id: "",
      title: "",
      items: [],
    },
  },
};

// deals
export const deals = (state = initailState, action) => {
  switch (action.type) {
    case "SET_DEALS":
      return {
        ...state,
        listings: action.response,
      };
    default:
      return state;
  }
};

// carsVehicles
export const carsVehicles = (state = initailState, action) => {
  switch (action.type) {
    case "SET_VEHICLES":
      return {
        ...state,
        listings: action.response,
      };
    default:
      return state;
  }
};

// furniture
export const furniture = (state = initailState, action) => {
  switch (action.type) {
    case "SET_FURNITURE":
      return {
        ...state,
        listings: action.response,
      };
    default:
      return state;
  }
};

// electronics
export const electronics = (state = initailState, action) => {
  switch (action.type) {
    case "SET_ELECTRONICS":
      return {
        ...state,
        listings: action.response,
      };
    default:
      return state;
  }
};

// realEstate
export const realEstate = (state = initailState, action) => {
  switch (action.type) {
    case "SET_REAL_ESTATE":
      return {
        ...state,
        listings: action.response,
      };
    default:
      return state;
  }
};
