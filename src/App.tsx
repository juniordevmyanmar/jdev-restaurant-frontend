import React from "react";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./features/common/ui/Navbar";
import HomePage from "./pages/HomePage";
import RegisterPage from './pages/RegisterPage';
import RestaurantDetailPage from "./pages/RestaurantDetailPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/restaurants/detail' element={<RestaurantDetailPage />}/>
        </Routes>
      </BrowserRouter>
      </div>

  );
}

export default App;
