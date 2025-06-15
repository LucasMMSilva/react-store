import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

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
    <div className='container'>
      <h2>Seu Carrinho</h2>
        {cartItems.map(item => (
          <CartItem key={item.id} product={item}/>
        ))}
      <h3>Total: R$ {total.toFixed(2).replace('.', ',')}</h3>
      <button onClick={clearCart}>Limpar Carrinho</button>
    </div>
  );
}

export default Cart;
