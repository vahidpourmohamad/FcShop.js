import React from "react";
import "./SelectedProductListCmp.css";
import { useState } from 'react'
import { ProductsDummy } from "../PopularProductListComponent/ProductlistDummy";
import ProductCardCmp from "../ProductCardComponent/ProductCardCmp";
import { ProductsDummyTwo } from "../PopularProductListComponent/ProductlistDummy";

export default function SelectedProductListCmp() {
    const [ProductList, setProductList] = useState(ProductsDummy);

    const handleClick = (param) => {
        if (param == 1) {
           
            setProductList(ProductsDummy);
        }
        if (param == 2) {
           
            setProductList(ProductsDummyTwo);
         }
        if (param == 3) {
           
            setProductList(ProductsDummy);
         }

  };
  return (
    <div className="SelectedProductListCmpContainer">
      <div className="SelectedProductListCmpParent">
        <div className="SelectedProductListCmpHeading">
          <div className="SelectedProductListCmpHeadingText">برگزیده ها</div>
          <div className="Line"></div>
        </div>
        <div className="SelectedProductListCmpMenuLink">
          <button  onClick={() => handleClick(1)}>
            جدید
          </button>
          <button  onClick={() => handleClick(2)}>
            پرفروش ترین
          </button>
          <button  onClick={() => handleClick(3)}>
            محبوب ترین
          </button>
        </div>
        <div className="Productlist">
          {ProductList.map((Product, Id) => (
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
