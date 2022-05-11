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
            <div className="font-m">دسترسی</div>
            <div className="font-xxl">{name}</div>

            <div className="font-m">{price}</div>

            <div className="font-l TextRTl">{desc}</div>
            <div className="Zweihintereinader">
              <div className="font-s">رنگ</div>
              <div className="font-s">رنگ</div>
            </div>
            <div className="font-s">دسته بندی</div>
          </div>
        </div>
      </div>
      <PromotionProduktenKomponente BackgroundImage="../../assets/Banners/bg.jpg" />
      <FooterCmp />
    </Fragment>
  );
}
