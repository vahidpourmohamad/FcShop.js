import React from "react";
import "./AdvertismentCmp.css";
import Advertismentpanelcmp from "./Advertismentpanelcmp/Advertismentpanelcmp";
export default function AdvertismentCmp() {
  return (
    <div className="AdvertismentCmpContainer">
      <div className="AdvertismentCmpParent">
        <Advertismentpanelcmp
          w="50%"
          h="100px"
          TextHead="بهترین پیشنهاد صندلی اداری"
          Textsubhead="تخفیف عالی اینجا"
          Imgsrc="/assets/Banners/B1.jpg"
          link="#"
        />

        <Advertismentpanelcmp
          w="50%"
          h="100px"
          TextHead="بهترین پیشنهاد صندلی اداری"
          Textsubhead="تخفیف عالی اینجا"
          Imgsrc="/assets/Banners/B2.jpg"
          link="#"
        />
      </div>
    </div>
  );
}
