import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();

        console.log(data.products);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>Name: {product.title}</h2>
            <p>Price: {product.price}</p>

            <Link to={`/products/${product.id}`}>
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;