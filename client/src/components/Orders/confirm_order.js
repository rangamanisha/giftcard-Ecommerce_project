import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import {useHistory, Link} from 'react-router-dom';
import {OrderDetailsAction} from '../../actions/orders.action';
import amazon from '../../assets/amazon_medium.png';
import {getOrderState} from '../../reducer/orders.reducers';
import {  Col, Image, Row,Container } from 'react-bootstrap';
import './orders.css';

const Confirm_Order = ()=>{
    const dispatch = useDispatch();
    // const history = useHistory();
    // const orderState = useSelector(getOrderState);


   useEffect(() => {
        dispatch(OrderDetailsAction({
            order_id:1612,
            image_size: "medium_rectangle"
        }))
      },[dispatch])

    return (
        <div className="datatable-responsive-demo">
            <div className ="container mt-4">
            <p className ="order mb-5">Your Orders</p>
            <Container className ="order_box_card">
            <Row>
                <Col sm={10} className ="orderid_text">Order ID : OD21A64EE85764</Col>
                <Col sm={2} className ="text-right">  <p className="status1">Confirmed</p> </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col sm={3} lg={3}>
                <Image src={amazon} rounded className ="image_style"/>
                <p className ="text_card">Amazon eGift Card</p>
              </Col>
                <Col sm={6}>
                    <div className="d-flex flex-column pt-2">
                        <p className ="card_title">Amazon eGift Card</p>
                        <p className ="gift_title">Gifting for: Someone else</p>
                        <div className="d-flex justify-content-between align-items-center mt-3 mr-2">
                            <p className ="quantity_text"> Quantity:1</p>
                        </div>
                    </div>
                </Col>
                <Col sm>
                    <div className ="quantity_text text-right">AED 3000</div>
                    <div className ="quantity_text text-right">Credits use:0.0</div>
                    <div></div>
                    <div className ="date_text">Placed at:Mar 11,2021 12:10:54 AM</div>
                </Col>
             </Row>
             <Row></Row>
            <Row>
                 <Col>
                 <div className ="date_text text-left"> Once the order fulfilled, the gift card will be available in My Gift Cards section. We will send the voucher details through your email.
          </div></Col>
  </Row>
</Container>

<Container className ="order_box_card">


<Row>
                <Col sm={10} className ="orderid_text">Order ID : OD21A64EE85764</Col>
                <Col sm={2} className ="text-right">  <p className="status1">Confirmed</p> </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col sm={3} lg={3}>
                <Image src={amazon} rounded style={{ width: '100%', height: '90%' }} />
              </Col>
                <Col sm={6}>
                    <div className="d-flex flex-column pt-2">
                        <p className ="card_title">Amazon eGift Card</p>
                        <p className ="gift_title">Gifting for: Someone else</p>
                        <div className="d-flex justify-content-between align-items-center mt-3 mr-2">
                            <p className ="quantity_text"> Quantity:1</p>
                        </div>
                    </div>
                </Col>
                <Col sm>
                    <div className ="quantity_text text-right">AED 3000</div>
                    <div className ="quantity_text text-right">Credits use:0.0</div>
                    <div></div>
                    <div className ="date_text">Placed at:Mar 11,2021 12:10:54 AM</div>
                </Col>
             </Row>
             <Row></Row>
            <Row>
                 <Col>
                 <div className ="date_text text-left"> Once the order fulfilled, the gift card will be available in My Gift Cards section. We will send the voucher details through your email.
          </div></Col>
  </Row>




    <Row>
      <Col sm>
        <p className ="gift_details
">Gift Details</p>
      </Col> 
    </Row>
  <Row>
      <Col sm>
        <p className ="send_to">Send to</p>
      </Col> 
  </Row>


<Row>
    <Col>  <Form>
  <Form.Row>
    <Col xs={5}>
    <Form.Control type="email" placeholder="Enter email" placeholder="City" style ={{    border: "1px solid #B2B2C9"}} />
    </Col>
  </Form.Row>
  <Form.Row>
      <Col xs={5}>
  <Form.Control as="textarea" style ={{  border: "1px solid #B2B2C9"}}className="mt-3" rows={3} /> 
  </Col>
  </Form.Row>
</Form>
</Col>
</Row>

</Container>


             

             
        
  
            </div>
            </div>
        
    );
}

export default Confirm_Order;


                 