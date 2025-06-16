import { useEffect, useState } from "react";
import { getAllProducts, getProductsByCategory } from "../services/productService";
import ProductCard from "./ProductCard";
import './ProductList.css';

function ProductList({ category, currentId }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProducts([]);
        const fetchProducts = async ()=> {
            try {
                if (!category) {
                    const data = await getAllProducts();
                    setProducts(data);
                } else {
                    const data = await getProductsByCategory(category);
                    const newData = data.filter((product) => product.id !== currentId);
                    setProducts(newData);
                }
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    },[category, currentId]);

    if (loading) {
        return <p className="container">Aguarde um momento...</p>;
    }

    return (
        <div className="product-list">
            {products.length === 0 ? (
                <p>Mil desculpas, nenhum produto foi encontrado.</p>
            ) : (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            )}
        </div>
    );
}

export default ProductList;
 