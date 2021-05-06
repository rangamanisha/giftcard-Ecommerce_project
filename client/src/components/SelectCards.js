import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
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
import { get, map, isEmpty, isUndefined, filter, assign, isEqual } from 'lodash';
import { useHistory } from 'react-router-dom';
import { getCartItemsState, cartAction } from '../reducer/cart.reducer';
import {cartItemAction, fetchItemsByCartAction} from '../actions/cart.actions';
import {getAuthState} from '../reducer/auth.reducer'


const SelectCards = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector(getAuthState)
    const [eventKey11, seteventkey] = useState(1);
    const [tempvisible, setTempVisible] = useState(true);
    const giftunitState = useSelector(getGiftcardsState);
    const productAndTermState = useSelector(getBrandsState);
    const cartState = useSelector(getCartItemsState);
    let country = get(giftunitState, 'selectedCountry')
    const card = giftunitState.selectedBrand;
    const payment = giftunitState.selectedCountry;
    const count = get(cartState, 'count')
    const [rate, setRate] = useState(0);
    const [gift_to, setGiftTo] = useState("myself")
    const selectedDenomination = get(card, 'selectedDenomination')
    const handleSelect = (eventKey1) => {
        seteventkey(eventKey1);
    }
    const handleGiftTo = (e) => {
        setTempVisible(e.target.value === 'myself' ? true : false)
        setGiftTo(e.target.value)
    }
    const increment = () => {
        if (count >= 5) {
            return null
        }
        else {
            dispatch(cartAction.increaseCount())
            const inc = parseFloat(card.selectedDenomination * (count + 1))
            setRate(inc)
        }
    }
    
    const decrement = () => {
        if (count == 0) {
            return null
        }
        else {
            dispatch(cartAction.decreaseCount())
            const dec = parseFloat(card.selectedDenomination * (count - 1))
            setRate(dec)
        }
    }
    const handleDenomination = (d) => {
        dispatch(giftCardsAction.selectDenomination(parseFloat(d)));
        setRate(d);

    }
    React.useEffect(() => {
        if (isEmpty(card) || isUndefined(card)) {
            history.push('/')
        }
        dispatch(cartAction.setCountZero())

    }, [get(card, 'id'), get(card, 'selectedDenomination'), dispatch])

    React.useEffect(() => {
        dispatch(termBrandAction({
            currency: '1',
            id: get(card, 'id')
        }))
        dispatch(descriptionBrandAction({
            currency: '1',
            program_id: 1,
            id: get(card, 'id'),
            image_size: "medium_rectangle",
            image_type: "Color",
        }))
    }, [get(card, 'id')])

    React.useEffect(() => {
        dispatch(getPaymentCurrencyAction({
            currency: 1,
            brand_id: 451
        }))
        if(country.id && country.id) {
        dispatch(getConversionRateAction({
            brand_id: get(country, 'id')
        }))
        }

    }, [dispatch, country])

    React.useEffect(() => {
        dispatch(giftCardsUnitAction({
            currency: giftunitState.giftunit_id,
            program_id: 1,
            giftunit_id: giftunitState.giftunit_id
        }))
    }, [giftunitState.giftunit_id, dispatch])

    const saveTocart = () => {
        // const itemInCart = filter(get(cartState, 'lineItems'), { id: get(card, 'id') })[0]
        // const selectedBrand = assign({}, card, { quantity: count, giftingTo: gift_to})
        // if (!isEqual(itemInCart, selectedBrand) && !isEmpty(itemInCart)) {
        //     dispatch(
        //         dispatch(cartAction.updateLineItem(selectedBrand))
        //     )
        // }
        // else if (isEqual(itemInCart, selectedBrand)) {
        //     return null
        // }

         
            dispatch(cartAction.saveItemsToCart(assign({}, card, { quantity: count, giftingTo: gift_to })))
        

    }
    
    return (
        <>
            <div className="row">
                <img src={get(card, 'images.color.medium_rectangle')} alt="AmazonMedium" className="select-card-size1 ml-5 mt-5 col-4" />
                <div class="col mt-5 col-6">
                    <p className="select-card-text-lg">{get(card, 'name')}</p>
                    <p className="select-card-text">{`Select Card Value (${get(payment, 'unit_name_short')})`}</p>
                    <div className="mt-3">
                        {map(get(giftunitState, 'selectedBrand.denominations'), d =>
                            <Button variant="outline-info" className="mr-sm-3 select-card-button mt-2" onClick={() => handleDenomination(d)}>{parseFloat(d)}</Button>)}
                    </div>
                    <p className="select-card-text mt-5">Gifting for</p>
                    <div className="row mr-sm-3 mt-3 mb-3">
                        <Form.Check value="myself" type="radio" className="giftslabs" label="Myself" name="formHorizontalRadios" id="formHorizontalRadios1" checked={gift_to === "myself"} onClick={e => handleGiftTo(e)}/>
                        <Form.Check value="someone else" type="radio" className="giftslabs" label="Someone else" name="formHorizontalRadios" id="formHorizontalRadios2" checked={gift_to === "someone else"} onClick={e => handleGiftTo(e)}/>
                    </div>
                    {tempvisible === false ? (<GiftGiftCard />) : ''}
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
                            <Button variant="light" disabled={isUndefined(selectedDenomination)} onClick={decrement}> <img src={minusicon} /></Button> <Button disabled variant="light">{count}</Button> <Button variant="light" disabled={isUndefined(selectedDenomination)} onClick={increment}> <img src={plusicon} /></Button>
                        </ButtonGroup>
                        <Button className="nav-btn mr-2 text-white" onClick={saveTocart}>Add to cart</Button>{' '}
                        <Button className="nav-btn mr-2" onClick={() => {saveTocart();history.push('cart')}} variant="info">Buy Now</Button>{' '}
                    </div>
                </div>
            </Footer1>


        </>

    )
}


export default SelectCards;
