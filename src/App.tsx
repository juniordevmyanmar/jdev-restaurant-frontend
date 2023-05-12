import React from "react";
import { LoginPage, HomePage, ResturantsPage, DealsPage, FoodCategoryPage, RestaurantDetailPage, RegisterPage } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path="/restaurants" element={<ResturantsPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/food-category" element={<FoodCategoryPage />} />
          <Route path='/restaurants/detail' element={<RestaurantDetailPage />} />
        </Routes >
      </BrowserRouter >
    </div >
  );
}

export default App;
