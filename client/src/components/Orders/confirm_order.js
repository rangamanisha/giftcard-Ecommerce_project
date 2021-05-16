import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import { useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {
  OrderDetailsAction,
  processOrderAfterRedirectAction,
} from "../../actions/orders.action";
import { getOrderState, orderActions } from "../../reducer/orders.reducers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { get, map } from "lodash";
import "./orders.scss";
import { cartAction } from "../../reducer/cart.reducer";
import GModal from "../GModal";
import checkboxImage from "../../assets/checkbox.svg";
import { cartTotalCountAction } from "../../actions/cart.actions";
import { getGiftcardsState } from "../../reducer/giftCards.reducer";

const Confirm_Order = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(getOrderState);
  const giftunitState = useSelector(getGiftcardsState);
  const orderdetail = get(orderState, "orders");
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const modalBody = () => {
    return (
      <Container fluid className="p-2">
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
    const search = location.search.split("?order_id=")[1] || null;
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
      dispatch(
        OrderDetailsAction({
          order_id: id,
          image_size: "medium_rectangle",
        })
      );
    }
  };

  useEffect(() => {
    orderInit();
  }, []);

  return (
    <div className="datatable-responsive-demo">
      <div className="container mt-4">
        <p className="order mb-5">Your Orders</p>
        {map(orderdetail, (detail, i) => (
          <>
            <Container className="order_box_card">
              <Row>
                <Col sm={10} className="orderid_text">
                  Order ID : {detail.orderid}
                </Col>
                <Col sm={2} className="text-right">
                  {" "}
                  <p className="status1"> {detail.order_status}</p>{" "}
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col sm={3} lg={3}>
                  <Image
                    src={detail.images.color.medium_rectangle}
                    rounded
                    className="image_style"
                  />
                  <p className="text_card"> {detail.brand_name}</p>
                </Col>
                <Col sm={6}>
                  <div className="d-flex flex-column pt-2">
                    <p className="card_title">{detail.brand_name}</p>
                    <p className="gift_title">
                      Gifting for: {detail.isgift ? "Someone else" : "Myself"}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-3 mr-2">
                      <p className="quantity_text">
                        {" "}
                        Quantity: {detail.quantity}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col sm>
                  <div className="quantity_text text-right">
                    {detail.unit_name} {detail.giftcard_value}
                  </div>
                  <div className="quantity_text text-right">
                    Credits use: {detail.credits_used}
                  </div>
                  <div></div>
                  <div className="date_text mt-5">
                    Placed at :
                    <Moment format=" MMM DD, YYYY">{detail.date}</Moment>
                    <Moment format=" h:mm A">{detail.date}</Moment>
                  </div>
                </Col>
              </Row>
              <Row></Row>
              <Row>
                <Col>
                  <div className="date_text text-left">
                    {" "}
                    Once the order fulfilled, the gift card will be available in
                    My Gift Cards section. We will send the voucher details
                    through your email.
                  </div>
                </Col>
              </Row>
              {detail.isgift ? (
                <>
                  <Row>
                    <Col sm>
                      <p className="gift_details">Gift Details</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm>
                      <p className="send_to">Sent to</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      {" "}
                      <Form>
                        <Form.Row>
                          <Col xs={5}>
                            <Form.Control
                              type="email"
                              placeholder={detail.gift.recipient_email}
                              value={detail.gift.recipient_email}
                              style={{
                                border: "1px solid #B2B2C9",
                                color: "none",
                                fontWeight: "600",
                              }}
                            />
                          </Col>
                        </Form.Row>
                        <Form.Row>
                          <Col xs={5}>
                            <Form.Control
                              as="textarea"
                              placeholder={detail.gift.gift_message}
                              value={detail.gift.gift_message}
                              style={{
                                border: "1px solid #B2B2C9",
                                color: "none",
                                fontWeight: "600",
                              }}
                              className="mt-3"
                              rows={3}
                            />
                          </Col>
                        </Form.Row>
                      </Form>
                    </Col>
                  </Row>
                </>
              ) : (
                ""
              )}
            </Container>
          </>
        ))}
      </div>
      {showModal ? <GModal show={showModal}>{modalBody()}</GModal> : null}
    </div>
  );
};

export default Confirm_Order;
