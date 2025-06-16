import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import "./Cart.css"
function Cart() {
  const { cartItems, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className='container'>
        <h2>Seu carrinho está vazio.</h2>
        <Link to="/">Voltar para a loja</Link>
      </div>
    );
  }

  return (
    <div className='cart-container container'>
      <div className=''>
        <h2>Seu Carrinho</h2>
          {cartItems.map(item => (
            <CartItem key={item.id} product={item}/>
          ))}
      </div>
      <div className="finaly-cart">
        <h3>Total:</h3>
        <h2>R$ {total.toFixed(2).replace('.', ',')}</h2>
        <button className='btn-finaly' onClick={clearCart}>Limpar Carrinho</button>
      </div>
    </div>
    
  );
}

export default Cart;
