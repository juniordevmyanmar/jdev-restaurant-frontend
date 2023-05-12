import React from 'react'


const ResturantCatListSection = () => {
  const resturantcategories = [
    {
      title: 'japanese',
      image: 'japanese.jpg',
    },
    {
      title: 'western',
      image: 'western.jpg',
    },
    {
      title: 'indian',
      image: 'indian.jpg',
    },
    {
      title: 'vegeterian',
      image: 'vegeterian.jpg',
    },
  ];
  return <>
    <div className="hidden md:flex fles-1 justify-center items-center h-36 flex-row">
      {Array.isArray(resturantcategories) && resturantcategories.map((res, index: number) => (
        <button
          key={index}
          type="submit"
          className="rounded-full bg-[#E1688C] ml-10 px-3.5 py-2.5
         text-sm font-semibold text-white shadow-sm hover:bg-[#ed6f95]
         focus-visible:outline focus-visible:outline-2
         focus-visible:outline-offset-2 focus-visible:outline-[#E1688C]
         w-40"
        >
          {res.title.charAt(0).toUpperCase() + res.title.slice(1)}
        </button>
      ))}
    </div>
    <div className="flex justify-center
overflow-x-auto no-scrollbar">
      {
        resturantcategories.map((res, index) => (
          <div className="md:hidden bg-white rounded-lg
overflow-hidden mx-1 mt-6 flex-shrink-0 w-20">
            <img src={require(`../../../assets/media/${res.image}`)} alt={res.title}
              className="h-20 w-full
object-cover" />
          </div>
        ))
      }
    </div >
  </>;
}

export default ResturantCatListSection