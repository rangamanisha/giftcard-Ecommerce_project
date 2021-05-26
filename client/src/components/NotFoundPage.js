import React from "react";
import "../assets/scss/NotFound.scss";
import Container from "react-bootstrap/Container";
import NotFoundImage from "../assets/not-found.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

const NotFoundPage = () => {
  const history = useHistory();

  return (
    <Container className="notfound-container">
      <Row>
        <Col xs={12} className="text-center">
          <img src={NotFoundImage} className="img-fluid" />
        </Col>
        <Col xs={12} className="text-center oops-container">
          <small className="oops-text">
            OOPS! THE PAGE YOU WERE LOOKING FOR COULDN'T BE FOUND
          </small>
        </Col>
      </Row>
      <Row className="pt-3">
        <Col xs={12} md={{ offset: 4, span: 4 }}>
          <Button
            type="button"
            variant="info"
            className="go-to-homepage-btn btn-block"
            onClick={(e) => history.push({ pathname: "/" })}
          >
            Go to Homepage
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
