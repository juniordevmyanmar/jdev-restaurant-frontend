import React, {useState,useEffect} from "react";
import MenuList from "../features/menuList/ui/MenuList";
import menuServices from "../services/menu-service";

export default function RestaurantDetailPage() {

    const [menuList,setMenuList] = useState([]);

    useEffect(() => {
        menuServices.getMenus(6,0)
        .then(response => setMenuList(response.data.data))
        .catch(error => console.error("error", error));
    },[])
  return (
    <>
      <MenuList menus={menuList}/>
    </>
  );

}
