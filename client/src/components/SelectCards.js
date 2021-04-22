import React from 'react';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AmazonMedium from "../assets/amazon_medium.png";
import Footer1 from './Stikyfooter';
import {useDispatch, useSelector} from 'react-redux';
import {productDescriptionAction, termBrandAction} from '../actions/brands.action';
import {getBrandsState} from '../reducer/brands.reducer';
import {giftCardsUnitAction, getConversionRateAction, getPaymentCurrencyAction} from '../actions/gitCards.actions';
import {getGiftcardsState} from '../reducer/giftCards.reducer';



const SelectCards = () => {
const dispatch = useDispatch();
const giftunitState = useSelector(getGiftcardsState);
const productAndTermState = useSelector(getBrandsState);
React.useEffect(() => {
    dispatch(productDescriptionAction({
        currency:1,
        brand_id:451


    }))

}, [productAndTermState.brand_id])

React.useEffect(() => {
    dispatch(termBrandAction({
        currency:1,
        brand_id:451

    }))
} , [productAndTermState.brand_id])

React.useEffect(() => {
    dispatch(getConversionRateAction({
        brand_id:451
    }))

}, [])

React.useEffect(() => {
    dispatch(getPaymentCurrencyAction({
        currency:1,
        brand_id: 451
    }))

}, [])

React.useEffect(() => {
    dispatch(giftCardsUnitAction({
        currency: giftunitState.giftunit_id,
        program_id: 1,
        giftunit_id: giftunitState.giftunit_id
    }))
}, [giftunitState.giftunit_id])
 
    return (
        <>
            <div className="row">
                <img src={AmazonMedium} alt="AmazonMedium" className="select-card-size ml-5 mt-5 col-4" />
                <div class="col ml-5 mt-5 col-6">
                    <h1 className="select-card-text">Amazon eGift Card </h1>
                    <h5 className="select-card-text mt-3">Select Card Value (AED)</h5>
                    <div className="mt-3">
                        <Button variant="outline-info" className="mr-sm-3 select-card-button">50</Button>
                        <Button variant="outline-info" className="mr-sm-3 select-card-button">100</Button>
                        <Button variant="outline-info" className="mr-sm-3 select-card-button">250</Button>
                        <Button variant="outline-info" className="mr-sm-3 select-card-button">500</Button>
                    </div>
                    <h5 className="select-card-text mt-3">Gifting for</h5>
                    <div className="row mr-sm-3 mt-3 ">
                        <Form.Check type="radio" className="giftslabs" label="Myself" name="formHorizontalRadios" id="formHorizontalRadios1" />
                        <Form.Check type="radio" className="giftslabs" label="Someone else" name="formHorizontalRadios" id="formHorizontalRadios2" />
                    </div>
                    <div>
                        <div className="nav">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">

                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Description</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Terms & Conditions</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                            </div>
                        </div>
                        <div id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <p>Amazon.com.au Gift Cards is the perfect gift of choice! It gives your recipient the ability to choose from millions of items sold on<br />
                        Amazon.com.au – from electronics to fashion to appliances and household items.</p>
                            <p className="mt-4">Your giftee can use their Amazon.com Gift Card towards books, electronics, music, and more. The Amazon.com.au website is the place to find and discover almost anything you want to buy online at a great price.</p>
                            <p>spend hours thinking about whether to buy your recipient something for their home, their wardrobe or for their travels. Or you could open their doors of possibility by treating them to an Amazon.com.au gift card from Prezzee, which will give them a world of choice and save you a lot of time! What’s more, by choosing a Amazon.com.au eGift Card from Prezzee, your gift card is ready to send in moments after your order, so they’re absolutely perfect for last minute gifts. Choose from SMS or email delivery – all gift cards are stored and managed digitally, meaning no lost or worse still, gift cards that have expired because you’ve forgotten all about them. Your giftee will have 24/7 access to their wonderful gift right on their mobile phone – how thoughtful is that!? Amazon.com.au Gift Cards carry no fees and do not expire.</p>

                        </div>
                        <div id="contact" role="tabpanel" aria-labelledby="contact-tab">

                            <p>Amazon.com.au Gift Cards is the perfect gift of choice! It gives your recipient the ability to choose from millions of items sold on<br />
                            Amazon.com.au – from electronics to fashion to appliances and household items.</p>
                            <p className="mt-4">Your giftee can use their Amazon.com Gift Card towards books, electronics, music, and more. The Amazon.com.au website is the place to find and discover almost anything you want to buy online at a great price.</p>
                            <p>spend hours thinking about whether to buy your recipient something for their home, their wardrobe or for their travels. Or you could open their doors of possibility by treating them to an Amazon.com.au gift card from Prezzee, which will give them a world of choice and save you a lot of time! What’s more, by choosing a Amazon.com.au eGift Card from Prezzee, your gift card is ready to send in moments after your order, so they’re absolutely perfect for last minute gifts. Choose from SMS or email delivery – all gift cards are stored and managed digitally, meaning no lost or worse still, gift cards that have expired because you’ve forgotten all about them. Your giftee will have 24/7 access to their wonderful gift right on their mobile phone – how thoughtful is that!? Amazon.com.au Gift Cards carry no fees and do not expire.</p>

                        </div></div>


                </div>

            </div>
            <Footer1>
                <div className="row">
                    <small className="mr-sm-5 ml-33">Total Amount</small>
                    <h4 className="mr-sm-5 select-card-text">AED 250</h4>
                    <div class="row">
                        <div className="custom-input">
                            <div class="input-group">
                                <div className="d-flex">
                                    <span class="input-group-btn">
                                        <Button variant="outline-info" className="plusbtn"> +</Button>
                                    </span>
                                    <input type="text" name="quant[1]" class="plusbtn" value="1" min="1" max="10" />
                                    <span class="input-group-btn">
                                        <Button variant="outline-info" className="plusbtn">-</Button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <Button variant="info" className="mr-sm-5 selects-card-button-a">Add to cart</Button>
                        <Button variant="primary" className="mr-sm-5 selects-card-button-b">Buy Now</Button>
                    </div>
                </div>
            </Footer1>
            <Footer />

        </>

    )
}


export default SelectCards;