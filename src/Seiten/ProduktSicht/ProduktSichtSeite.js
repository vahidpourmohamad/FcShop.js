import React from "react";
import { Fragment } from "react";
import MenuCmp from "../../Components/MenuComponent/MenuCmp";
import FooterCmp from "../../Components/FooterComponent/FooterCmp";
import PromotionProduktenKomponente from "../../Components/PromotionProducts/Promotionproductscmp";
import { useParams } from "react-router-dom";
import "./ProduktSichtSeite.css";
import { dummy } from "./dummy";
import { useState } from "react";

export default function ProduktSichtSeite() {
  const [ProduktNummer, setProduktNummer] = useState(1);
  const [ProduktBildIndex, setProduktBildIndex] = useState(0);
  function BildAuswählen(event, index) {
    setProduktBildIndex(index);
  }
  function EinkaufkarteClick(event, inc) {
    let temp = ProduktNummer;
    temp += inc;
    if (temp < 2) {
      temp = 1;
    }
    setProduktNummer(temp);
  }
  const params = useParams();
  const { name, price, desc, colors, category, status, images } = dummy;
  return (
    <Fragment>
      <MenuCmp />
      <div className="MenüHintergrund"></div>
      <div className="Container-Center">
        <div className="ProduktKörper">
          <div className="ProduktBilds">
            <div className="ProduktHauptbild">
              <img
                onClick={(event) => BildAuswählen(event, 0)}
                src={`${process.env.PUBLIC_URL}/assets/Products/${images[ProduktBildIndex]}`}
                alt=""
              ></img>
            </div>
            <div className="ProduktBildergalerie">
              {images.map((image, index) => (
                <img
                  onClick={(event) => BildAuswählen(event, index)}
                  src={`${process.env.PUBLIC_URL}/assets/Products/${image}`}
                  alt=""
                ></img>
              ))}
              {/* <img
                onClick={(event) => BildAuswählen(event, 1)}
                src={`${process.env.PUBLIC_URL}/assets/Products/${images[1]}`}
                alt=""
              ></img>
              <img
                onClick={(event) => BildAuswählen(event, 2)}
                src={`${process.env.PUBLIC_URL}/assets/Products/${images[0]}`}
                alt=""
              ></img>
              <img
                onClick={(event) => BildAuswählen(event, 3)}
                src={`${process.env.PUBLIC_URL}/assets/Products/${images[0]}`}
                alt=""
              ></img> */}
            </div>
          </div>
          <div className="ProduktkurzehBeschreibung">
            <div className="font-xxl TextRTl">{name}</div>
            <div className="Zweihintereinader">
              <div className="font-m TextRTl font-bold"> قیمت: </div>

              <div className="font-m TextRTl">{price}</div>
            </div>
            <div className="font-m TextRTl">{desc}</div>
            <div className="Zweihintereinader">
              <div className="font-s TextRTl font-bold">رنگ</div>
              {colors.map((color, index) => (
                <div
                  key={index}
                  className=" color-box TextRTl  "
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
            <div className="Zweihintereinader">
              <div className="font-s TextRTl font-bold">دسته بندی</div>
              <div className="font-s TextRTl">
                <a style={{ cursor: "pointer", color: "var(--main)" }}>
                  {category}
                </a>{" "}
              </div>
            </div>
            <div className="Zweihintereinader">
              <div className="font-s TextRTl font-bold">دسترسی</div>
              <div className="font-s TextRTl">{status}</div>
            </div>

            <div className="Produkt-sicht-Button-Box">
              <a className="Produkt-sicht-Teilen-Button Produkt-sicht-Teilen-Button-h font-bold font-xs">
                یه اشتراک گذاری
              </a>
              <a className="Produkt-sicht-Einkaufskarte-Button Produkt-sicht-Teilen-Button-h font-bold font-m">
                سبد خرید
              </a>
              <div className="Produkt-sicht-Nummer-Spinner">
                <button
                  onClick={(event) => EinkaufkarteClick(event, 1)}
                  className="Produkt-sicht-button  font-xl font-bold"
                >
                  +
                </button>
                <input
                  className="Produkt-sicht-Eingang-Einkaufskarte"
                  type="text"
                  value={ProduktNummer}
                ></input>
                <button
                  onClick={(event) => EinkaufkarteClick(event, -1)}
                  className="Produkt-sicht-button font-xxl font-bold"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="ProduktBeschreibung"></div>
        <div className="ProduktVorschlagen"></div>
        <div className="Kommentaren"></div>
      </div>
      <PromotionProduktenKomponente BackgroundImage="../../assets/Banners/bg.jpg" />
      <FooterCmp />
    </Fragment>
  );
}
