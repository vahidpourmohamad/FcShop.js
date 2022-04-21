import React from "react";
import "./CategorylistCmp.css";

export default function CategorylistCmp() {
  return (
    <div className="CategorylistCmpContainer">
      <div className="CategorylistCmpParent">
        <div className="CategorylistCmpHeading">
          <div className="CategorylistCmpHeadingText">دسته بندی ها</div>
          <div className="Line"></div>
        </div>
        <div className="CategorylistCmpCardContainer">
          <div className="CategorylistCmpCardContainerL">
            <div className="CategorylistCmpCardContainerLTop">
              <div className="card1">
                <div style={{ fontSize: "1rem", margin: "10px" }}>
                  مبلـــمان باغی
                </div>
                <div style={{ fontSize: "0.7rem", margin: "10px" }}>
                  همین الان بخر
                </div>
              </div>
              <div className="card2">
                {" "}
                <div style={{ fontSize: "1.5rem", margin: "10px" }}>
                  مبلـــمان باغی
                </div>
                <div style={{ fontSize: "1rem", margin: "10px" }}>
                  همین الان بخر
                </div>
              </div>
            </div>
            <div className="CategorylistCmpCardContainerLBottom">
              <div className="card4">
                <div style={{ fontSize: "1.5rem", margin: "10px" }}>
                  مبلـــمان باغی
                </div>
                <div style={{ fontSize: "1rem", margin: "10px" }}>
                  همین الان بخر
                </div>
              </div>
              <div className="card5">
                <div style={{ fontSize: "1rem", margin: "10px" }}>
                  مبلـــمان باغی
                </div>
                <div style={{ fontSize: "0.7rem", margin: "10px" }}>
                  همین الان بخر
                </div>
              </div>
            </div>
          </div>
          <div className="CategorylistCmpCardContainerR">
            <div className="card3">
              <div style={{ fontSize: "2rem", margin: "10px" }}>
                مبلـــمان باغی
              </div>
              <div style={{ fontSize: "1.5rem", margin: "10px" }}>
                {" "}
                همین الان بخر
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
