export const login = token => {
  return {
    type: 'LOGIN',
    payload: token,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const addUser = user => {
  return {
    type: 'ADD',
    payload: user,
  };
};
