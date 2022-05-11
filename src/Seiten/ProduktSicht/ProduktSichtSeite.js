import React from "react";
import { Fragment } from "react";
import MenuCmp from "../../Components/MenuComponent/MenuCmp";
import FooterCmp from "../../Components/FooterComponent/FooterCmp";
import PromotionProduktenKomponente from "../../Components/PromotionProducts/Promotionproductscmp";
import { useParams } from "react-router-dom";
import "./ProduktSichtSeite.css";

export default function ProduktSichtSeite() {
  const params = useParams();
  console.log("test");
  console.log(params);
  return (
    <Fragment>
      <MenuCmp />
      <div className="MenüHintergrund"></div>
      <div className="ProduktKörper">
        <div className="ProduktBilds">test</div>
        <div className="ProduktkurzehBeschreibung">test</div>
      </div>
      <PromotionProduktenKomponente />
      <FooterCmp />
    </Fragment>
  );
}
