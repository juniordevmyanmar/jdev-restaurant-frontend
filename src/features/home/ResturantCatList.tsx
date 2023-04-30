import React from 'react';

type CardProps = {
  title: string,
  image: string
}

const Card = ({ title, image }: CardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden  mx-4 my-6 flex-shrink-0 w-20">
      <img src={require('../../assets/media/japanese.jpg')} alt={title} className="h-20 w-full object-cover" />
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      title: 'japanese',
      image: '../../assets/media/japanese.jpg',
    },
    {
      title: 'western',
      image: '../../assets/media/japanese.jpg',
    },
    {
      title: 'indian',
      image: '../../assets/media/japanese.jpg',
    },
    {
      title: 'vegeterian',
      image: '../../assets/media/japanese.jpg',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default CardList;
