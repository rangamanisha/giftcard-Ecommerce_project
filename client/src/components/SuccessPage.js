import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { cartTotalCountAction } from "../actions/cart.actions";
import { cartAction } from "../reducer/cart.reducer";
import { orderActions } from "../reducer/orders.reducers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Confirm_Order from "./Orders/confirm_order";
import GModal from "./GModal";
import checkboxImage from "../assets/checkbox.svg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { processOrderAfterRedirectAction } from "../actions/orders.action";
import { getGiftcardsState } from "../reducer/giftCards.reducer";

const SuccessPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const giftunitState = useSelector(getGiftcardsState);

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const modalBody = () => {
    return (
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <Image
              src={checkboxImage}
              rounded
              className="rounded"
              style={{ width: "4em" }}
            />
          </Col>
          <Col xs={12} className="text-center pt-2">
            <h2>Payment Successful</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="pt-3 text-center">
            <p style={{ opacity: "0.9" }}>
              You can find the voucher in the email soon after the order status
              is fulfilled
            </p>
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

  const orderInit = async () => {
    const search = history.location.search.split("?order_id=")[1] || null;
    let id = 0;
    if (search) {
      id = search.substring(
        0,
        search.indexOf("&") !== -1 ? search.indexOf("&") : search.length
      );
    }
    if (id) {
      if (search.indexOf("cko-session-id") !== -1) {
        await dispatch(processOrderAfterRedirectAction({ order_id: id }));
        await dispatch(orderActions.clearState());
        await dispatch(cartAction.clearState());
        dispatch(
          cartTotalCountAction({
            currency: giftunitState.selectedCountry?.unit_name_short || "AED",
          })
        );
        setShowModal(true);
      }
    }
  };

  useEffect(() => {
    orderInit();
  }, [orderInit]);

  return (
    <Container fluid>
      <Row className="mt-2">
        <Col xs={12} sm={12} md={5}>
          <div className="go-back-to-homepage-box p-5 mt-4">
            <Row>
              <Col xs={12} className="text-center">
                <h2 className="text-center">Go back to homepage!</h2>
              </Col>
              <Col xs={12} className="text-center mt-2">
                <p>
                  Treat yourself or send customisable e-gift cards with a
                  selection of +4,000 brands in +100 countries
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={{ span: 6, offset: 3 }}>
                <Button
                  className="profile-btn mt-2 btn-block"
                  variant="info"
                  size="lg"
                  type="button"
                  onClick={(e) => history.push({ pathname: "/" })}
                >
                  Back to Homepage
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={12} sm={12} md={7}>
          <Confirm_Order key={`1`} showOrdersHeading={false} />
          {showModal ? <GModal show={showModal}>{modalBody()}</GModal> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessPage;
