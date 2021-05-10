import React, { useState, forwardRef } from "react";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Button from "react-bootstrap/Button";
import exclamation from "../../assets/Group4790.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "react-bootstrap/Image";

const CartWidget = (props) => {
  const CustomToggle = forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <RiArrowDownSLine />
    </a>
  ));
  CustomToggle.displayName = "CustomToggle";

  const {
    state,
    giftunitState,
    authState,
    rewardState,
    history,
    handleChangeCurrency,
  } = props;

  const [useGiftiGlobalPoints, setUseGiftiGlobalPoints] = useState(false);

  const lineValue =
    state && state.lineItems && state.lineItems.length
      ? state.lineItems.reduce(
          (sum, i) => sum + i.selectedDenomination * i.quantity
        )
      : 0;
  const totalLineAmount = 0;

  const getConvertedAmount = () => {};

  const convertedGiftiPoints = () => {
    const giftiGlobalPoints = rewardState?.total_credits || 0;
    const selectedCurrency = giftunitState.selectedCurrency;
    const conversionRate = state.conversion?.currency_exchange_rate;
    if (selectedCurrency && selectedCurrency.id && conversionRate) {
      let pointsToCurrency = giftiGlobalPoints * conversionRate;
      return parseFloat(pointsToCurrency).toFixed(2);
    } else {
      return giftiGlobalPoints;
    }
  };

  return (
    <div className="cart-first-column p-3">
      <div className="d-flex align-items-end">
        <h6 className="flex-grow-1">Total Pay</h6>
        <div className="flex-shrink-1 cart-currency p-1">
          <small>Select Payment Currency</small>
          <span className="mx-2">|</span>
          <Dropdown
            className="d-inline"
            onSelect={(e) => handleChangeCurrency(e)}
          >
            <DropdownToggle
              as={CustomToggle}
              id="dropdown-custom-components"
            ></DropdownToggle>
            <DropdownMenu align="right" style={{ overflow: "auto" }}>
              {state.paymentCurrency.map((currency, key) => (
                <DropdownItem
                  key={key}
                  eventKey={JSON.stringify(currency)}
                  value={currency.unit_name_short}
                  active={
                    state.selectedCartCurrency?.unit_name_short ===
                    currency.unit_name_short
                  }
                >
                  {currency.unit_name_short}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <small>{state.selectedCartCurrency?.unit_name_short}</small>
        </div>
      </div>
      <h4 className="mt-2 mb-3">
        {state.selectedCartCurrency?.unit_name_short} {getConvertedAmount()}
      </h4>
      <div className="d-flex justify-content-between">
        <span>Subtotal</span>
        <span>
          {state.selectedCartCurrency?.unit_name_short}{" "}
          {lineValue ? getConvertedAmount() : 0}
        </span>
      </div>
      {useGiftiGlobalPoints && lineValue && (
        <div className="d-flex justify-content-between">
          <span>Reward Points</span>
          <span>
            - {state.selectedCartCurrency?.unit_name_short}{" "}
            {convertedGiftiPoints()}
          </span>
        </div>
      )}
      <hr />
      <div className="d-flex justify-content-between mb-5">
        <span>
          <strong>Total</strong>
        </span>
        <span>
          <strong>
            {state.selectedCartCurrency?.unit_name_short}{" "}
            {lineValue ? totalLineAmount() : 0}
          </strong>
        </span>
      </div>
      <div className="d-flex flex-column justify-content-center align-content-between border border-2 ggp-parent-box rounded p-2 mb-4">
        {!authState.isAuthenticated && (
          <Image
            src={exclamation}
            rounded
            style={{ width: "4%", height: "4%" }}
          />
        )}
        {authState.isAuthenticated && (
          <div className="row d-flex align-items-baseline">
            <div className="m-3">
              <input
                type="checkbox"
                id="giftpoint-checkbox"
                value="1"
                name="use giftipoints"
                onClick={() => {
                  setUseGiftiGlobalPoints(!useGiftiGlobalPoints);
                }}
                checked={useGiftiGlobalPoints}
              />
            </div>
            <label>Use Gifti Global Points</label>
          </div>
        )}
        {!authState.isAuthenticated && (
          <p>
            <small>
              You can also use your Gifti Global Points, Login or Sign up to use
              your Gift Global Points
            </small>
          </p>
        )}
        <div className="p-2 ggp-box mx-auto">
          <span className=" fs-6 text-center d-block">
            <small>Gifti Global Points</small>
          </span>
          <span className="text-center d-block">
            {useGiftiGlobalPoints ? 0 : rewardState.total_credits}
          </span>
        </div>
      </div>

      <div className="d-flex justify-content-around">
        {!authState.isAuthenticated && (
          <Button
            type="button"
            variant="white"
            onClick={() => history.push("auth/login", { redirectTo: "cart" })}
          >
            Log In
          </Button>
        )}
        <Button
          type="button"
          variant="persianGreen"
          onClick={() => history.push("payment")}
        >
          {authState.isAuthenticated ? "Checkout" : "Checkout as guest"}
        </Button>
      </div>
    </div>
  );
};

export default CartWidget;
