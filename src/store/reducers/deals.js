// no need this file

// init request options
const requestOptions = {
  url: "/contents",
  params: {},
  method: "get",
};

const deals = (
  state = {
    requestOptions: requestOptions,
  },
  action
) => {
  switch (action.type) {
    // update request options
    case "UPDATE_REQUEST_OPTIONS":
      return {
        ...state,
        requestOptions: {
          ...state.requestOptions,
          url: action.requestOptions.url,
          param: action.requestOptions.param,
          method: action.requestOptions.method,
        },
      };
    default:
      return state;
  }
};
export default requestOptions;
