import React, { useEffect } from 'react';
import Footer from './Footer';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import plusicon from '../assets/+.svg';
import minusicon from '../assets/minus.svg';
import Footer1 from './Stikyfooter';
import { useState, useRef } from 'react';
import { productDescriptionAction, termBrandAction } from '../actions/brands.action';
import GiftGiftCard from './GiftGiftCard';
import {useDispatch, useSelector} from 'react-redux';
import {getBrandsState} from '../reducer/brands.reducer';
import {giftCardsUnitAction, getConversionRateAction, getPaymentCurrencyAction} from '../actions/gitCards.actions';
import {getGiftcardsState, giftCardsAction} from '../reducer/giftCards.reducer';
import {get, map, isEmpty} from 'lodash';
import {useHistory} from 'react-router-dom';


const SelectCards = () => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    const [eventKey11, seteventkey] = useState(1);
    const [tempvisible, setTempVisible] = useState(true);
    const[count,setcount] = useState(1);
    const giftunitState = useSelector(getGiftcardsState);
    const productAndTermState = useSelector(getBrandsState);
    const card = giftunitState.selectedBrand;
    const payment = giftunitState.selectedCountry;
    const [denomination, setDenomination] = useState(0);
    const [rate, setRate] = useState(0);
    const handleSelect = (eventKey1) => {
        seteventkey(eventKey1);
    }
    const changeHandler = () =>{
        setTempVisible(!tempvisible)
    }
    const increment = () => {
       count >=5? setcount(5):setcount(count+1);
       setRate(denomination * (count+1))
    }
    const decrement = () => {
        count >1 ?setcount(count-1):setcount(1)
        setRate(denomination * (count-1))
    }
    const handleDenomination = (d) => {
        setDenomination(d);
        setRate(d);
        
    }
    useEffect(() => {
        setcount(1)

    }, [denomination])
    React.useEffect(() => {
        if(isEmpty(card)){
            history.push('/')
        }
        dispatch(productDescriptionAction({
            currency:1,
            brand_id:451
    
    
        }))
    
    }, [productAndTermState.brand_id])
    
    React.useEffect(() => {
        dispatch(termBrandAction({
            currency:1,
            id:get(card, 'id')
    
        }))
    } , [get(card, 'id')])
    
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
                <img src={get(card, 'images.color.medium_rectangle' )} alt="AmazonMedium" className="select-card-size1 ml-5 mt-5 col-4" />
                <div class="col ml-5 mt-5 col-6">
                    <p className="select-card-text-lg">{get(card, 'name')}</p>
                    <p className="select-card-text">{`Select Card Value (${get(payment, 'unit_name_short')})`}</p>
                    <div className="mt-3">
                        {map(get(card, 'denominations'), d => 
                        <Button variant="outline-info" className="mr-sm-3 select-card-button mt-2" onClick={() => handleDenomination(d)}>{d}</Button>)}
                        {/* <Button variant="outline-info" className="mr-sm-3 select-card-button">100</Button>
                        <Button variant="outline-info" className="mr-sm-3 select-card-button">250</Button>
                        <Button variant="outline-info" className="mr-sm-3 select-card-button">500</Button> */}
                    </div>
                    <p className="select-card-text mt-5">Gifting for</p>
                    <div className="row mr-sm-3 mt-3 mb-3">
                        <Form.Check type="radio" className="giftslabs" label="Myself" name="formHorizontalRadios" id="formHorizontalRadios1" onClick ={changeHandler} checked ={tempvisible == true} />
                        <Form.Check type="radio" className="giftslabs" label="Someone else" name="formHorizontalRadios" id="formHorizontalRadios2" onClick ={changeHandler}/>
                    </div>
                    {tempvisible == false ?( <GiftGiftCard />):''}
                    <div>
                        <Nav onSelect={handleSelect}>
                            <Nav.Item id="product" >
                                <Nav.Link eventKey="1" active={eventKey11 == "1"}>Description</Nav.Link>
                            </Nav.Item>
                            <Nav.Item id="product" >
                                <Nav.Link eventKey="2">Terms & Condtions</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {eventKey11 == "1" ? (
                            <div className="mt-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <p className="mt-4">{get(card, 'description')}</p>
                                {/* <p className="mt-4">Your giftee can use their Amazon.com Gift Card towards books, electronics, music, and more. The Amazon.com.au website is the place to find and discover almost anything you want to buy online at a great price.</p>
                                <p>spend hours thinking about whether to buy your recipient something for their home, their wardrobe or for their travels. Or you could open their doors of possibility by treating them to an Amazon.com.au gift card from Prezzee, which will give them a world of choice and save you a lot of time! What’s more, by choosing a Amazon.com.au eGift Card from Prezzee, your gift card is ready to send in moments after your order, so they’re absolutely perfect for last minute gifts. Choose from SMS or email delivery – all gift cards are stored and managed digitally, meaning no lost or worse still, gift cards that have expired because you’ve forgotten all about them. Your giftee will have 24/7 access to their wonderful gift right on their mobile phone – how thoughtful is that!? Amazon.com.au Gift Cards carry no fees and do not expire.</p> */}

                            </div>
                        ) : (
                            <div className="mt-4" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                                <p>{get(productAndTermState, 'terms[0].terms_text')}<br />
    </p>
                                {/* <p className="mt-4">Your giftee can use their Amazon.com Gift Card towards books, electronics, music, and more. The Amazon.com.au website is the place to find and discover almost anything you want to buy online at a great price.</p>
                                <p>spend hours thinking about whether to buy your recipient something for their home, their wardrobe or for their travels. Or you could open their doors of possibility by treating them to an Amazon.com.au gift card from Prezzee, which will give them a world of choice and save you a lot of time! What’s more, by choosing a Amazon.com.au eGift Card from Prezzee, your gift card is ready to send in moments after your order, so they’re absolutely perfect for last minute gifts. Choose from SMS or email delivery – all gift cards are stored and managed digitally, meaning no lost or worse still, gift cards that have expired because you’ve forgotten all about them. Your giftee will have 24/7 access to their wonderful gift right on their mobile phone – how thoughtful is that!? Amazon.com.au Gift Cards carry no fees and do not expire.</p> */}

                            </div>
                        )}

                    </div>


                </div>

            </div>
            <Footer1>
                <div className="row">
                    <small className="ml-sm-5 ml-33 amttext">Total Amount</small>
                    <h4 className="ml-sm-2 amttext2">{rate} {get(payment, 'unit_name_short')}</h4>
                    <div className="col mr-5">
                        <ButtonGroup className="mr-3" aria-label="Second group">
                            <Button variant="light" onClick ={decrement}> <img src={minusicon} /></Button> <Button variant="light">{count}</Button> <Button variant="light" onClick ={increment}> <img src={plusicon} /></Button>
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
