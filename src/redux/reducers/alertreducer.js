export const  LOADING='LOADING'
const initialData = {
  loading: false,
};

export const alertreducer = (state = initialData, actionTypes) => {
  switch (actionTypes.type) {
    case "LOADING": {
      return {
        ...state,
        loading: actionTypes.payload,
      };
    }
    default:return state
  }
};
