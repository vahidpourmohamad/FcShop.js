import React from "react";
import "./ProductCardCmp.css";
import { CSSTransition } from "react-transition-group";
// src={`${process.env.PUBLIC_URL}/assets/project/bezanglogo.jpg`}
export default function ProductCardCmp(props) {
  const { Id, Pname, Price, Discount, imgone, imgtwo } = props;
  return (
    <div>
      <div className="productcard ">
       
              <div className="Discount ">{Discount}</div>
        <div className="ImageContainer">
          <div className="ImageFlex">
            <div className="productimage1">
              <img
                src={`${process.env.PUBLIC_URL}/assets/Products/` + imgone}
                style={{ width: "100%" }}
              ></img>
            </div>
            <div className="productimage2">
              <img
                className="test"
                src={`${process.env.PUBLIC_URL}/assets/Products/` + imgtwo}
                style={{ width: "100%" }}
              ></img>
            </div>
          </div>
        </div>
        <div className="productname">{Pname}</div>
        <div className="price">تومان {Price} </div>
      </div>
    </div>
  );
}
