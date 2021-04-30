import React from "react";
import EmptyCartImage from "../../../assets/empty-state-cart.svg";
import { Button, Col, Container, Row } from "react-bootstrap";
import FigureImage from "react-bootstrap/esm/FigureImage";
import Footer from "../Footer";
export default function EmptyCart() {
  return (
    <>
      <style type="text/css">
        {`    
    .btn-persianGreen {
        background-color: #00B2AE;
        color: #FFFFFF;
        font-size: .8rem;
        font-family: 'Cairo-Bold';   
    }
    `}
      </style>

      <Container>
        <Row className="justify-content-center">
          <Col className="align-content-around">
            <Row className="justify-content-center my-4">
              <FigureImage
                width={350}
                height={300}
                alt="EmptyCart"
                src={EmptyCartImage}
              />
            </Row>
            <Row className="justify-content-center">
              <h4>Your orders list looks empty!</h4>
            </Row>

            <Row className="justify-content-center">
              <small className="fs-6 fw-bold">What are you waiting for?</small>
            </Row>
            <Row className="justify-content-center mt-3">
              <Button
                type="button"
                variant="persianGreen"
                size="lg"
                className="px-5"
              >
                Start Gifting
              </Button>
            </Row>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}
