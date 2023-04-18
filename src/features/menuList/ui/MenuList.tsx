import "./index.css";
import menu_item_1 from "../../../assets/media/menu-item-1.jpg";
const MenuList = () => {
  return (
    <div className="menulist-container text-white pt-10 pl-10">
      <h2 className="mb-6 text-xl">Available Menu</h2>
      <div className="overflow-x-scroll flex gap-x-4 sm:gap-x-10 pb-4">
        <div className="menu-box">
          <div className="w-[200px] h-[200px] sm:h-[300px] mb-3">
            <img
              src={menu_item_1}
              alt=""
              className="w-full h-full object-cover rounded-lg menu-box--img"
            />
          </div>
          <h3 className="text-sm">Egg Sushi</h3>
          <button className="text-xs rounded-full py-1 mt-4 px-8 btn-order">
            Order
          </button>
        </div>
        <div className="menu-box">
          <div className="w-[200px] h-[200px] sm:h-[300px] mb-3">
            <img
              src={menu_item_1}
              alt=""
              className="w-full h-full object-cover rounded-lg menu-box--img"
            />
          </div>
          <h3 className="text-sm">Egg Sushi</h3>
          <button className="text-xs rounded-full py-1 mt-4 px-8 btn-order">
            Order
          </button>
        </div>
        <div className="menu-box">
          <div className="w-[200px] h-[200px] sm:h-[300px] mb-3">
            <img
              src={menu_item_1}
              alt=""
              className="w-full h-full object-cover rounded-lg menu-box--img"
            />
          </div>
          <h3 className="text-sm">Egg Sushi</h3>
          <button className="text-xs rounded-full py-1 mt-4 px-8 btn-order">
            Order
          </button>
        </div>
        <div className="menu-box">
          <div className="w-[200px] h-[200px] sm:h-[300px] mb-3">
            <img
              src={menu_item_1}
              alt=""
              className="w-full h-full object-cover rounded-lg menu-box--img"
            />
          </div>
          <h3 className="text-sm">Egg Sushi</h3>
          <button className="text-xs rounded-full py-1 mt-4 px-8 btn-order">
            Order
          </button>
        </div>
        <div className="menu-box">
          <div className="w-[200px] h-[200px] sm:h-[300px] mb-3">
            <img
              src={menu_item_1}
              alt=""
              className="w-full h-full object-cover rounded-lg menu-box--img"
            />
          </div>
          <h3 className="text-sm">Egg Sushi</h3>
          <button className="text-xs rounded-full py-1 mt-4 px-8 btn-order">
            Order
          </button>
        </div>
        <div className="menu-box">
          <div className="w-[200px] h-[200px] sm:h-[300px] mb-3">
            <img
              src={menu_item_1}
              alt=""
              className="w-full h-full object-cover rounded-lg menu-box--img"
            />
          </div>
          <h3 className="text-sm">Egg Sushi</h3>
          <button className="text-xs rounded-full py-1 mt-4 px-8 btn-order">
            Order
          </button>
        </div>
        <div className="menu-box">
          <div className="w-[200px] h-[200px] sm:h-[300px] mb-3">
            <img
              src={menu_item_1}
              alt=""
              className="w-full h-full object-cover rounded-lg menu-box--img"
            />
          </div>
          <h3 className="text-sm">Egg Sushi</h3>
          <button className="text-xs rounded-full py-1 mt-4 px-8 btn-order">
            Order
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default MenuList;
