import React, { useEffect } from 'react';
import Footer from './Footer';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import plusicon from '../assets/+.svg';
import minusicon from '../assets/minus.svg';
import Footer1 from './Stikyfooter';
import { useState, useRef } from 'react';
import { descriptionBrandAction, termBrandAction } from '../actions/brands.action';
import GiftGiftCard from './GiftGiftCard';
import { useDispatch, useSelector } from 'react-redux';
import { getBrandsState } from '../reducer/brands.reducer';
import { giftCardsUnitAction, getConversionRateAction, getPaymentCurrencyAction } from '../actions/gitCards.actions';
import { getGiftcardsState, giftCardsAction } from '../reducer/giftCards.reducer';
import { get, map, isEmpty, isUndefined } from 'lodash';
import { useHistory } from 'react-router-dom';
import { cartTotalCountAction, cartItemAction } from '../actions/cart.actions';
import { getCartItemsState } from '../reducer/cart.reducer';


const SelectCards = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [eventKey11, seteventkey] = useState(1);
    const [tempvisible, setTempVisible] = useState(true);
    const [count, setcount] = useState(0);
    const giftunitState = useSelector(getGiftcardsState);
    const productAndTermState = useSelector(getBrandsState);
    const cartState = useSelector(getCartItemsState);
    const card = giftunitState.selectedBrand;
    const payment = giftunitState.selectedCountry;
    // const carddata = 
    // const [denomination, setDenomination] = useState(0);

    const [rate, setRate] = useState(0);
    const handleSelect = (eventKey1) => {
        seteventkey(eventKey1);
    }
    // const addtocart=()=>{

    // }
    const changeHandler = () => {
        setTempVisible(!tempvisible)
    }
    const increment = () => {
        count >= 5 ? setcount(5) : setcount(count + 1);
        const inc = parseInt(card.selectedDenomination * (count + 1))
        setRate(inc)
    }
    const decrement = () => {
        count > 1 ? setcount(count - 1) : setcount(1)
        const dec = parseInt(card.selectedDenomination * (count - 1))
        debugger
        setRate(dec)
    }
    const handleDenomination = (d) => {
        dispatch(giftCardsAction.selectDenomination(d));
        setRate(d);

    }

    useEffect(() => {
        setcount(1)

    }, [card.denominations])
    // React.useEffect(() => {
    //     if(isEmpty(card)){
    //         history.push('/')
    //     }
    //     dispatch(productDescriptionAction({
    //         currency:1,
    //         brand_id:451


    //     }))

    // }, [productAndTermState.brand_id])

    React.useEffect(() => {
        dispatch(termBrandAction({
            currency: 1,
            id: get(card, 'id')

        }))
        // const unSubscribe = () => {
        //     dispatch(giftCardsAction.removeSelectedCard())
        // }
        // return unSubscribe
    }, [get(card, 'id')])

    React.useEffect(() => {
        dispatch(descriptionBrandAction({
            currency: 1,
            program_id: 1,
            id: get(card, 'id'),
            image_size: "medium_rectangle",
            image_type: "Color",


        }))
    }, [get(card, 'id')])

    React.useEffect(() => {
        dispatch(getConversionRateAction({
            brand_id: 451
        }))

    }, [])

    React.useEffect(() => {
        dispatch(getPaymentCurrencyAction({
            currency: 1,
            brand_id: 451
        }))

    }, [dispatch])

    React.useEffect(() => {
        dispatch(giftCardsUnitAction({
            currency: giftunitState.giftunit_id,
            program_id: 1,
            giftunit_id: giftunitState.giftunit_id
        }))
    }, [giftunitState.giftunit_id, dispatch])

    const handleCart = () => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken === 'undefined') {
            return history.push('auth/login')

        }
        else {
            dispatch(cartItemAction({
                "brand_id": card.id,
                "quantity": 1,
                "currency": "AED",
                "giftcard_value": 2000,
                "card_value_aed": 2000,
                "isforself": true,
                "country_id": payment.id

            }))
        }
    }



    return (

        <>
            <div className="row">
                <img src={get(card, 'images.color.medium_rectangle')} alt="AmazonMedium" className="select-card-size1 ml-5 mt-5 col-4" />
                <div class="col mt-5 col-6">
                    <p className="select-card-text-lg">{get(card, 'name')}</p>
                    <p className="select-card-text">{`Select Card Value (${get(payment, 'unit_name_short')})`}</p>
                    <div className="mt-3">
                        {map(get(productAndTermState, 'description.brand.denominations'), d =>
                            <Button variant="outline-info" className="mr-sm-3 select-card-button mt-2" onClick={() => handleDenomination(d)}>{d}</Button>)}
                        {/* <Button variant="outline-info" className="mr-sm-3 select-card-button">100</Button>
                        <Button variant="outline-info" className="mr-sm-3 select-card-button">250</Button>
                        <Button variant="outline-info" className="mr-sm-3 select-card-button">500</Button> */}
                    </div>
                    <p className="select-card-text mt-5">Gifting for</p>
                    <div className="row mr-sm-3 mt-3 mb-3">
                        <Form.Check type="radio" className="giftslabs" label="Myself" name="formHorizontalRadios" id="formHorizontalRadios1" onClick={changeHandler} checked={tempvisible == true} />
                        <Form.Check type="radio" className="giftslabs" label="Someone else" name="formHorizontalRadios" id="formHorizontalRadios2" onClick={changeHandler} />
                    </div>
                    {tempvisible == false ? (<GiftGiftCard />) : ''}
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
                                <p className="mt-4">{get(productAndTermState, 'description.brand.product_description')}</p>
                            </div>
                        ) : (
                            <div className="mt-4" id="contact" role="tabpanel" aria-labelledby="contact-tab">

                                <p>{get(productAndTermState, 'terms[0].terms_text')}<br />
                                </p>

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
                            <Button variant="light" onClick={decrement}> <img src={minusicon} /></Button> <Button variant="light">{count}</Button> <Button variant="light" onClick={increment}> <img src={plusicon} /></Button>
                        </ButtonGroup>
                        <Button className="nav-btn mr-2 text-white" onClick={handleCart}>Add to cart</Button>{' '}
                        <Button className="nav-btn mr-2" onClick={() => history.push('cart')} variant="info">Buy Now</Button>{' '}
                    </div>
                </div>
            </Footer1>


        </>

    )
}


export default SelectCards;
