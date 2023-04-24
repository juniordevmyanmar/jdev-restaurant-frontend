import MenuList from "../features/menuList/ui/MenuList";
import menuItem1 from "../assets/media/menu-item-1.jpg";

const HomePage = () => {
  const menus = [{ id: 1, menu_image: menuItem1, menu_name: "Egg suhsi" }];
  return <MenuList menus={menus} />;
};

export default HomePage;
