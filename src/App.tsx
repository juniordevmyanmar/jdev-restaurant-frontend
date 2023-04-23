import React from "react";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./features/common/ui/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
