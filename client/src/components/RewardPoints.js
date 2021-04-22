import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const RewardPoints = () => {
  return (
    <>
      <Row>
        <Col className="pl-5 mt-5">
          <p>Redeem your Mylist, Gifti Global or Hasaad Card</p>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter Gift Card Number"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2" variant="info">Redeem</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col>
          <h1>test</h1>
        </Col>
      </Row>
    </>
  );
};

export default RewardPoints;
