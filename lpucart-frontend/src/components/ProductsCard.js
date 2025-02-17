import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';
import '../styles/ProductsCard.css'; // Importing external CSS

const ProductsCard = (props) => {
    const { img, rating, title, price } = props;
    const [isAdded, setIsAdded] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const item = { ...props };
        dispatch(addItem(item));
        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 3000);
    };

    return (
        <div className="product-card">
            <figure>
                <img src={img} alt="item-img" className="product-image"/>
            </figure>
            <strong className="rating">⭐ {rating}</strong>
            <h4 className="title">{title}</h4>
            <h3 className="price">₹ {price.toLocaleString()}</h3>
            <button
                type="button"
                className={`btn ${isAdded ? 'added' : ''}`}
                onClick={handleAddToCart}
            >
                {isAdded ? '✓ Added' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default ProductsCard;
