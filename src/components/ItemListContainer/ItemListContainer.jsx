import React, { useState, useEffect } from "react";
import { getItemsByCategory } from "../../services/firebase";
import { getItems } from "../../services/firebase";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";

function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const params = useParams();
  const id = params.id;

  async function getProducts() {
    try {
      setLoading(true);
      const res = id === undefined ? await getItems() : await getItemsByCategory(id);
      setProducts(res);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <ItemList products={products} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
