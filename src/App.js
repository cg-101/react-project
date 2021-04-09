import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// SPA :: SINGLE PAGE APPLICATION
function App() {
  // UI PART
  return (
    <Router>
      <Route path="/p1" component={Page1} />
      <Route path="/p2" component={Page2} />
      <Route path="/p3" component={Page3} />
      <Route path="/" component={Page1} />
    </Router>
  );
}

function Page1() {
  return (
    <div className="bg-primary" style={{ height: "100vh" }}>
      PAGE1
    </div>
  );
}

function Page2() {
  return (
    <div className="bg-info" style={{ height: "100vh" }}>
      PAGE2
    </div>
  );
}

function Page3() {
  return (
    <div className="bg-warning" style={{ height: "100vh" }}>
      PAGE3
    </div>
  );
}

export default App;
