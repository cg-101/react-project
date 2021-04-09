import { useSelector } from "react-redux";

export default function Page3() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="bg-warning" style={{ height: "100vh" }}>
      <h3>Display All the Cart Items </h3>

      {cart.map((item, index) => (
        <div key={index}>
          {item.productTitle} {item.qty} {item.price}
        </div>
      ))}
    </div>
  );
}
