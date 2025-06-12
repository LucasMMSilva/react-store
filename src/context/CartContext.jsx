import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            setCartItems(cartItems.map( item => item.id === product.id ? {...item, quantity: item.quantity + 1 } : item ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    }

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    }

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeFromCart(id);
        } else {
            setCartItems(cartItems.map(item => item.id === id ? {...item, quantity} : item ));
        }
    }

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);