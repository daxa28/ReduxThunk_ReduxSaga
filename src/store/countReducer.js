const defaultState = {
  count: 0,
};

export const INCREMENT = "INCREMENT";
export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const DECREMENT = "DECREMENT";
export const ASYNC_DECREMENT = "ASYNC_DECREMENT";

export default function countReducer(state = defaultState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

export const countIncrementAction = () => ({ type: "INCREMENT" });
export const AsyncCountIncrementAction = () => ({ type: "ASYNC_INCREMENT" });
export const countDecrementAction = () => ({ type: "DECREMENT" });
export const AsyncCountDecrementAction = () => ({ type: "ASYNC_DECREMENT" });
