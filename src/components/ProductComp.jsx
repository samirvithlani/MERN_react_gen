import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, addToCart } from "../redux/ProductSlice";

export const ProductComp = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={() => {
              dispatch(addToCart({ id: 1, name: "iphone 14", price: 15000 }));
            }}
            className="btn btn-primary"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={() => {
              dispatch(addToCart({ id: 2, name: "iphone 15", price: 16000 }));
            }}
            className="btn btn-primary"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
