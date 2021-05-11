import React, { useEffect, useState } from "react";
import ButtunDelete from "../../assets/Button-Delete.svg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { getBrandImageById } from '../../services/cart.service'

const CartItem = (props) => {
  const { item, decrementQuantity, incrementQuantity, removeItem, topbarState } = props;

  const [imageSrc, setImageSrc] = useState(null);

  const getImageSrc = async () => {
    if (!imageSrc && item) {
      const itemCountry = topbarState.countries.find(country => country.country_name === item.country_name);
      if (itemCountry) {
        const response = await getBrandImageById(item.brand_id, itemCountry.id);
        setImageSrc(response.images.medium_rectangle);
      }
    }
  }

  useEffect(() => {
    getImageSrc();
  }, []);

  return (
    <div className="item-list">
      <Row className="align-items-center">
        <Col md={3}>
          <Image
            src={imageSrc}
            rounded
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Col>
        <Col md={9}>
          <div className="item-details">
            <p>
              <b>{item?.name || ""}</b>
            </p>
            <p>Gifting for: {item?.isforself ? "My Self" : "Others"} </p>
            <div className="d-flex justify-content-between align-items-center mt-3 mr-2">
              <div className="cart-inc-dec-box px-1">
                <button
                  className="btn btn-link text-decoration-none"
                  onClick={() => decrementQuantity(item)}
                >
                  <span>-</span>
                </button>
                <span className="mx-2">{item?.quantity}</span>
                <button
                  className="btn btn-link text-decoration-none"
                  onClick={(e) => incrementQuantity(item)}
                >
                  <span>+</span>
                </button>
              </div>
              <span className="count-name">{item?.country_name}</span>
              <span className="count-symbol">
                {item?.currency} {item?.giftcard_value * item?.quantity || 0}
              </span>
              <Image
                src={ButtunDelete}
                style={{
                  width: "5%",
                  height: "5%",
                  cursor: "pointer",
                }}
                onClick={() => removeItem(item)}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
