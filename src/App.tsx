import React from "react";
import { LoginScreen, HomScreen, ResturantsScreen, DealsScreen, FoodCategoryScreen } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./features/common/ui/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/resturants" element={<ResturantsScreen />} />
          <Route path="/deals" element={<DealsScreen />} />
          <Route path="/food-category" element={<FoodCategoryScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
