import { useEffect, useState } from "react";
// import data from "../../Data/products.json";
import "./products.css";

const Products = ({ setProduct }) => {
  // const [products, setProducts] = useState(data.products);
  const [products, setProducts] = useState([]);

  const productURL = "http://localhost:3001/api/products";

  useEffect(() => {
    fetch(productURL)
      .then((res) => res.json())
      .then((jsonData) => setProducts(jsonData.products));
  }, []);

  const handleDelete = (product) => {
    const newProducts = products.filter((prod) => prod.name !== product.name);
    setProducts(newProducts);
    setProduct(product.contain_articles);
  };

  return (
    <div className="Products">
      <h1> Products </h1>
      <div className="product">
        {products.map((product, index) => (
          <div key={product.name}>
            <div className="prod">
              <h2>{product.name}</h2>
              <h3>{product.price} Kr.</h3>
              {product.contain_articles.map((art) => (
                <div className="id_amount_box" key={art.art_id}>
                  <h4>id: {art.art_id} </h4>
                  <h4>amount_of: {art.amount_of}</h4>
                </div>
              ))}
              <button className="btn" onClick={() => handleDelete(product)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
