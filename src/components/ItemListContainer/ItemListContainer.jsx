import React, { useState, useEffect } from "react";
import { getItemsByCategory } from "../../services/mockAsyncService";
import { getItems } from "../../services/mockAsyncService";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const params = useParams();
  const id = params.id;

  async function getProducts() {
    if (id === undefined) {
      try {
        let response = await getItems();
        setProducts(response);
      } catch (error) {
        alert(error);
      }
    } else {
      try {
        let response = await getItemsByCategory(id);
        setProducts(response);
      } catch (error) {
        alert(error);
      }
    }
  }

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <>
      <div>
        <ItemList products={products} />
      </div>
    </>
  );
}

export default ItemListContainer;
