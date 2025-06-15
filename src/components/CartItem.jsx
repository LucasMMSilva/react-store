import './CartItem.css';
import { useCart } from '../context/CartContext';

function CartItem({ product }) {
    const { removeFromCart, updateQuantity } = useCart();

    const itemDecrement = () => {
        if ( product.quantity <= 1 ) {
            removeFromCart(product.id);
        } else {
            updateQuantity(product.id, product.quantity - 1);
        }
    }
    const itemIncrement = () => {
        updateQuantity(product.id, product.quantity + 1);
    }

    return (
        <div className="cart-item">
            <div className="cart-item-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="cart-item-content">
                <h2 className="cart-item-title">{product.title}</h2>
                <p className="cart-item-price">R$ {product.price.toFixed(2)}</p>
                <div className="qty-itens">
                    <button className="cart-qty-btn" onClick={itemDecrement}>-</button>
                    <p className="cart-item-qty">{product.quantity}</p>
                    <button className="cart-qty-btn" onClick={itemIncrement}>+</button>
                    <a onClick={() => removeFromCart(product.id)} className="btn-remove-item-to-cart">Remover item do carrinho</a>
                </div>
            </div>
        </div>
    )
}

export default CartItem;