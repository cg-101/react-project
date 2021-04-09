import axios from "axios";

export function apiCallAddtoCart(product) {
  return async (dispatch) => {
    console.log("CALl....", product);
    const url = "https://jsonplaceholder.typicode.com/posts";

    // this will persisist the information at server.
    await axios.post(url, product);

    // this will udpate my ui
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
}
