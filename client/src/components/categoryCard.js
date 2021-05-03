import React from "react";
import { get } from "lodash";
import classnames from "classnames";

function categoryCard({ category, nowActive }) {
  const { name, image } = category;
  const normal_square = get(image, "normal_square");
  //NOTE: create a default image to dispaly if normal image is null
  return (
    <div className={classnames(["box", { active: nowActive }])}>
      <a>
        <img src={normal_square} alt="Icon" className="rounded img-thumbnail" style={{maxWidth: '50px'}}/>
        <br />
        <p className="products_icons">{name}</p>
      </a>
    </div>
  );
}
export default categoryCard;
