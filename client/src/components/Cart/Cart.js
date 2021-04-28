import React, {useState, useEffect} from 'react';
import './Cart.css';
import {  Col, Image, Row } from 'react-bootstrap';
import exclamation from '../../assets/Group4790.svg';
import amazon from '../../assets/amazon_medium.png';
import ButtunDelete from '../../assets/Button-Delete.svg';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {giftCardsUnitAction} from '../../actions/gitCards.actions';
import {getGiftcardsState} from '../../reducer/giftCards.reducer';
import {get} from 'lodash';

function Cart() {
  const dispatch = useDispatch();
  const giftunitState = useSelector(getGiftcardsState);
  const card = giftunitState.selectedBrand;
  const payment = giftunitState.selectedCountry;
  const [rate, setRate] = useState(0);
  React.useEffect(() => {
    dispatch(giftCardsUnitAction({
        currency: giftunitState.giftunit_id,
        program_id: 1,
        giftunit_id: giftunitState.giftunit_id
    }))
}, [giftunitState.giftunit_id, dispatch])


  return (
    <>
      <Row className="m-4">
        <Col className="col-4 cart-first-column p-4 mx-2">
          <div>
            <div className="d-flex align-items-end">
              <h6 className="flex-grow-1">Total Pay</h6>
              <div className="flex-shrink-1 cart-currency p-1">
                <small>Select Payment Currency</small>
                <span className="mx-2">|</span>
                <small>{get(payment, 'unit_symbol')}</small>
              </div>
            </div>
            <h4 className="mt-2 mb-3">{get(payment, 'unit_symbol')} {get(card, 'selectedDenomination')}</h4>
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>{get(payment, 'unit_symbol')} {get(card, 'selectedDenomination')}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-5">
              <span>
                <strong>Total</strong>
              </span>
              <span>
                <strong>{get(payment, 'unit_symbol')} {get(card, 'selectedDenomination')}</strong>
              </span>
            </div>

            {/* <Col className="border 3 points-column">
            <Row>
              <Image src={exclamation} rounded />
            </Row>
            <Row>
              <p>
                You can also use your Gifti Global Points, Login or Sign up to use your Gift Global
                Points
              </p>
            </Row>
            <Row className="justify-content-center">
              <div className="p-2">
                <p className="text-center">Gifti Global Points</p>
                <p className="text-center">0</p>
              </div>
            </Row>
          </Col> */}
            <div className="d-flex flex-column justify-content-center align-content-between border border-2 ggp-parent-box rounded p-2 mb-4">
              <Image src={exclamation} rounded style={{ width: '4%', height: '4%' }} />
              <p>
                <small>
                  You can also use your Gifti Global Points, Login or Sign up to use your Gift
                  Global Points
                </small>
              </p>
              <div className="p-2 ggp-box mx-auto">
                <span className=" fs-6 text-center d-block">
                  <small>Gifti Global Points</small>
                </span>
                <span className="text-center d-block">0</span>
              </div>
            </div>

            <div className="d-flex justify-content-around">
              <Button type="button" variant="white">
                Log In
              </Button>
              <Button type="button" variant="persianGreen">
                Checkout as guest
              </Button>
            </div>
          </div>
        </Col>

        {/* Second Column of cart */}

        <Col className="col-7 p-4 mx-4">
          <div className="d-flex justify-content-between">
            <span>Cart</span>
            <span>Continue Shopping</span>
          </div>
          <div>
            {/* Rightside First Column of second col */}

            <Row className="border border-2 pt-3 pb-2 justify-content-between mb-2 rounded">
              <Col sm={3} lg={3}>
                <Image src={get(card, 'images.color.medium_rectangle')} rounded style={{ width: '100%', height: '90%' }} />
              </Col>
              <Col>
                <div className="d-flex flex-column pt-2">
                  <small>
                    <b>{get(card, 'name')}</b>
                  </small>
                  <small>Gifting for: Someone else</small>
                  <div className="d-flex justify-content-between align-items-center mt-3 mr-2">
                    <div className="cart-inc-dec-box px-1">
                      <span>-</span>
                      <span className="mx-4">1</span>
                      <span>+</span>
                      
                    </div>
                    <span>{get(payment, 'country_name')}</span>
                    <span>{get(payment, 'unit_symbol')} {get(card, 'selectedDenomination')}</span>
                    <Image src={ButtunDelete} style={{ width: '4%', height: '4%' }} />
                  </div>
                </div>
              </Col>
            </Row>

            {/* Rightside Second Column */}

            <Row className="border border-2 pt-3 pb-2 justify-content-between mb-2">
              <Col sm={3} lg={3}>
                <Image src={get(card, 'images.color.medium_rectangle')} rounded style={{ width: '100%', height: '90%' }} />
              </Col>
              <Col>
                <div className="d-flex flex-column pt-2">
                  <small>
                    <b>Amazon eGift Card</b>
                  </small>
                  <small>Gifting for: Someone else</small>
                  <div className="d-flex justify-content-between align-items-center mt-3 mr-2">
                    <div className="cart-inc-dec-box px-1">
                      <span>-</span>
                      <span className="mx-4">1</span>
                      <span>+</span>
                    </div>
                    <span>{get(payment, 'country_name')}</span>
                    <span>{get(payment, 'unit_symbol')} 500</span>
                    <Image src={ButtunDelete} style={{ width: '4%', height: '4%' }} />
                  </div>
                </div>
              </Col>
            </Row>

            {/* Rightside third Column */}

            <Row className="border border-2 pt-3 pb-2 justify-content-between mb-2">
              <Col sm={3} lg={3}>
                <Image src={amazon} rounded style={{ width: '100%', height: '90%' }} />
              </Col>
              <Col>
                <div className="d-flex flex-column pt-2">
                  <small>
                    <b>Amazon eGift Card</b>
                  </small>
                  <small>Gifting for: Someone else</small>
                  <div className="d-flex justify-content-between align-items-center mt-3 mr-2">
                    <div className="cart-inc-dec-box px-1">
                      <span>-</span>
                      <span className="mx-4">1</span>
                      <span>+</span>
                    </div>
                    <span>UAE</span>
                    <span>AED 500</span>
                    <Image src={ButtunDelete} style={{ width: '4%', height: '4%' }} />
                  </div>
                </div>
              </Col>
            </Row>
            {/* Rightside fourth Column */}

            <Row className="border border-2 pt-3 pb-2 justify-content-between mb-2">
              <Col sm={3} lg={3}>
                <Image src={amazon} rounded style={{ width: '100%', height: '90%' }} />
              </Col>
              <Col>
                <div className="d-flex flex-column pt-2">
                  <small>
                    <b>Amazon eGift Card</b>
                  </small>
                  <small>Gifting for: Someone else</small>
                  <div className="d-flex justify-content-between align-items-center mt-3 mr-2">
                    <div className="cart-inc-dec-box px-1">
                      <span>-</span>
                      <span className="mx-4">1</span>
                      <span>+</span>
                    </div>
                    <span>UAE</span>
                    <span>AED 500</span>
                    <Image src={ButtunDelete} style={{ width: '4%', height: '4%' }} />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Cart;
