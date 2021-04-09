import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Page1() {
  let history = useHistory();

  const goToPage3 = () => {
    // logic
    // logic
    // ... more logic
    // navigate to page2 programmatically
    history.push("/p3");
  };

  return (
    <div className="bg-primary" style={{ height: "100vh" }}>
      PAGE1
      {/**Option` */}
      <div></div>
      <Link to="/p2">
        <button>Go To Page2 Option 1</button>
      </Link>
      {/**Option2 */}
      <div></div>
      <button onClick={() => goToPage3()}>Go to Page3 Option 2</button>
    </div>
  );
}
