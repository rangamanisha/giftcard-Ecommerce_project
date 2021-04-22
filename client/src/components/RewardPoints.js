import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const RewardPoints = () => {
  return (
    <>
      <Row>
        <Col sm="7" className="pl-5 mt-5">
          <p className="rewardspoints-font">
            Redeem your Mylist, Gifti Global or Hasaad Card
          </p>
          <InputGroup className="mb-3 w-75 redeem-button">
            <FormControl
              placeholder="Enter Gift Card Number"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              className="redeem-button-a"
            />
            <InputGroup.Append>
              <Button variant="info" className="redeem-button-b">
                Redeem
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>

        <Col sm="5">
          <div className="cardpoints mt-5">
            <h3 className="pt-4 text-center font-points">Points</h3>
            <h1 className="mt-4 text-center point-a">540,000 Points</h1>
            <p className="mt-2 text-center points-b">
              Redeem your points next time you shop!
            </p>
          </div>
        </Col>

        <Col sm="12" className="mt-5 pl-5">
            <h2>Transaction Details</h2>
          <Table responsive className="mt-4">
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Details</th>
                <th>Amount</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default RewardPoints;
