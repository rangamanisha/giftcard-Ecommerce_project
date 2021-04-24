import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import StartingGift from '../assets/starting-gift.svg';
import StartingGift2 from '../assets/start-giftting2.svg';
import {useHistory} from 'react-router-dom';

const StartGifting = () => {
  const history = useHistory();
  return (
    <Row>
      <div className="cardgifiti-startgf custom-card row mx-auto mt-5">
        <Col xs={3}>
          <img src={StartingGift} className="startgiftingimg" alt="startgiftingimg" />
        </Col>

        <Col xs={6}>
          <h1 className="startgf-text text-center">Start Gifting</h1>
          <Form className="mt-5">
            <Row>
              <Col>
                <Form.Group as={Row}>
                  <Form.Label className="startgf-fields-text">I am</Form.Label>
                  <Col>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Col>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group as={Row}>
                  <Form.Label className="startgf-fields-text">Living in</Form.Label>
                  <Col>
                    <Form.Group>
                      <Form.Control as="select">
                        <option>UAE</option>
                        <option></option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group as={Row}>
                  <Form.Label className="startgf-fields-text">I want to</Form.Label>
                  <Col xs={3}>
                    <Form.Group>
                      <Form.Control as="select">
                        <option>Treat Myself</option>
                        <option>Send a gift</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Form.Group>
              </Col>
            </Row>
          </Form>

          <div className="text-center">
            <Button variant="info" size="md" className="mt-3 startgf-fields-button" onClick={() => history.push('/allcards')}>
              Browse Gifts
            </Button>
          </div>
        </Col>

        <Col xs={3}>
          <img src={StartingGift2} className="startgiftingimg" alt="startgiftingimg" />
        </Col>
      </div>
    </Row>
  );
};

export default StartGifting;
