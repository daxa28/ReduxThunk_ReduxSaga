import { addManyCustomerAction } from "../store/customerReducer";

export const fetchCustomer = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(addManyCustomerAction(json)));
  };
};
