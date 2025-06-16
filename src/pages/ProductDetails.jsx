import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';
import { useCart } from '../context/CartContext';
import "./ProductDetails.css";
import ProductList from '../components/ProductList';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
        window.scrollTo({ top: 0 });
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className='container'>Carregando...</p>;
  }

  if (!product) {
    return <p className='container'>Produto não encontrado.</p>;
  }

  return (
    <div className='container'>
      <div className='product-detail'>
        <div className="product-image">
          <img src={product.image} alt={product.title}/>
        </div>
        <div className="product-content">
          <h2 className='product-title'>{product.title}</h2>
          <p className='product-description'>{product.description}</p>
          <p className='product-discount'><span className='original-price'>R${(product.price*1.2).toFixed(2)}</span> 20% off</p>
          <p className='product-price'>Preço: R$ {product.price.toFixed(2).replace('.', ',')}</p>
          <p className='product-installments'>Ou em até 12x de R${(product.price/12).toFixed(2)} sem juros</p>
          <button className="add-to-cart" onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
        </div>
      </div>
      <h3 className='orthers-products-title'>Produtos relacionados</h3>
      <ProductList category={ product.category } currentId={ product.id }/>
    </div>
    
  );
}

export default ProductDetails;
