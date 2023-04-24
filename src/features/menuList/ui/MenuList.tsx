type Menu = {
  id: number;
  menu_name: string;
  menu_image: string;
};
type MenuListProps = {
  menus: Menu[];
};

const MenuList = ({ menus }: MenuListProps) => {
  return (
    <div className="bg-primary text-white pt-10 pl-10">
      <h2 className="mb-6 text-xl">Available Menu</h2>
      <div className="overflow-x-scroll flex gap-x-4 sm:gap-x-10 pb-4">
        {Array.isArray(menus) &&
          menus.length > 0 &&
          menus.map((menu) => {
            return (
              <div className="menu-box" key={menu.id}>
                <div className="w-[200px] h-[200px] sm:h-[300px] mb-3">
                  <img
                    src={menu.menu_image}
                    alt={menu.menu_name}
                    className="w-full h-full object-cover rounded-lg menu-box--img"
                  />
                </div>
                <h3 className="text-sm">{menu.menu_name}</h3>
                <button className="text-xs rounded-full py-1 mt-4 px-8 bg-secondary">
                  Order
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MenuList;
