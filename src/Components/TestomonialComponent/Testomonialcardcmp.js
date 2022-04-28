import React from "react";
import "./Testomonialcardcmp.css";

export default function Testomonialcardcmp(props) {
  const { id, approved, Author, Rate, Text, ProductName, date } = props;
    return (
      <div className="Dummycard">
        <div className="TestomonialcardcmpContainer">{Text}</div>
      </div>
    );
}
