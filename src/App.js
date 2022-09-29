import React from "react";
import { Routes, Route,} from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import NoPage from "./component/LandingPage/NoPage";
import OrderNow from "./component/LandingPage/OrderNow";
import ErrorPage from "./component/LandingPage/ErrorPage";
function App() {
  return (
    <>
      <Routes>
        <Route path ="/" element={<LandingPage />} />
        <Route path ="/LandingPage" element={<LandingPage />} />
        <Route path ="/NoPage" element={<NoPage />} />
        <Route path ="/OrderNow" element={<OrderNow />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
      </>
  );
}

export default App;
