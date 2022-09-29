import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { Store } from '../store/store';
import Rating from './Rating';

const Product = (props) => {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existingItem = cartItems.find((x) => x._id === product._id);
    const quantity = existingItem ? existingItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.stockCount < quantity) {
      window.alert('Sorry Not enough of product in stock.');
      return;
    }
    ctxDispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`} className="no-dec">
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} reviewCount={product.reviewCount} />
        <Card.Text style={{ margin: '.5rem', padding: '.5rem' }}>
          <strong>${product.price.toFixed(2)}</strong>
        </Card.Text>
        {product.stockCount === 0 && (
          <Button variant="light" disabled>
            Out of Stock
          </Button>
        )}
        {product.stockCount >= 1 && (
          <Button
            variant="outline-success"
            onClick={() => addToCartHandler(product)}
          >
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
