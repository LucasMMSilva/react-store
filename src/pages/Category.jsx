import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../services/productService';
import ProductList from '../components/ProductList';

function Category() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory(category);
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar produtos da categoria:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return <p className='container'>Carregando...</p>;
  }

  if (!products.length) {
    return <p className='container'>Nenhum produto encontrado nesta categoria.</p>;
  }

  return (
    <div className='container'>
      <h2>Categoria: {category}</h2>
      <ProductList category={category} />
    </div>
  );
}

export default Category;
