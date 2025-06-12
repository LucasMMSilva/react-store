import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';
import './Navbar.css'
import axios from 'axios';

function Navbar() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <div className="navbar">
        <NavLink to="/" className="">
          <img src="/img/logo.png" alt="Logo" />
        </NavLink>

        <div className="cart">
          <NavLink to="/cart">
            <div className='title-cart'>Carrinho</div>
            <div className='totalItems'>
              {totalItems}
            </div>
          </NavLink>
        </div>
      </div>
      <div className='secundary-navbar'>

      </div>
    </>
  );
}

export default Navbar;