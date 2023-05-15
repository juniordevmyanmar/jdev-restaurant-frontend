import React, { useState, useEffect } from "react";
import StarRating from '../features/resturants/ui/StarRating';
import MenuList from "../features/resturants/ui/MenuList";
import menuServices from "../services/menu-service";
import Navbar from "../features/common/ui/Navbar";

const images = ['resturentdetail1.jpg', 'resturentdetail2.jpg',
  'resturentdetail3.jpg', 'resturentdetail1.jpg'];

const RestaurantsPage = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [imageSrc, setImageSrc] = useState<string>(images[1])
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    menuServices.getMenus(6, 0)
      .then(response => setMenuList(response.data.data))
      .catch(error => console.error("error", error));
  }, [])

  const handleImageClick = (imgSrc: string) => {
    setImageSrc(imgSrc);
  };

  return (
    <>
      <Navbar transparent={false} />
      <div className='flex flex-col md:flex-row m-5 mt-[90px]'>
        <div className="w-auto md:w-2/5 mx-4 mb-6 md:mb-0">
          <div className='flex-1 justify-center items-center mb-10'>
            <img className="w-full h-[210px] sm:h-[370px] rounded-lg	object-center shadow-xl"
              src={require(`../assets/media/${imageSrc}`)}
              alt="Restaurant_Image" />
          </div>
          <div className="grid grid-cols-4 gap-2 mt-4">
            {images.map((image) => (
              <img key={image} className="object-center w-full h-[70px] sm:h-[100px] rounded-lg shadow-lg" src={require(`../assets/media/${image}`)} alt="Restaurant_Image" onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 mx-4">
          <h1 className='font-bold text-[#00172C] text-4xl mb-3'>Suba Sushi Restaurent</h1>
          <p className='font-normal text-[#707070] text-sm mb-6'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className='font-bold	text-[#000] text-xl mb-1'> Rating</p>
          <div className="star-rating mb-6">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return <StarRating index={index} hover={hover} setHover={setHover} rating={rating} setRating={setRating} />;
            })}
          </div>
          <p className='font-bold	text-[#000] text-xl mb-1'> Deals</p>
          <p className='font-normal	text-[#707070] text-sm mb-6'> 5 % Discount ion Wednesday Lunch </p>
          <p className='font-bold	text-[#000] text-xl mb-1'> Location</p>
          <p className='font-normal text-[#707070] text-sm mb-9'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </p>
          <button
            type="button"
            className="rounded-full bg-[#E1688C] px-2.5 py-1 font-semibold text-white shadow-lg hover:bg-[#ed6f95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E1688C] w-full h-10 text-sm"
          >
            View Menu
          </button>
        </div>

      </div >
      <MenuList menus={menuList} />
    </>
  )

}

export default RestaurantsPage