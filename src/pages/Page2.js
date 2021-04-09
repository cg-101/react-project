import { useDispatch, useSelector } from "react-redux";

export default function Page2() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const updateCounter = () => {
    dispatch({ type: "INC_COUNTER" });
  };

  return (
    <div className="bg-info" style={{ height: "100vh" }}>
      PAGE2 {counter}
      <button onClick={updateCounter}>Udpate Counter</button>
    </div>
  );
}
