import { useDispatch, useSelector } from "react-redux";

export default function Page2() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const updateCounter = () => {
    dispatch({ type: "INC_COUNTER" });
  };

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { productTitle: "Product 3", price: 300, qty: 3 },
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-4 border border-primary d-flex justify-content-center align-items-center"
          style={{ height: "150px" }}
        >
          <button className="btn btn-primary">Add to Cart</button>
        </div>

        <div
          className="col-4 border border-primary d-flex justify-content-center align-items-center"
          style={{ height: "150px" }}
        >
          <button className="btn btn-primary">Add to Cart</button>
        </div>

        <div
          className="col-4 border border-primary d-flex justify-content-center align-items-center"
          style={{ height: "150px" }}
        >
          <button className="btn btn-primary">Add to Cart</button>
        </div>

        <div
          className="col-4 border border-primary d-flex justify-content-center align-items-center"
          style={{ height: "150px" }}
        >
          <button className="btn btn-primary">Add to Cart</button>
        </div>

        <div
          className="col-4 border border-primary d-flex justify-content-center align-items-center"
          style={{ height: "150px" }}
        >
          <button className="btn btn-primary">Add to Cart</button>
        </div>

        <div
          className="col-4 border border-primary d-flex justify-content-center align-items-center"
          style={{ height: "150px" }}
        >
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
