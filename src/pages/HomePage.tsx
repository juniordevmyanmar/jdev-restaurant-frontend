import React from "react";
import ResturantCatList from "../features/home/ui/ResturantCatListSection";
import MenuList from "../features/resturants/ui/MenuList";
import menuItem1 from "../assets/media/menu-item-1.jpg";
import restaurant1 from "../assets/media/restaurant1.jpg";
import Navbar from "../features/common/ui/Navbar";
import RestaurantList from "../features/home/ui/RestaurantList";

const HomePage = () => {
  const menus = [
    { id: 1, menu_image: menuItem1, menu_name: "Egg suhsi" },
    { id: 2, menu_image: menuItem1, menu_name: "Egg suhsi" },
    { id: 3, menu_image: menuItem1, menu_name: "Egg suhsi" },
    { id: 4, menu_image: menuItem1, menu_name: "Egg suhsi" },
    { id: 5, menu_image: menuItem1, menu_name: "Egg suhsi" },
  ];

  const restaurants = [
    {
      id: 1,
      restaurant_image: restaurant1,
      restaurant_name: "Egg suhsi",
      description: "Some text",
    },
    {
      id: 2,
      restaurant_image: restaurant1,
      restaurant_name: "Egg suhsi",
      description: "Some text",
    },
    {
      id: 3,
      restaurant_image: restaurant1,
      restaurant_name: "Egg suhsi",
      description: "Some text",
    },
    {
      id: 4,
      restaurant_image: restaurant1,
      restaurant_name: "Egg suhsi",
      description: "Some text",
    },
    {
      id: 5,
      restaurant_image: restaurant1,
      restaurant_name: "Egg suhsi",
      description: "Some text",
    },
  ];

  return (
    <main className="h-full bg-primary">
      <Navbar />
      <header className="bg-[url(../assets/media/home.jpg)] bg-cover sm:bg-center bg-no-repeat h-[500px] rounded-b-lg">
        <div
          className="w-full h-full
             bg-blue-600/30 backdrop-brightness-50 bg-white/10"
        >
          <div className="max-w-xl mx-auto h-full flex flex-col justify-center items-center gap-10 text-white text-center px-2">
            <h1 className=" text-4xl w-[270px] capitalize tracking-wider text-center">
              Discover your cravings
            </h1>
            <input
              type="search"
              title="search your cravings"
              className="outline-none w-full p-2 text-input font-light rounded-md placeholder:font-light"
              placeholder="Your Cravings are one character away"
            />
          </div>
        </div>
      </header>
      <ResturantCatList />
      <section className="section-menulist pl-10 pt-10">
        <h2 className="mb-6 text-xl text-white">Today Deals</h2>
        <RestaurantList restaurants={restaurants} />
      </section>
      <section className="section-menulist pl-10 pt-10">
        <h2 className="mb-6 text-xl text-white">Recommended restaurants</h2>
        <RestaurantList restaurants={restaurants} />
      </section>
      <section className="bg-white p-10 md:p-20">
        <h3 className="text-center text-[1.5rem] md:text-[2.5rem] text-secondary font-medium">
          Plethora of Foods with unbelievable <br /> Deals in your town
        </h3>
      </section>
    </main>
  );
};

export default HomePage;
