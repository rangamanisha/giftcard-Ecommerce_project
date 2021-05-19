import React, { useState, forwardRef } from "react";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Button from "react-bootstrap/Button";
import exclamation from "../../assets/Group4790.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import Image from "react-bootstrap/Image";
import { getFixerConvertedAmount } from "../../services/giftCards.service";

const CartWidget = (props) => {
  const CustomToggle = forwardRef(({ children, onClick }, ref) => (
    <a
      href="#"
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
    authState,
    rewardState,
    history,
    handleChangeCurrency,
    createCheckout,
  } = props;

  const [useGiftiGlobalPoints, setUseGiftiGlobalPoints] = useState(false);

  const getMarginAmount = (amount) => {
    const additionalCharge = (parseFloat(amount) * 5) / 100;
    const totalAmount = parseFloat(
      additionalCharge + parseFloat(amount)
    ).toFixed(2);
    return totalAmount;
  };

  const lineValue =
    state && state.lineItems && state.lineItems.length
      ? state.lineItems.reduce(
          (sum, i) => sum + i.selectedDenomination * i.quantity
        )
      : 0;
  // const getConvertedAmount = () => {
  //   const exchangeRate = state.conversion?.currency_exchange_rate || 0;
  //   let total = 0;
  //   if (authState.isAuthenticated) {
  //     total = parseFloat(state.totalCartAmount);
  //     if (exchangeRate) {
  //       total = total * exchangeRate;
  //     }
  //   } else {
  //     if (state.lineItems.length) {
  //       total = state.lineItems
  //         .map((lineItem) =>
  //           lineItem.currency !== state.selectedCartCurrency?.unit_name_short
  //             ? parseFloat(getMarginAmount(lineItem.card_value_aed)) *
  //               parseInt(lineItem.quantity)
  //             : parseFloat(lineItem.card_value_aed) *
  //               parseInt(lineItem.quantity)
  //         )
  //         .reduce(
  //           (accumulatedValue, currentValue) => accumulatedValue + currentValue
  //         );
  //       if (exchangeRate) {
  //         total = total * exchangeRate;
  //       }
  //     }
  //   }
  //   total = parseFloat(total).toFixed(2);
  //   return total;
  // };

  const getConvertedAmount = () => {
    const exchangeRate = state.conversion?.currency_exchange_rate || 0;
    let total = 0;
    if (state.lineItems.length) {
      total = state.lineItems
        .map((lineItem) =>
          lineItem.currency !== state.selectedCartCurrency?.unit_name_short
            ? parseFloat(
                authState.isAuthenticated
                  ? lineItem.card_value_aed
                  : getMarginAmount(lineItem.card_value_aed)
              ) *
              parseInt(lineItem.quantity) *
              (authState.isAuthenticated ? 1 : exchangeRate)
            : parseFloat(lineItem.giftcard_value) * parseInt(lineItem.quantity)
        )
        .reduce(
          (accumulatedValue, currentValue) => accumulatedValue + currentValue
        );
    }
    return parseFloat(total).toFixed(2);
  };

  const getTotalConvertedAmount = (usePoints) => {
    let total = parseFloat(getConvertedAmount());
    if (usePoints) {
      let totalRewardPoints = rewardState?.total_credits || 0;
      const currencyExchangeRate = state.conversion?.currency_exchange_rate;
      totalRewardPoints = currencyExchangeRate
        ? parseFloat(totalRewardPoints * currencyExchangeRate)
        : parseFloat(totalRewardPoints);
      if (totalRewardPoints > total) {
        return 0;
      } else {
        return parseFloat(total - totalRewardPoints).toFixed(2);
      }
    }
    return parseFloat(total).toFixed(2);
  };

  const convertedGiftiPoints = () => {
    const totalAmount = getTotalConvertedAmount();
    const giftiGlobalPoints = rewardState?.total_credits || 0;
    const selectedCurrency = state.selectedCartCurrency;
    const conversionRate = state.conversion?.currency_exchange_rate;
    if (selectedCurrency && selectedCurrency.id && conversionRate) {
      let pointsToCurrency = giftiGlobalPoints * conversionRate;
      if (totalAmount > pointsToCurrency) {
        return parseFloat(pointsToCurrency).toFixed(2);
      }
      return totalAmount;
    } else {
      if (totalAmount > parseFloat(giftiGlobalPoints)) {
        return parseFloat(giftiGlobalPoints).toFixed(2);
      }
      return totalAmount;
    }
  };

  const getUpdatedRewardPoints = () => {
    const totalAmount = parseFloat(getConvertedAmount());
    const currencyExchangeRate = state.conversion?.currency_exchange_rate;
    let totalRewardPoints =
      (rewardState?.total_credits || 0) * currencyExchangeRate;
    if (totalRewardPoints > totalAmount) {
      totalRewardPoints = totalRewardPoints - totalAmount;
    } else {
      totalRewardPoints = 0;
    }
    return parseFloat(totalRewardPoints).toFixed(2);
  };

  const checkout = async () => {
    const totalAmount = getTotalConvertedAmount();
    let convertedAmountAED = totalAmount;
    if (state.selectedCartCurrency?.unit_name_short !== "AED") {
      const response = await getFixerConvertedAmount(
        convertedAmountAED,
        state.selectedCartCurrency?.unit_name_short,
        "AED"
      );
      convertedAmountAED = response.converted_amount;
    }
    const checkoutObject = {
      total_amount: totalAmount,
      amount_to_pay: totalAmount,
      total_amount_aed: parseFloat(convertedAmountAED).toFixed(2),
      currency: state.selectedCartCurrency?.unit_name_short,
      currency_id: state.selectedCartCurrency?.id,
    };
    if (authState.isAuthenticated) {
      checkoutObject.are_reward_points_used = useGiftiGlobalPoints;
      checkoutObject.reward_points = getUpdatedRewardPoints();
      if (useGiftiGlobalPoints) {
        const diffAmount =
          parseFloat(totalAmount) - parseFloat(convertedGiftiPoints());
        const isDiffAmountToBePaid = diffAmount > 0;
        checkoutObject.amount_to_pay = isDiffAmountToBePaid
          ? parseFloat(diffAmount).toFixed(2)
          : checkoutObject.total_amount;
        checkoutObject.isDiffAmountToBePaid = isDiffAmountToBePaid;
        checkoutObject.used_credits = isDiffAmountToBePaid
          ? rewardState?.total_credits
          : 0;
      }
    }
    createCheckout(checkoutObject);
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
            {useGiftiGlobalPoints
              ? getTotalConvertedAmount(true)
              : getConvertedAmount()}
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
                disabled={!getConvertedAmount()}
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
            {useGiftiGlobalPoints
              ? getUpdatedRewardPoints()
              : rewardState.total_credits}
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
          onClick={checkout}
          disabled={!state.lineItems}
        >
          {authState.isAuthenticated ? "Checkout" : "Checkout as guest"}
        </Button>
      </div>
    </div>
  );
};

export default CartWidget;
