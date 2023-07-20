const defaultState = {
  users: [],
};

export const SET_USERS = "SET_USERS";
export const REMOVE_USER = "REMOVE_USER";
export const ADD_USER = "ADD_USER";
export const FETCH_USERS = "SET_USEFETCH_USERSRS";

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.payload] };
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== Number(action.payload)),
      };
    default:
      return state;
  }
}

export const addUserAction = (payload) => ({ type: ADD_USER, payload });
export const removeUserAction = (payload) => ({
  type: REMOVE_USER,
  payload,
});
export const setUsersAction = (payload) => ({ type: "SET_USERS", payload });
export const fetchUsersAction = () => ({ type: "FETCH_USERS" });
