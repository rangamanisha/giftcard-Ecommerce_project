import React from "react";
import Tab from "react-bootstrap/Tab";
import UserProfile from "./UserProfile";
import Updatepassword from "./updatepassword";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";

const Editprofile = () => {
  return (
    <div className="container-fluid px-0">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="userprofile-box userprofile-box-info mb-0">
          <Nav>
            <Row className="mx-auto">
              <Nav.Item>
                <Nav.Link eventKey="first" className="nav-userprofile mr-2">
                  Basic Profile
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="nav-userprofile mr-3">
                  Change Password
                </Nav.Link>
              </Nav.Item>
            </Row>
          </Nav>
        </div>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <UserProfile />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <Updatepassword />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};
export default Editprofile;
