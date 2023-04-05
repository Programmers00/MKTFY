/** initialize state */
const initailState = {
  data: [],
};

// deals
export const deals = (state = initailState, action) => {
  switch (action.type) {
    case "SET_DEALS":
      return {
        ...state,
        data: action.payload,
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
        data: action.payload,
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
        data: action.payload,
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
        data: action.payload,
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
        data: action.payload,
      };
    default:
      return state;
  }
};
