import React, { Fragment } from "react";
import "./Kommentarkomponente.css";

export default function Kommentarkomponente(props) {
  const {
    BenutzerName,
    BenutzerId,
    ProduktId,
    KommentarBody,
    createDate,
    KommentarThema,
    Stark,
    schwache,
  } = props;
  return (
    <Fragment>
      <div className="ganzKommentarKomponenteContainer Container-Center-row">
        <div className="KommentarKomponenteSchwache Container-Center-col">
          نقاط ضعف
        </div>
        <div className="KommentarKomponenteStark Container-Center-col">
          نقاط قوت
        </div>

        <div className="KommentarKomponenteContainer Container-Center-col">
          <div className="font-bold font-s TextRTl">خیلی خوب بود</div>
          <div className="Zweihintereinader">
            <div className="font-normal font-s TextRTl">{BenutzerName}</div>
            <div className="font-normal font-s TextRTl"> 25 اردیهبهست</div>
          </div>
          <div className="font-bold font-s TextRTl">
            این یک خرید بسیرا بسیار عالی بود
          </div>
          <div className="font-bold font-s TextRTl">خیلی خوب بود</div>
        </div>
      </div>
    </Fragment>
  );
}
