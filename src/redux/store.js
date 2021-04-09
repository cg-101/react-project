import { createStore } from "redux";

// data member
const initState = {
  counter: 100,
  products: [
    { productTitle: "Product1", price: 100, qty: 1 },
    { productTitle: "Product2", price: 200, qty: 1 },
    { productTitle: "Product3", price: 300, qty: 1 },
    { productTitle: "Product4", price: 400, qty: 1 },
    { productTitle: "Product5", price: 100, qty: 1 },
    { productTitle: "Product6", price: 200, qty: 1 },
    { productTitle: "Product7", price: 300, qty: 1 },
  ],
  cart: [{ productTitle: "Product1", price: 100, qty: 1 }],
  profile: { username: "My.Xyz" },
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
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
}

const store = createStore(myreducer);
export default store;
