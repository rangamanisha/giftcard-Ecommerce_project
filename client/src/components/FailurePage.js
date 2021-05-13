import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState } from "../reducer/auth.reducer";
import { cartAction } from "../reducer/cart.reducer";
import { getOrderState, orderActions } from "../reducer/orders.reducers";
import Confirm_Order from "./Orders/confirm_order";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GModal from "./GModal";
import FailedIcon from "../assets/failed.svg";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import Image from "react-bootstrap/Image";
import { cartTotalCountAction } from "../actions/cart.actions";
import { getGiftcardsState } from "../reducer/giftCards.reducer";

const FailurePage = () => {
  const dispatch = useDispatch();
  const authState = useSelector(getAuthState);
  const orderState = useSelector(getOrderState);
  const giftunitState = useSelector(getGiftcardsState);

  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setErrorMessage(orderState.error || orderState.order_checkout_error);
    dispatch(orderActions.clearState());
    dispatch(cartAction.clearState());
    dispatch(
      cartTotalCountAction({
        currency: giftunitState.selectedCountry?.unit_name_short || "AED",
      })
    );
    setShowModal(true);
  }, [dispatch]);

  const handleModalClose = () => {
    setShowModal(false);
    if (!authState.isAuthenticated) {
      history.push({ pathname: "/" });
    }
  };

  const modalBody = () => {
    return (
      <Container fluid className="p-2">
        <Row>
          <Col xs={12} className="text-center">
            <Image
              src={FailedIcon}
              rounded
              className="rounded"
              style={{ width: "4em" }}
            />
          </Col>
          <Col xs={12} className="text-center pt-2">
            <h2>Payment Failed</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="pt-3 text-center">
            <p style={{ opacity: "0.9" }}>{errorMessage}</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button
              className="profile-btn mt-2 btn-block"
              variant="info"
              size="lg"
              type="button"
              onClick={handleModalClose}
            >
              Ok
            </Button>
          </Col>
        </Row>
      </Container>
    );
  };

  const getFailure = () => {
    return (
      <>
        {authState.isAuthenticated ? <Confirm_Order /> : null}
        {showModal ? <GModal show={showModal}>{modalBody()}</GModal> : null}
      </>
    );
  };

  return getFailure();
};

export default FailurePage;
