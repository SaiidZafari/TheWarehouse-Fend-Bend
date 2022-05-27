import { useEffect, useState } from "react";
// import data from "../../Data/inventory.json";
import "./warehouse.css";

const Warehouse = ({ product }) => {

  const [dataIn, setDataIn] = useState([]);

  const inventoryURL = "http://localhost:3001/api/inventory";

 useEffect(() => {
   fetch(inventoryURL)
     .then((res) => res.json())
     .then((jsonData) => setDataIn(jsonData.inventory));
 }, [product]);


  const [leg, setLeg] = useState(0);
  const [screw, setScrew] = useState(0);
  const [seat, setSeat] = useState(0);
  const [tableTop, settableTop] = useState(0);

  
  useEffect(() => {
    if (product) {
      if (product[0]?.art_id === "1") {
        setLeg(Number(product[0]?.amount_of) + leg);
      } else setLeg(0);
      if (product[1]?.art_id === "2") {
        setScrew(Number(product[1]?.amount_of) + screw);
      } else setScrew(0);

      if (product[2]?.art_id === "3") {
        setSeat(Number(product[2]?.amount_of) + seat);
      }
      if (product[2]?.art_id === "4") {
        settableTop(Number(product[2]?.amount_of) + tableTop);
      }
    }
  }, [product]);

  return (
    <div className="Warehouse">
      <h1> Warehouse </h1>
      <div className="inventory">
        {dataIn.map((art) => (
          <div className="cartBox" key={art.name}>
            <h2>{art.name}</h2>
            <div className="idStockBox">
              <h5 className="idBox">id: {art.art_id}</h5>
              <h5>
                stock:{" "}
                {product
                  ? art.art_id === "1"
                    ? parseInt(art.stock) - leg
                    : art.art_id === "2"
                    ? parseInt(art.stock) - screw
                    : art.art_id === "3"
                    ? parseInt(art.stock) - seat
                    : art.art_id === "4"
                    ? parseInt(art.stock) - tableTop
                    : 0
                  : 0}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Warehouse;
