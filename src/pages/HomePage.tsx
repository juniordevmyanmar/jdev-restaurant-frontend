import MenuList from "../features/menuList/ui/MenuList";
import menuItem1 from "../assets/media/menu-item-1.jpg";
import Navbar from "../features/common/ui/Navbar";

const HomePage = () => {
  const menus = [
    { id: 1, menu_image: menuItem1, menu_name: "Egg suhsi" },
    { id: 2, menu_image: menuItem1, menu_name: "Egg suhsi" },
    { id: 3, menu_image: menuItem1, menu_name: "Egg suhsi" },
    { id: 4, menu_image: menuItem1, menu_name: "Egg suhsi" },
    { id: 5, menu_image: menuItem1, menu_name: "Egg suhsi" },
  ];

  return (
    <main className="h-full bg-primary">
      <Navbar />
      <header className="bg-[url(../assets/media/home.jpg)] bg-cover sm:bg-center bg-no-repeat h-[500px]">
        <div
          className="w-full h-full
             bg-blue-600/30 backdrop-brightness-50 bg-white/10"
        >
          <div className="sm:w-[400px] mx-auto h-full flex flex-col justify-center items-center gap-10 text-white text-center px-2">
            <h1 className="text-4xl w-3/4 capitalize tracking-wider">
              Discover your cravings
            </h1>
            <input
              type="search"
              className="w-full outline-none p-2 cursor-pointer text-input font-light rounded-sm placeholder:font-light"
              placeholder="Your Cravings are one character away"
            />
          </div>
        </div>
      </header>
      <section className="section-menulist">
        <MenuList menus={menus} />
      </section>
      <section className="section-menulist">
        <MenuList menus={menus} />
      </section>
    </main>
  );
};

export default HomePage;
