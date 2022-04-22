import React from "react";
import "./PopularProductListCom.css";
import { ProductsDummy } from "./ProductlistDummy";
import ProductCardCmp from "../ProductCardComponent/ProductCardCmp";

export default function PopularProductListCom() {
  return (
    <div className="PopularProductListComContainer">
      <div className="PopularProductListComParent">
        <div className="PopularProductListComHeading">
          <div className="PopularProductListComHeadingText">
            پر طرفدار ترین ها
          </div>
          <div className="Line"></div>
        </div>
        <div className="Productlist">
          {ProductsDummy.map((Product, Id) => (
            <ProductCardCmp
              Id={Product.Id}
              Pname={Product.Pname}
              Price={Product.Price}
              Discount={Product.Discount}
              imgone={Product.imgone}
              imgtwo={Product.imgtwo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
