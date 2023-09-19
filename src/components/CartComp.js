import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/ProductSlice";

export const CartComp = () => {
  //get data from redux store
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <div>
      {state.products.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <h1>{item.price}</h1>
            <button onClick={() => dispatch(removeFromCart(item))}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
