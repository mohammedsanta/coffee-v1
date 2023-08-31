import React from 'react';
import './Menu.css';

const Menu = () => {
  return (
    <div className="menu" id='menu'>

    <h1 className='menu-title'>OUR MENU</h1>

    <div className="menu-lists">

      <div className="menu-lists-title">

        <p>coffe</p>

        <p>price</p>

      </div>


      <div className="menu-lists-coffee">

        <div className="menu-lists-coffee-list">

          <p className="coffee-title">Duoble Espresso</p>

          <p className="coffee-price">$99</p>

        </div>

        <div className="menu-lists-coffee-list">

          <p className="coffee-title">Americano</p>

          <p className="coffee-price">$99</p>

        </div>

          <div className="menu-lists-coffee-list">

          <p className="coffee-title">Iced Americano</p>

          <p className="coffee-price">$99</p>

        </div>

          <div className="menu-lists-coffee-list">

          <p className="coffee-title">Cappuccino</p>

          <p className="coffee-price">$99</p>

        </div>

          <div className="menu-lists-coffee-list">

          <p className="coffee-title">Flat White</p>

          <p className="coffee-price">$99</p>

        </div>

      </div>

    </div>

    </div>
  )
}

export default Menu;