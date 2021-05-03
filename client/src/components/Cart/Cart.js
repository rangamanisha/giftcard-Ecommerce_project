import React, { useState, useEffect, useCallback } from 'react';
import './Cart.css';
import { get, isEmpty, map, assign, reduce, remove, isUndefined } from 'lodash';
import { Col, Image, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { getAuthState } from '../../reducer/auth.reducer';
import { getConversionRateAction, giftCardsUnitAction } from '../../actions/gitCards.actions';
import { getGiftcardsState, giftCardsAction } from '../../reducer/giftCards.reducer';
import { getRewardPointsState } from '../../reducer/rewardpoints.reducer';
import { getRewardPointsAction } from '../../actions/rewardpoints.actions';
import { cartAction, getCartItemsState } from '../../reducer/cart.reducer';

import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { Dropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { RiArrowDownSLine } from 'react-icons/ri';
import exclamation from '../../assets/Group4790.svg';
import ButtunDelete from '../../assets/Button-Delete.svg';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

function Cart() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}>
      {children}
      <RiArrowDownSLine />
    </a>
  ));
  CustomToggle.displayName = 'CustomToggle';

  const dispatch = useDispatch();
  const history = useHistory();
  const authState = useSelector(getAuthState);
  const isAuthenticated = get(authState, 'isAuthenticated')
  const cartState = useSelector(getCartItemsState);
  const rewardState = useSelector(getRewardPointsState);
  const giftunitState = useSelector(getGiftcardsState);
  const giftGlobalPoints = rewardState.rewardpoints;
  const card = giftunitState.selectedBrand;
  const payment = giftunitState.selectedCountry;
  const currencies = get(giftunitState, 'paymentCurrency.currencies');
  const selectedCurrency = get(giftunitState, 'selectedCurrency')
  const [currencyIndex, setCurrencyIndex] = useState(0);
  const conversionRate = get(giftunitState, 'conversion.currency_exchange_rate');
  const lineItems = get(cartState, 'lineItems');
  const [rate, setRate] = useState(0);



  // React.useEffect(() => {
  //   if(isEmpty(lineItems)){
  //     history.push('/')
  //   }
  // }, [lineItems])
  React.useEffect(() => {
    dispatch(getRewardPointsAction())
  }, [rewardState, dispatch])
  React.useEffect(() => {
    dispatch(giftCardsUnitAction({
      currency: giftunitState.giftunit_id,
      program_id: 1,
      giftunit_id: giftunitState.giftunit_id
    }))
  }, [giftunitState.giftunit_id, dispatch])
  React.useEffect(() => {
    let id = get(selectedCurrency, 'id')
    dispatch(getConversionRateAction(id))
  }, [get(selectedCurrency, 'id')])
  // const handleUpdate = (item, operation) => {
  //   let {quantity} = item
  //   switch (operation) {
  //     case "add":
  //       {
  //         if (quantity === 5) {
  //           return null;
  //         }
  //         else {
  //           let new_quantity= quantity+1;
  //           let _item = item
  //           remove(_item, 'quantity')
  //           dispatch(cartAction.updateLineItem(assign(_item, {quantity: new_quantity})))
  //         }
  //       }
  //     case "sub":
  //       {
  //         if(quantity==0){
  //           return null
  //         }
  //         else {
  //           let new_quantity = quantity-1;
  //           let _item = item
  //           remove(_item, 'quantity')
  //           dispatch(cartAction.updateLineItem(assign(_item, {quantity: new_quantity})))
  //         }
  //       }

  //     default:
  //       return null
  //   }
  // }
  const handleUpdate = (item, operation) => {
    let _item = item;
    let { quantity } = _item;
    if (operation === 'add') {
      if (quantity >= 5) {
        return null;
      }
      else {
        _item.quantity = quantity + 1;
        dispatch(cartAction.updateLineItem(assign({}, _item)))
      }
    }
    else if (operation === 'sub') {
      if (quantity <= 0) {
        return null
      }
      else {
        _item.quantity = quantity - 1;
        dispatch(cartAction.updateLineItem(assign({}, _item)))
      }
    }
    if (quantity <= 0) {
      dispatch(cartAction.updateLineItem(item.quantity = quantity + 1))
      const inc = parseFloat(card.selectedDenomination * (quantity + 1))
      setRate(inc)
    }
    else {
      dispatch(cartAction.updateLineItem(item.quantity = quantity - 1))
      const dec = parseFloat(card.selectedDenomination * (quantity - 1))
      setRate(dec)
    }
  }


  const handleRemove = item => {

    dispatch(cartAction.removeLineItem(item))
  }
  const lineValue = reduce(lineItems, (sum, i) => {
    return sum + (i.selectedDenomination * i.quantity)
  }, 0)
  const handleChangeCurreny = currency => {
    setCurrencyIndex(parseInt(currency))
    dispatch(giftCardsAction.setSelectCurreny(currencies[parseInt(currency)]))
  }
  const convertedAmount = React.useCallback((selectedCurrency) => {
    if (!isUndefined(conversionRate) && conversionRate !== 0) {
      return lineValue * conversionRate;

    }
    else {
      return lineValue
    }


  })
  const currencyShort = React.useCallback((selectedCurrency) => {
    if (!isUndefined(giftunitState.selectedCountry)) {
      return get(giftunitState, 'selectedCurrency.unit_name_short')
    }
    else {
      return get(payment, 'unit_symbol')
    }
  })
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
                <Dropdown className="d-inline" onSelect={e => handleChangeCurreny(e)}>
                  <DropdownToggle
                    as={CustomToggle}
                    id="dropdown-custom-components"></DropdownToggle>
                  <DropdownMenu align="right" style={{ overflow: 'auto' }}>
                    {
                      map(currencies, (c, i) => (
                        <DropdownItem key={i} eventKey={i} value={c.unit_name_short} active={currencyIndex === i}>{c.unit_name_short}</DropdownItem>
                      ))
                    }
                  </DropdownMenu>
                </Dropdown>
                <small>{get(selectedCurrency, 'unit_name_short')}</small>
              </div>
            </div>
            <h4 className="mt-2 mb-3">{currencyShort()} {convertedAmount()}</h4>
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>{currencyShort()} {convertedAmount()}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-5">
              <span>
                <strong>Total</strong>
              </span>
              <span>
                <strong>{currencyShort()} {convertedAmount()}</strong>
              </span>
            </div>
            <div className="d-flex flex-column justify-content-center align-content-between border border-2 ggp-parent-box rounded p-2 mb-4">
              {!isAuthenticated && <Image src={exclamation} rounded style={{ width: '4%', height: '4%' }} />}
              {isAuthenticated && (
                <div className="row d-flex align-items-baseline">
                  <div className="m-3">
                    <input type="checkbox" id="giftpoint-checkbox" value="1" name="use giftipoints" />
                  </div>
                  <label>Use Gifti Global Points</label>
                </div>
              )}
              {!isAuthenticated &&
                <p>
                  <small>
                    You can also use your Gifti Global Points, Login or Sign up to use your Gift
                    Global Points
                </small>
                </p>
              }
              <div className="p-2 ggp-box mx-auto">
                <span className=" fs-6 text-center d-block">
                  <small>Gifti Global Points</small>
                </span>
                <span className="text-center d-block">{get(rewardState, 'total_credits')}</span>
              </div>
            </div>

            <div className="d-flex justify-content-around">
              {!isAuthenticated &&
                <Button type="button" variant="white" onClick={() => history.push('auth/login')}>
                  Log In
              </Button>
              }
              <Button type="button" variant="persianGreen" onClick={() => history.push('payment')}>
                {isAuthenticated ? 'Checkout' : 'Checkout as guest'}
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
          {!isEmpty(lineItems) &&
            map(lineItems, (item, i) => (
              <div key={i}>
                <Row className="border border-2 pt-3 pb-2 justify-content-between mb-2 rounded">
                  <Col sm={3} lg={3}>
                    <Image src={get(item, 'images.color.medium_rectangle')} rounded style={{ width: '100%', height: '90%' }} />
                  </Col>
                  <Col>
                    <div className="d-flex flex-column pt-2">
                      <small>
                        <b>{get(item, 'name')}</b>
                      </small>
                      <small>Gifting for: {get(item, 'giftingTo')} </small>
                      <div className="d-flex justify-content-between align-items-center mt-3 mr-2">
                        <div className="cart-inc-dec-box px-1">
                          <button className="btn btn-link" onClick={() => handleUpdate(item, 'sub')}>
                            <span>-</span>
                          </button>
                          <span className="mx-4">{get(item, 'quantity')}</span>
                          <button className="btn btn-link" onClick={() => handleUpdate(item, 'add')}>
                            <span>+</span>
                          </button>

                        </div>
                        <span>{get(payment, 'country_name')}</span>
                        <span>{get(payment, 'unit_symbol')} {get(item, 'selectedDenomination') * get(item, 'quantity')}{rate}</span>
                        <Image src={ButtunDelete} style={{ width: '4%', height: '4%', cursor: 'pointer' }} onClick={() => handleRemove(item)} />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            ))
          }
        </Col>
      </Row>
    </>
  );
}

export default Cart;
