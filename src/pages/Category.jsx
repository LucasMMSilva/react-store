import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../services/productService';
import ProductCard from '../components/ProductCard';

function Category() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory(categoryName);
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar produtos da categoria:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!products.length) {
    return <p>Nenhum produto encontrado nesta categoria.</p>;
  }

  return (
    <div>
      <h2>Categoria: {categoryName}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Category;
