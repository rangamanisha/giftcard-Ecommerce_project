import React  from 'react';
import GiftGlobalCard from "../assets/GiftiGlobalcard.png";

const Product = () => {
    return (
         <div className = "container-fluid" style = {{paddingLeft:"40px"}}>
             <div className = "row">
<div className ="col-4">
    
    <img src={GiftGlobalCard} className="mr-sm-5 mt-5" alt="GiftGlobalCard" />
   
</div>
<div className ="col-8" style = {{paddingLeft:"10px"}}>
    <div className = "m20">
        <h2>Amazon eGift Card</h2>
        </div>
        <h5><b>Select Card Value (AED)</b> </h5> 
        <div className = "row ">
        <div className ="slabs m-3">50</div> 
        <div className ="slabs m-3">100</div> 
        <div className ="slabs m-3">200</div> 
        <div className ="slabs m-3">250</div> 
        </div>
        <h5><b>Gifting for</b> </h5> 
        <div className = "row">
        <div className ="giftslabs m-3">
            <input type = "radio"/>&nbsp; &nbsp;Myself</div> 
        <div className ="giftslabs m-3"> <input type = "radio"/> SomeoneElse</div> 
        </div>
        <div className = "row btnclass">
            <input type = "button"/>
            <input type = "button"/>
        </div>
        </div>
        
</div>
</div>


         

    )
    }
    export default Product
