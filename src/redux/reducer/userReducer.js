const initialState = {
  email: null,
  firstName: null,
  gender: null,
  id: null,
  image: null,
  lastName: null,
  token: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
