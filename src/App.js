import React from "react";
import { BrowserRouter as Router,  Routes, Route, Link } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import NoPage from "./component/LandingPage/NoPage";
import OrderNow from "./component/LandingPage/OrderNow";
import ErrorPage from "./component/LandingPage/ErrorPage";
function App() {
  return (
    
    <Router>
    {/* <nav>
      <Link to="/OrderNow.js">Order Now</Link>
    </nav> */}
      <Routes>
        <Route path ="" element={<OrderNow />} />
        <Route path ="/NoPage" element={<NoPage />} />
        <Route path ="/LandingPage" element={<LandingPage />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </Router>
  );
}

export default App;
