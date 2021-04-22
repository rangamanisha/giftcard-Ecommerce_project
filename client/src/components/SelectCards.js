import React from 'react';
import Footer from './Footer';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import plusicon from '../assets/+.svg';
import minusicon from '../assets/minus.svg';
import radio from '../assets/radio.svg';
import AmazonMedium from "../assets/amazon_medium.png";
import Footer1 from './Stikyfooter';
import { useDispatch, useSelector } from 'react-redux';
import { productDescriptionAction, termBrandAction } from '../actions/brands.action';
import { getBrandsState } from '../reducer/brands.reducer';


const SelectCards = () => {
    const dispatch = useDispatch();
    const productAndTermState = useSelector(getBrandsState);
    React.useEffect(() => {
        dispatch(productDescriptionAction({
            currency: 1,
            program_id: 1,


        }))
        dispatch(termBrandAction({

        }))

    }, [])

    return (
        <>
            <div className="row ml-5 mr-9">
                <img src={AmazonMedium} alt="AmazonMedium" className="select-card-size ml-5 mt-5 " />
                <div class="col ml-5 mt-5">
                    <h1 className="select-card-text">Amazon eGift Card</h1>
                    <h5 className="select-card-text mt-3">Select Card Value (AED)</h5>
                    <div className="mt-3">
                        <Button variant="outline-info" className="mr-sm-3 select-card-button">50</Button>
                        <Button variant="outline-info" className="mr-sm-3 select-card-button">100</Button>
                        <Button variant="outline-info" className="mr-sm-3 select-card-button">250</Button>
                        <Button variant="outline-info" className="mr-sm-3 select-card-button">500</Button>
                    </div>
                    <h5 className="select-card-text mt-3">Gifting for</h5>
                    <div className="row mr-sm-3 mt-3 mb-3 ">
                        <Button variant="outline-info" className="mr-sm-3 select-card-button"><img src={radio} />  MySelf</Button>
                        <Button variant="outline-info" className="mr-sm-3 select-card-button"><img src={radio} />  SomeoneElse</Button>
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
                    <small className="ml-sm-5 ml-33 amttext">Total Amount</small>
                    <h4 className="ml-sm-2 amttext2">AED 250</h4>
                    <div className="col mr-5">
                        <ButtonGroup className="mr-3" aria-label="Second group">
                            <Button variant="light"> <img src={minusicon} /></Button> <Button variant="light">1</Button> <Button variant="light"> <img src={plusicon} /></Button>
                        </ButtonGroup>
                        <Button className="nav-btn mr-2 text-white">Add to cart</Button>{' '}
                        <Button className="nav-btn mr-2" variant="info">Buy Now</Button>{' '}
                    </div>
                </div>
            </Footer1>
            <Footer />

        </>

    )
}


export default SelectCards;
