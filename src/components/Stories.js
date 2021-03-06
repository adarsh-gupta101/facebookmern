import React from "react";
import "./Stories.css";

function Stories() {
  return (
    <div className="stories">
      <div className="stories__container">
        <img
          className="stories__images"
          alt=""
          src="http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg"
        ></img>
        <h2 className="stories__username">Elon Musk</h2>
      </div>
      <div className="stories__container">
        <img
          alt=""
          className="stories__images"
          src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
        ></img>
        <h2 className="stories__username">Jeff Bezos</h2>
      </div>
      <div className="stories__container">
        <img
          className="stories__images"
          alt=""
          src="https://about.fb.com/wp-content/uploads/2019/01/mz.jpg?fit=4655%2C3102"
        ></img>
        <h2 className="stories__username">Mark</h2>
      </div>
    </div>
  );
}

export default Stories;
