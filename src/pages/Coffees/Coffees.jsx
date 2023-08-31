import React from 'react';
import './Coffees.css';
import coffeesData from './coffeesData';


const renderCoffee = coffeesData.map((coffee) => (

  <div className="products-boxs-box" key={coffee.id}>

    <img className='products-boxs-box-img' src={coffee.pic} alt="" />

    <div className="products-boxs-box-info">

      <h3 className="products-boxs-box-info-title">{coffee.type}</h3>

      <p className="products-boxs-box-info-description">{coffee.description}</p>

    </div>

  </div>

))

const Coffees = () => {
  return (
    <div className="products" id='coffees'>

    <h1 className='products-title'>Types of Coffee</h1>

    <div className="products-boxs">

      {renderCoffee}

    </div>

     </div>
  )
}

export default Coffees