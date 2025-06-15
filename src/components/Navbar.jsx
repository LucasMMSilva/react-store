import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';
import './Navbar.css'
import { getAllCategories } from '../services/productService';

function Navbar() {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error("Algo deu errado");
      }
    }
    fetchCategories();
  },[]);

  return (
    <>
      <div className="navbar">
        <NavLink to="/">
          <img className="logo" src="/img/logo.png" alt="Logo" />
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
        {categories.map((category) => (
          <NavLink className="category" key={category} to={`/category/${category}`}>{
            category.charAt(0).toUpperCase() + category.slice(1)
          }</NavLink>
        ))}
      </div>
    </>
  );
}

export default Navbar;