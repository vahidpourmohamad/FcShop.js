import React from "react";
import "./ProductCardCmp.css";
import { CSSTransition } from 'react-transition-group';
// src={`${process.env.PUBLIC_URL}/assets/project/bezanglogo.jpg`}
export default function ProductCardCmp(props) {
  const { Id, Pname, Price, Discount, imgone, imgtwo } = props;
  return (
    <div className="productcard">
      <div className="pimg">
              <div className="productimage1">
                
          <img
            src={`${process.env.PUBLIC_URL}/assets/Products/` + imgone}
            style={{ width: "100%" }}
          ></img>
        </div>
        <div className="productimage2">
          <img
            src={`${process.env.PUBLIC_URL}/assets/Products/` + imgtwo}
            style={{ width: "100%" }}
          ></img>
        </div>
      </div>
      <div className="productname">{Pname}</div>
      <div className="price">{Price}</div>
    </div>
  );
}
