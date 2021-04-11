import { useDispatch, useSelector } from "react-redux";
import {
  apiCallAddtoCart,
  apiCallUpdateUserProfile,
} from "../redux/action";

export default function Page2() {
  const counter = useSelector((state) => state.counter);
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const updateCounter = () => {
    dispatch({ type: "INC_COUNTER" });
  };

  const addToCartV1 = (product) => {
    // update the ui
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const addToCart = (product) => {
    console.log(product);
    dispatch(apiCallAddtoCart(product));
  };

  const udpateProfile = (user) => {
    dispatch(apiCallUpdateUserProfile(user));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <button
          className="btn btn-sm btn-primary"
          onClick={() =>
            udpateProfile({ id: 1, username: "new username" })
          }
        >
          Update Profile
        </button>
        <button className="bg-primary text-light">A</button>
        <button className="bg-primary text-light"> A</button>
        <button className="bg-primary text-light">A</button>
      </div>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-4 px-1 ">
            <div
              className="border d-flex justify-content-center align-items-center my-1"
              style={{ height: "150px" }}
            >
              {product.productTitle}
              <button
                className="btn btn-sm btn-primary"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
