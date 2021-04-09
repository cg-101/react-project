import { useSelector } from "react-redux";

export default function Page3() {
  const cart = useSelector((state) => state.cart);
  const profile = useSelector((state) => state.profile);

  return (
    <div className="bg-warning" style={{ height: "100vh" }}>
      <h4>Display All the Cart Items :: {profile.username}</h4>

      {cart.map((item, index) => (
        <div key={index}>
          {item.productTitle} {item.qty} {item.price}
        </div>
      ))}
    </div>
  );
}
