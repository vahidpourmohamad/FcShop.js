import React from "react";
import "./Testomonialcardcmp.css";
const Starsrate = (Starsrate) => {
  let content = [];
  for (var index = 0; index < Starsrate; index++) {
    content.push(<i>★</i>);
  }
  return content;
};
export default function Testomonialcardcmp(props) {
  const { id, approved, Author, Rate, Text, ProductName, date } = props;
  return (
    <div className="Dummycard">
      <div className="TestomonialcardcmpContainer">
        <div className="Testomonialcardcmpdatecontainer">
          <div className="Testomonialcardcmpproduct">{ProductName}</div>
          <div className="Testomonialcardcmpdate">تاریخ :{date}</div>
        </div>
        <div className="Testomonialcardcmpathur">{Author}</div>
        <div className="Testomonialcardcmptext">{Text}</div>
        <div className="Testomonialcardcmpstars">
          <span class="rate">{Starsrate(Rate)}</span>
        </div>
      </div>
    </div>
  );
}
