import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    const { id, image, title, description, price } = product;
    return (
        <div className='card'>
            <Link to={`/product/${id}`}>    
                <img src={image} alt={title} className='card-image' />
                <div className='card-content'>
                    <h3 className='card-title'>{title}</h3>
                    <p className='card-description'>{description}</p>
                    <p className='card-discount'><span className='original-price'>R${(price*1.2).toFixed(2)}</span> 20% off</p>
                    <p className='card-price'>R${price.toFixed(2)}</p>
                    <p className='card-installments'>Ou em até 12x de R${(price/12).toFixed(2)} sem juros</p>
                </div>
            </Link>    
        </div>
    )
}

export default ProductCard;