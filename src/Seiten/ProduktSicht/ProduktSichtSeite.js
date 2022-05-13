import React from "react";
import { Fragment } from "react";
import MenuCmp from "../../Components/MenuComponent/MenuCmp";
import FooterCmp from "../../Components/FooterComponent/FooterCmp";
import PromotionProduktenKomponente from "../../Components/PromotionProducts/Promotionproductscmp";
import { useParams } from "react-router-dom";
import "./ProduktSichtSeite.css";
import { dummy } from "./dummy";

export default function ProduktSichtSeite() {
  const params = useParams();
  const {name,price,desc,colors,category,status,images}= dummy
  return (
    <Fragment>
      <MenuCmp />
      <div className="MenüHintergrund"></div>
      <div className="Container-Center">
        <div className="ProduktKörper">
          <div className="ProduktBilds">test</div>
          <div className="ProduktkurzehBeschreibung">
            <div className="font-xxl TextRTl">{name}</div>
            <div className="Zweihintereinader">
              <div className="font-m TextRTl"> قیمت: </div>

              <div className="font-m TextRTl">{price}</div>
            </div>
            <div className="font-m TextRTl">{desc}</div>
            <div className="Zweihintereinader">
              <div className="font-s TextRTl">رنگ</div>
              {colors.map((color, index) => (
                <div
                  key={index}
                  className=" color-box TextRTl  "
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
            <div className="Zweihintereinader">
              <div className="font-s TextRTl">دسته بندی</div>
              <div className="font-s TextRTl">
                <a style={{ cursor: "pointer", color: "var(--main)" }}>
                  {category}
                </a>{" "}
              </div>
            </div>
            <div className="Zweihintereinader">
              <div className="font-s TextRTl">دسترسی</div>
              <div className="font-s TextRTl">{status}</div>
            </div>
          </div>
        </div>
      </div>
      <PromotionProduktenKomponente BackgroundImage="../../assets/Banners/bg.jpg" />
      <FooterCmp />
    </Fragment>
  );
}
