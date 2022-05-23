import React, { useEffect, useState } from "react";
import DisplayProducts from "./DisplayProducts";

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/home")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-16">
        <h3 className="font-bold text-accent text-lg">OUR PRODUCTS</h3>
        <h2 className="font-bold text-secondary text-4xl">
          Your Business{" "}
          <span className="font-bolder text-primary mt-2">
            Grow & Successful
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {products.map((product) => (
            <DisplayProducts key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
