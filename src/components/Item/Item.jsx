import React from "react";

import "./item.css";

import { ButtonChild } from "../button/Button";
import { Link } from "react-router-dom";

function Item({ id, brand, detail, imgurl, model, price }) {
  const urlDetail = `/item/${id}`;

  let productName = brand + "-" + model;

  return (
    <Link to={urlDetail}>
      <div className="item-card">
        <div className="item-card_header">
          <h2>{productName}</h2>
        </div>
        <div className="item-card_img">
          <img src={imgurl} alt="imagen"></img>
        </div>
        <div className="item-card_separator"></div>
        <div className="item-card_detail">
          <h4>$ {price}</h4>
          <small>{detail}</small>
        </div>

        <ButtonChild>Ver detalle</ButtonChild>
      </div>
    </Link >
  );
}

export default Item;
