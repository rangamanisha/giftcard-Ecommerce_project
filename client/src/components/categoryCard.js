import React from 'react';
import {get} from 'lodash'


function categoryCard({category}){
    const {name, image} = category 
    const normal_square = get(image, 'normal_square')
    //NOTE: create a default image to dispaly if normal image is null
    return(
        <div className="box">
            <a href="#/">
              <img
                src={normal_square}
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
              <br />
              <p className="products_icons">{name}</p>
            </a>
          </div>
    )

}
export default categoryCard;