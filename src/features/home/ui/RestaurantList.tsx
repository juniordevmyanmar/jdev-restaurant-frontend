type Restaurant = {
  id: number;
  restaurant_name: string;
  restaurant_image: string;
  description: string;
};
type RestaurantProps = {
  restaurants: Restaurant[];
};

const RestaurantList = ({ restaurants }: RestaurantProps) => {
  return (
    <div className="bg-primary text-white ">
      <div className="overflow-x-auto flex gap-x-4 sm:gap-x-10 pb-4">
        {Array.isArray(restaurants) &&
          restaurants.length > 0 &&
          restaurants.map((restaurant) => {
            return (
              <div className="menu-box" key={restaurant.id}>
                <div className="w-[200px] h-[200px] sm:h-[300px] mb-3">
                  <img
                    src={restaurant.restaurant_image}
                    alt={restaurant.restaurant_name}
                    className="w-full h-full object-cover rounded-lg menu-box--img"
                  />
                </div>
                <h3 className="text-sm">{restaurant.description}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RestaurantList;
