import React, { Fragment } from "react";
import "./Produkteigenschaften.css";

export default function Produkteigenschaften(props) {
  const { features } = props;
 
  return (
    <Fragment>
      <div className="ProdukteigenschaftenContainer">
        {features.map((feature, Id) => (
          <div className="ProdukteigenschaftenArtikel">
            <div className="font-bold font-m TextRTl">
              {feature.Featurename}
            </div>

            <div className="font-m TextRTl">{feature.value}</div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
