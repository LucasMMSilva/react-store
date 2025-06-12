import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div>
        <h2>Seu carrinho está vazio.</h2>
        <Link to="/">Voltar para a loja</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Seu Carrinho</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} width="50" />
            <strong>{item.title}</strong>
            <p>R$ {item.price.toFixed(2).replace('.', ',')}</p>
            <p>
              Quantidade:
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
              />
            </p>
            <button onClick={() => removeFromCart(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
      <h3>Total: R$ {total.toFixed(2).replace('.', ',')}</h3>
      <button onClick={clearCart}>Limpar Carrinho</button>
    </div>
  );
}

export default Cart;
