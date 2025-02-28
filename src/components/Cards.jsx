import React from 'react';
import './Cards.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cards = () => {
  const bouquetData = [
    { name: 'Wedding Bouquet', image: 'https://i.etsystatic.com/16131004/r/il/666956/2287634612/il_fullxfull.2287634612_k9mz.jpg' },
    { name: 'Anniversary Bouquet', image: 'https://flowera.in/uploads/catalog/annsscM_06_6662d7406c67b.jpg' },
    { name: 'Birthday Bouquet', image: 'https://luvflowercake.com/wp-content/uploads/2023/12/2-234.webp' },
    { name: 'Get Well Soon Bouquet', image: 'https://www.petitefleursg.com/image/catalog/Blogs/What%20to%20Consider%20When%20Choosing/Get%20Well%20Soon%20Flower.jpg' },
  ];

  return (
    <div className="cards-section" id="bouquets">
      <h2>Bouquets</h2>
      <p className="bouquets-description">
        Explore our exquisite collection of bouquets, carefully crafted for every occasion. 
        From weddings to birthdays, anniversaries to get-well wishes, our bouquets are 
        designed to bring joy and beauty to your special moments.
      </p>
      <div className="cards-container">
        {bouquetData.map((bouquet, index) => (
          <div key={index} className="card">
            <img src={bouquet.image} alt={bouquet.name} />
            <h3>{bouquet.name}</h3>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;