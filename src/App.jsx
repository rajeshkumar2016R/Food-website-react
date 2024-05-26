import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LogInPopUp from "./components/LogInPopUp/LogInPopUp";

const App = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      {showSignUp ? <LogInPopUp setShowSignUp={setShowSignUp} /> : <></>}
      <div className="App">
        <Navbar setShowSignUp={setShowSignUp} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
