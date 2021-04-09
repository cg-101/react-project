import { createStore } from "redux";

// data member
const initState = {
  counter: 100,
  cart: [{ productTitle: "Product1", price: 100, qty: 1 }],
  profile: { username: "react" },
};

// function :: logical
// special
// param1 :: state
// param2 :: action
function myreducer(state = initState, action) {
  switch (action.type) {
    case "INC_COUNTER":
      return { ...state, counter: state.counter + 1 };

    case "DEC_COUTNER":
      return { ...state, counter: state.counter - 1 };

    case "UPDATE_PROFILE":
      // return { ...state, profile: { username: "my new username" } };
      return { ...state, profile: action.payload };

    case "ADD_TO_CART":
      // return { ...state, cart: [...state.cart, action.payload] };
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            productTitle: "Product2",
            qty: 2,
            price: 200,
          },
        ],
      };

    default:
      return state;
  }
}

const store = createStore(myreducer);
export default store;
