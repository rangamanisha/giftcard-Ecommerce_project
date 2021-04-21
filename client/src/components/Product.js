import React  from 'react';
import GiftGlobalCard from "../assets/GiftiGlobalcard.png";
import ReactBootstrap, {
    Card,
    Button,
    Col,
    Image,
    Container,
    Row,
    Form,
  } from "react-bootstrap";

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
        <Button variant="outline-secondary m10">50</Button>
        <Button variant="outline-secondary m10">100</Button>
        <Button variant="outline-secondary m10">200</Button>
        <Button variant="outline-secondary m10">250</Button>
        </div>
        <h5><b>Gifting for</b> </h5> 
      
        <div className = "row">
        <Button variant="outline-secondary m10" > <input type = "radio"/> Myself</Button> 
        <Button variant="outline-secondary m10" > <input type = "radio"/> SomeoneElse</Button> 
        </div>
        <div className = "row btnclass">
        <Button variant="outline-secondary"style ={{border:"none"}}>Description</Button>
        <Button variant="outline-secondary" style = {{border:"none"}}>Terms & Condition</Button>
        </div>
        <div className = "row">
            <div className ="productdescription">
            Amazon.com.au Gift Cards is the perfect gift of choice! It gives your recipient the ability to choose from millions of items sold on Amazon.com.au – from electronics to fashion to appliances and household items. Your giftee can use their Amazon.com Gift Card towards books, electronics, music, and more. The Amazon.com.au website is the place to find and discover almost anything you want to buy online at a great price. Amazon.com.au Gift Cards is the perfect way to give your recipient exactly what they’re hoping for - even if you don’t know what it is. Whatever the occasion - From last minute birthday gifts, birthdays, anniversaries, thank you, or rewards for your staff - the Amazon.com.au gift card is perfect for every personality and age range. Amazon.com.au digital gift cards can also be added to your balance and used as per your convenience. Your giftee can shop anywhere, any time and choose a delivery option to suit them. You could spend hours thinking about whether to buy your recipient something for their home, their wardrobe or for their travels. Or you could open their doors of possibility by treating them to an Amazon.com.au gift card from Prezzee, which will give them a world of choice and save you a lot of time! What’s more, by choosing a Amazon.com.au eGift Card from Prezzee, your gift card is ready to send in moments after your order, so they’re absolutely perfect for last minute gifts. Choose from SMS or email delivery – all gift cards are stored and managed digitally, meaning no lost or worse still, gift cards that have expired because you’ve forgotten all about them. Your giftee will have 24/7 access to their wonderful gift right on their mobile phone – how thoughtful is that!? Amazon.com.au Gift Cards carry no fees and do not expire.
           </div>
        </div>
      
        </div>
</div>
</div>



         

    )
    }
    export default Product
