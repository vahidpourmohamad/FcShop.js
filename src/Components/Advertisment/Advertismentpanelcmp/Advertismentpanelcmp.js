import React from 'react'
import "./Advertismentpanelcmp.css";
export default function Advertismentpanelcmp(probs) {
    const { TextHead, Imgsrc, Textsubhead, Link,w,h } = probs;

  return (
    <div className="AdvertismentpanelcmpContainer">
      <div
        className="Advertismentpanelcmpparent"
        style={{ backgroundImage: "url(" + Imgsrc + ")" }}
      >
        <div className="shine"></div>
        <div className="Borderinner"></div>

        <div className="TextHead">{TextHead}</div>
        <div className="TextSub">{Textsubhead}</div>
      </div>
    </div>
  );
}
