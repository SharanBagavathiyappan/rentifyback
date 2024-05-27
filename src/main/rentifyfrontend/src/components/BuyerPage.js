import React, { useState } from 'react';
import Navbar from './Navbar';
import img1 from "../assets/bg1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";

// Product data array
// Product data array
const products = [
    {
      id: 1,
      image: img1,
      name: 'Stunning Oceanview Studio Full Kitchen',
      price: '1,500',
      rating: [1, 1, 1, 1, 0],
      seller: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890'
      }
    },
    {
      id: 2,
      image: img2,
      name: '2BR 2BA Waterfront Villa 10min to Beach and Market Common',
      price: '50.00',
      rating: [1, 1, 1, 1, 0],
      seller: {
        name: 'Jane Smith',
        email: 'jane@example.com',
        phone: '987-654-3210'
      }
    },
    {
      id: 3,
      image: img3,
      name: 'Ocean Dream Vacation',
      price: '50.00',
      rating: [1, 1, 1, 1, 0],
      seller: {
        name: 'Emily Johnson',
        email: 'emily@example.com',
        phone: '456-789-0123'
      }
    },
    {
      id: 4,
      image: img4,
      name: 'Red Printed T-shirt',
      price: '50.00',
      rating: [1, 1, 1, 1, 0],
      seller: {
        name: 'Michael Williams',
        email: 'michael@example.com',
        phone: '789-012-3456'
      }
    },
    {
      id: 5,
      image: img5,
      name: 'Blue Printed T-shirt',
      price: '60.00',
      rating: [1, 1, 1, 0, 0],
      seller: {
        name: 'Sarah Brown',
        email: 'sarah@example.com',
        phone: '012-345-6789'
      }
    },
   
  ];
  

const ProductCard = ({ product, onInterestClick }) => {
  const handleInterestClick = () => {
    onInterestClick(product.seller);
  };

  return (
    <div className='w-[350px] h-[400px] bg-slate-100 shadow-xl shadow-slate-700 flex flex-col items-center justify-around p-2 rounded-[15px] mt-3'>
      <img className='w-full h-[200px]' src={product.image} alt={product.name} />
      <span className='text-[20px] font-bold'>{product.name}</span>
      <div className="rating">
        {product.rating.map((star, index) => (
          <i key={index} className={`fa fa-star${star ? '' : '-o'}`}></i>
        ))}
      </div>
      <div><i className="fa-solid fa-indian-rupee-sign"></i><span className='ml-2 text-[18px] font-semibold'>{product.price}</span></div>
      <button className='w-[150px] h-[50px] flex items-center justify-center bg-green-500 text-white font-bold rounded-md' onClick={handleInterestClick}>I'm Interested</button>
    </div>
  );
};

const BuyerPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedSeller, setSelectedSeller] = useState(null);

  const handleFilter = () => {
   
  };

  const handleInterestClick = (seller) => {
    setSelectedSeller(seller);
  };

  return (
    <>
      <div className='w-full h-auto flex flex-col p-3'>
        <div className='text-[20px] font-bold'>BuyerPage</div>
        {/* <Navbar/> */}
        <div className='w-full h-auto flex items-baseline justify-evenly flex-wrap mt-2 p-5'>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onInterestClick={handleInterestClick} />
          ))}
        </div>
      </div>
      {selectedSeller && (
        <div className="seller-details">
          <h2>Seller Details</h2>
          <p>Name: {selectedSeller.name}</p>
          <p>Email: {selectedSeller.email}</p>
          <p>Phone: {selectedSeller.phone}</p>
          {/* Add more seller details */}
        </div>
      )}
    </>
  );
};

export default BuyerPage;
