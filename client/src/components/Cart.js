import React from 'react';
import {
    Button,
    Col,
    Image,
    Container,
    Row,
    Dropdown,
    ButtonGroup,
    DropdownButton,
} from "react-bootstrap";
import AmazonMedium from "../assets/amazon_medium.png";
import {useHistory} from 'react-router-dom';
const CartPage = () => {
    const history = useHistory();
    return (
        <>
            <div className="row mt-5 ">
                <div className="col-md-4 col-sm-12 cartcolor">
                    <div id ="cart" className="d-flex mt-4">
                        <p className="col select-card-text">Total Pay</p>
                        <span>
                            <ButtonGroup classname="btngroup">
                                <Button>Select Payment Currency</Button>
                                <DropdownButton as={ButtonGroup} title="AED" id="bg-nested-dropdown">
                                    <Dropdown.Item eventKey="1">USD</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">EUR</Dropdown.Item>
                                </DropdownButton>
                            </ButtonGroup>
                        </span>
                    </div>
                    <p className="select-card-text-lg1 ml-3">AED 1,050</p>
                    <div className="row">
                        <h6 className="col ml-3">SubTotal</h6>
                        <h6 className="mr-5">AED 1050</h6>
                    </div>
                    <div className ="horizontal-border"></div>
                    <div className="row">
                        <h5 className="col ml-3">Total</h5>
                        <h5 className="mr-5 mb-5">AED 1050</h5>
                    </div>
                    <h6 className ="m-4">You can also use your Gifti Global Points, Login or Sign up to use your Gift Global Points</h6>
                    <div className =" m-auto giftipoints">{<>Gifti Global Points  <h4>0</h4></>}</div>
                    <div className = "row mt-5 mr-4 ml-4">
                    <Button variant="light" size="lg"  onClick={() => history.push({ pathname: '/auth/login' })} className="login">Log in</Button> 
                    <Button className="nav-btn ml-2" variant="info">
              Checkout as Guest
            </Button>{' '}
            </div>

                </div>
                <div className="col">
                <p className="ml-5 mr-5 select-card-text">Cart</p>
                <div className =" ml-5 cardlist d-flex">
                    <div className ="">
                    <img src={AmazonMedium} alt="AmazonMedium" className="templatetheme1 ml-3 mt-3 mb-3" />
                    </div>
                    <p className =" select-card-text mt-3 ml-3"> Amazon e-giftcard</p>
                    <div>Someone :gift</div>

                </div>
           </div>
                {/* <img src={get(card, 'images.color.medium_rectangle' )} alt="AmazonMedium" className="select-card-size1 ml-5 mt-5 col-4" /> */}
            </div>
        </>
    );
};

export default CartPage;
