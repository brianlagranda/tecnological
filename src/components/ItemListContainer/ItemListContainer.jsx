import React, { useState, useEffect } from "react";
import getItems, { getItemsByCategory } from "../../services/mockAsyncService";
import ItemList from "../itemList/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);

  let idcategory = undefined;

  //con async await - try catch
  async function getProducts() {
    if (!idcategory) {
      try {
        let response = await getItems();
        setProducts(response);
      } catch (error) {
        alert(error);
      }
    } else {
      let response = await getItemsByCategory(idcategory);
      setProducts(response);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div>
        <ItemList products={products} />
      </div>
    </>
  );
}

export default ItemListContainer;
