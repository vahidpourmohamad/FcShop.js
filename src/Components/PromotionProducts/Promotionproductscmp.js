import React from "react";
import "./Promotionproductscmp.css";
import { ProductsDummy } from "../PopularProductListComponent/ProductlistDummy";
import ProductCardCmp from "../ProductCardComponent/ProductCardCmp";
export default function Promotionproductscmp(props) {
    const { BackgroundImage } = props;
  return (
    <div className="PromotionproductcmpContainer" style={{backgroundImage:"url("+BackgroundImage+")"}}>
      <div className="PromotionproductcmpParent">
        <div className="PromotionproductcmpHeading">
          <div className="PromotionproductcmpHeadingText">محصولات پرامتیاز</div>
          <div className="Line"></div>
        </div>
        <div className="PromotionproductcmpProductlist">
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
