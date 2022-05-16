import userEvent from "@testing-library/user-event";
import React, { Fragment, useState } from "react";
import "./Kommentarkomponente.css";

export default function Kommentarkomponente(props) {
  const [ Wie, setWie ] = useState(0);
  const [ Abneigung, setAbneigung ] = useState(0);

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
  function KommentarKomponenteStark() {
    if (Stark.length > 0) {
      return (
        <Fragment>
          <div className="font-bold">نقاط قوت</div>
          <ul className="TextRTl">
            {Stark.map((Kommentar, Id) => (
              <li>{Kommentar}</li>
            ))}
          </ul>
        </Fragment>
      );
    } else {
      return <div></div>;
    }
  }
  function KommentarKomponenteSchwache() {
    if (schwache.length > 0) {
      return (
        <Fragment>
          <div className="font-bold">نقاط ضعف</div>
          <ul className="TextRTl">
            {schwache.map((Kommentar, Id) => (
              <li>{Kommentar}</li>
            ))}
          </ul>
        </Fragment>
      );
    } else {
      return <div></div>;
    }
  }
  function AbneigungClick(event) {
    let temp = Abneigung;
    temp += 1;
    setAbneigung(temp);
  }
  function WieClick(event) {
    let temp = Wie;
    temp += 1;
    setWie(temp);
  }
  return (
    <Fragment>
      <div className="ganzKommentarKomponenteContainer Container-Center-row">
        <div className="KommentarKomponenteSchwache Container-Center-col">
          {KommentarKomponenteSchwache()}
        </div>
        <div className="KommentarKomponenteStark Container-Center-col">
          {KommentarKomponenteStark()}
        </div>

        <div className="KommentarKomponenteContainer Container-Center-col">
          <div className="font-bold font-s TextRTl">{KommentarThema}</div>
          <div className="Zweihintereinader">
            <div className="font-normal font-s TextRTl">{BenutzerName}</div>
            <div className="font-normal font-s TextRTl">{createDate}</div>
          </div>
          <div className="font-bold font-s TextRTl">{KommentarBody}</div>
          <div className="Zweihintereinader">
            <div className="WieAbneigungContainer">
              <div>{Abneigung}</div>
              <button
                onClick={(event) => AbneigungClick(event)}
                className="fa fa-solid fa-thumbs-up fa-2x LikeKommentarbutton "
                style={{ color: "green" }}
              ></button>
            </div>
            <div className="WieAbneigungContainer">
              <div>{Wie}</div>
              <button
                onClick={(event) => WieClick(event)}
                className="fa fa-solid fa-thumbs-down fa-2x LikeKommentarbutton"
                style={{ color: "red" }}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
