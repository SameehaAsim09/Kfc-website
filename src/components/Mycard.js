import React, { useState } from "react";
import "../App.css";
import { CardsData } from "../data/products";

const Mycard = ( {incrementCart, data}) => {
  return (
    <>
    <div className="col">
      <div className="card my-card" style={{ width: "18rem" }}>
        <img 
          src={data.image}
          className="card-img-top image"
          alt="..."
        />
        <div className="card-body">
          <div className="main">
            <h5 className="card-title">{data.title} </h5>
            <h4 className="card-text" >${data.price}</h4>
          </div>
          <p className="card-text">{data.desc}</p>
          <button 
            onClick={incrementCart}
            className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Mycard;
