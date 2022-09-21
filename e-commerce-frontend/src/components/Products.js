import React from 'react';

import data from '../data';

const Products = () => {
  return (
    <main>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <a href={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </a>
            <div className="product-info">
              <a href={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </a>
              <p>
                <strong>${product.price.toFixed(2)}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
