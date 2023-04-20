import React from "react";
import LoginPage from "./pages/LoginPage";
import MenuList from "./features/menuList/ui/MenuList";
import menu_item_1 from "./assets/media/menu-item-1.jpg";

function App() {
  const menuList = [
    {
      id: 1,
      menu_image: menu_item_1,
      menu_name: "Egg Sushi",
    },
    {
      id: 2,
      menu_image: menu_item_1,
      menu_name: "Egg Sushi",
    },
    {
      id: 3,
      menu_image: menu_item_1,
      menu_name: "Egg Sushi",
    },
    {
      id: 4,
      menu_image: menu_item_1,
      menu_name: "Egg Sushi",
    },
    {
      id: 5,
      menu_image: menu_item_1,
      menu_name: "Egg Sushi",
    },
    {
      id: 6,
      menu_image: menu_item_1,
      menu_name: "Egg Sushi",
    },
    {
      id: 7,
      menu_image: menu_item_1,
      menu_name: "Egg Sushi",
    },
  ];
  return (
    <div>
      {/* <LoginPage /> */}
      <MenuList menus={menuList} />
    </div>
  );
}

export default App;
