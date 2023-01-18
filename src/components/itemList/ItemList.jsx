import React from "react";
import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../Item/Item";

function ItemList(props) {
  return (
    <FlexWrapper>
      {props.products.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          detail={item.detail}
          imgurl={item.imgurl}
          brand={item.brand}
          model={item.model}
          price={item.price}
          category={item.category}
        />
      ))}
    </FlexWrapper>
  );
}

export default ItemList;
