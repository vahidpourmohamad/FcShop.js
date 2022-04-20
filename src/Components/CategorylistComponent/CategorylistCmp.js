import React from "react";
import "./CategorylistCmp.css";
import Imgcat1 from "../../Assets/Images/cat1.jpg";
import Imgcat2 from "../../Assets/Images/cat2.jpg";
import Imgcat3 from "../../Assets/Images/cat3.jpg";
import Imgcat4 from "../../Assets/Images/cat4.jpg";
import Imgcat5 from "../../Assets/Images/cat5.jpg";
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
              <div className="card" style={{ width: "250px", height: "230px" }}>
                بخرید
                <img
                  src={Imgcat1}
                  style={{
                    display: "flex",
                    maxWidth: "80%",
                    maxHeight: "80%",
                    alignSelf: "end",
                  }}
                ></img>
              </div>
              <div className="card" style={{ width: "350px", height: "230px" }}>
                test
              </div>
            </div>
            <div className="CategorylistCmpCardContainerLBottom">
              <div className="card" style={{ width: "400px", height: "230px" }}>
                test
              </div>
              <div className="card" style={{ width: "200px", height: "230px" }}>
                test
              </div>
            </div>
          </div>
          <div className="CategorylistCmpCardContainerR">
            {" "}
            <div className="card" style={{ width: "400px", height: "500px" }}>
              test
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
