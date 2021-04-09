import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

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

export default App;
