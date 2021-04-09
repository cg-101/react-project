import { useDispatch, useSelector } from "react-redux";

export default function Page2() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const updateCounter = () => {
    dispatch({ type: "INC_COUNTER" });
  };

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART" });
  };

  return (
    <div className="bg-info" style={{ height: "100vh" }}>
      PAGE2 {counter}
      <button onClick={updateCounter}>Udpate Counter</button>
      <br />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
