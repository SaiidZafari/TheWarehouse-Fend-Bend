import { useState } from "react";
import Warehouse from "./Pages/Warehouse/Warehouse";
import Products from "./Pages/Products/Products";
import "./App.css";

function App() {
  const [product, setProduct] = useState({});

  return (
    <div className="App">
      <Warehouse product={product} />
      <Products setProduct={setProduct} />
    </div>
  );
}

export default App;
