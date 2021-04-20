import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import UserProfile from "./UserProfile";
import ResetPassword from "./ResetPassword";

const Editprofile = () => {
  return (
    <div>
      <Tabs defaultActiveKey="profile">
        <Tab eventKey="profile" title="Basic Profile">
          <UserProfile />
        </Tab>
      <Tab eventKey="passsword" title="change Password">
          <ResetPassword />
     </Tab>
      </Tabs>
    </div>
  )
}
export default Editprofile;