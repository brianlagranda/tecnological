import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/mockAsyncService";
import ItemCount from "../itemCount/ItemCount";
import "./itemdetail.css";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  const params = useParams()
  const id = params.id;

  let productName = product.brand + " - " + product.model;

  useEffect(() => {
    getSingleItem(id)
      .then((respuesta) => {
        setProduct(respuesta);
      })
      .catch((error) => alert(`Error: ${error}`));
  }, []);

  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={product.imgurl} alt={productName} />
      </div>
      <div className="card-detail_detail">
        <h1>{productName}</h1>
        <h2 className="priceTag">$ {product.price}</h2>
        <small>{product.detail}</small>
      </div>
      <ItemCount start={0} stock={product.stock} />
    </div>
  );
}

export default ItemDetailContainer;
