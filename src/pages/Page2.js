import { useDispatch, useSelector } from "react-redux";

export default function Page2() {
  const counter = useSelector((state) => state.counter);
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const updateCounter = () => {
    dispatch({ type: "INC_COUNTER" });
  };

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {products.map((product, index) => (
          <div
            className="col-4 border border-primary d-flex justify-content-center align-items-center"
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
        ))}
      </div>
    </div>
  );
}
