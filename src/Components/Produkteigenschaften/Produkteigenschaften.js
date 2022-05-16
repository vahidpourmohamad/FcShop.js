import React, { Fragment } from 'react'
import "./Produkteigenschaften.css"

export default function Produkteigenschaften(props) {
    const { features } = props;
    console.log(features);
    return (
      <Fragment>
        <div className="ProdukteigenschaftenContainer">
          {features.map((feature, Id) => (
              <div>{feature.value}</div>
          ))}
        </div>
      </Fragment>
    );
}
