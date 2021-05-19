import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import store from "../reducer/index";
import { useFormik } from "formik";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import swal from "sweetalert";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { getRewardPointsState } from "../reducer/rewardpoints.reducer";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import {
  getRewardPointsAction,
  getTransactionsAction,
  getConvertAction,
  getRemainingAction,
  getConvertCreditsAction,
} from "../actions/rewardpoints.actions";
import { useDispatch, useSelector } from "react-redux";
import Moment from "react-moment";
import Modal from "./modal";
import GiftModal from "./giftcardmodal";
import LoadingBar from "react-top-loading-bar";

const RewardPoints = (props) => {
  const points = useSelector(getRewardPointsState);
  const dispatch = useDispatch();
  const points_data = points;
  const transactions = points_data.credits;
  const [modalShow, setModalShow] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    setErrors(points_data.errors);
  }, [points_data.errors]);
  useEffect(() => {
    dispatch(getRewardPointsAction({}));
    dispatch(getTransactionsAction({}));
  }, [dispatch, points_data.message, points_data.triggerConversion]);

  const handleOffence = (name) => {
    setErrors([]);
  };

  const formik = useFormik({
    initialValues: {
      giftcard_number: "",
    },
    validationSchema: Yup.object({
      giftcard_number: Yup.string().min(2).max(200),
    }),
    onSubmit: async (data) => {
      await dispatch(getConvertAction(data));
      if (store.getState().rewardpoints.triggerConversion) {
        await dispatch(getRemainingAction(data));
      }
      if (store.getState().rewardpoints.remaining_value > 0) {
        swal({
          title: "Are you sure?",
          text: "By clicking Yes, your gift card will be converted to Gifti Global points and the balance of your gift card will be redeemed. This cannot be undone.",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            dispatch(getConvertCreditsAction(data));
          }
        });
      }
    },
    validateOnChange: false,
  });

  return (
    <>
      <Row>
        <Modal show={modalShow} onHide={() => setModalShow(false)} />
        <GiftModal show={modalShow} onHide={() => setModalShow(false)} />
        <Col sm="7" className="pl-5 mt-5">
          <LoadingBar
            color="#00807d"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Form onSubmit={formik.handleSubmit} onClick={() => setProgress(100)}>
            <p className="rewardspoints-font">
              Redeem your Mylist, Gifti Global or Hasaad Card
            </p>
            <InputGroup className="mb-3 w-75 redeem-button">
              <FormControl
                placeholder="Enter Gift Card Number"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className="redeem-button-a"
                value={formik.values.giftcard_number}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleOffence(e.currentTarget.value);
                }}
                onBlur={formik.handleBlur}
                name="giftcard_number"
              />
              <InputGroup.Append>
                <Button
                  variant="info"
                  className="redeem-button-b"
                  type="Submit"
                  value="Redeem"
                  disabled={!formik.isValid}
                >
                  Redeem
                </Button>
              </InputGroup.Append>
            </InputGroup>
            {formik.errors.giftcard_number ? (
              <p className="validation-messages text-left">
                {formik.errors.giftcard_number}
              </p>
            ) : null}

            {/* {points_data.errors &&
            points_data.errors.length &&
            formik.values.giftcard_number ? (
              <p className="validation-messages text-left">
                {points_data.errors.join("\n")}
              </p>
            ) : null} */}
            {errors && errors.length && formik.values.giftcard_number ? (
              <p className="validation-messages text-left">
                {errors.join("\n")}
              </p>
            ) : null}
          </Form>
        </Col>

        <Col sm="5">
          <div className="cardpoints mt-5">
            <h3 className="pt-4 text-center font-points">Points</h3>
            <h1 className="mt-4 text-center point-a">
              {points_data.total_credits}
            </h1>
            <p className="mt-2 text-center points-b">
              Redeem your points next time you shop!
            </p>
          </div>
        </Col>

        <Col sm="12" className="mt-5 pl-5">
          <h2 className="trans-detail">Transaction Details</h2>
          <Table border className="mt-4 hover border">
            <thead className="table-head">
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Details</th>
                <th>Amount</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions && transactions.length > 0 ? (
                transactions.map((transaction) => {
                  return (
                    <tr className="table-body-font">
                      <td className="font-date">
                        <Moment format="MMM Do,YYYY">
                          {transaction.created_at}
                        </Moment>
                        <br />
                        <Moment format="h:mm a">
                          {transaction.created_at}
                        </Moment>
                      </td>
                      <td>{transaction.type}</td>
                      {transaction.type === "GIFT CARD" ? (
                        <td>
                          Gift Card Redemption: &nbsp;{transaction.card_number}
                        </td>
                      ) : (
                        <td>Order Number: &nbsp;{transaction.order_id}</td>
                      )}
                      {transaction.transaction_type === "CREDITED" ||
                      transaction.transaction_type === "CASHBACK" ? (
                        <td className="font-balance">
                          + &nbsp;{transaction.amount}
                        </td>
                      ) : (
                        <td className="font-balance-red">
                          - &nbsp;{transaction.amount}
                        </td>
                      )}
                      <td>{transaction.current_balance}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td style={{ color: "red" }}>No results</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default RewardPoints;
