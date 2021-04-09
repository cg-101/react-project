import axios from "axios";

// thunk
export function apiCallAddtoCart(product) {
  return async (dispatch) => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    // this will persisist the information at server.
    await axios.post(url, product);

    // this will udpate my ui
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
}

export function apiCallUpdateUserProfile(userProfile) {
  return async (dispatch) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${userProfile.id}`;

    // api call.
    await axios.put(url, userProfile);

    // this will udpate my ui
    dispatch({ type: "UPDATE_PROFILE", payload: userProfile });
  };
}
