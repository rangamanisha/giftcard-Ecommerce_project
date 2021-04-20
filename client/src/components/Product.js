import React  from 'react';
import GiftGlobalCard from "../assets/GiftiGlobalcard.png";

const Product = () => {
    return (
         <div className = "container">
             <div className = "row">
<div className ="col-4">
    
    <img src={GiftGlobalCard} className="mr-sm-5 imgcards mt-5" alt="GiftGlobalCard" />
   
</div>
<div className ="col-8">
    <div className = "m20">
        <h2>Amazon eGift Card</h2>
        <h5>Select Card Value (AED) </h5> 
        </div>
        <div className = "row ">
        <div className ="slabs m-3">50</div> 
        <div className ="slabs m-3">100</div> 
        <div className ="slabs m-3">200</div> 
        <div className ="slabs m-3">250</div> 
        </div>
        <div className = "m20">
        <h5>Select Card Value (AED) </h5> 
        </div>
        <div className = "row">
        <div className ="slabs m-3">
            Myself</div> 
        <div className ="slabs m-3"> Else</div> 
        </div>
        <div className = "row btnclass">
            <input type = "button">Description</input>
            <input type = "button">Terms & Conditions</input>
        </div>
        </div>erms
        
</div>
</div>


         

    )
    }
    export default Product
