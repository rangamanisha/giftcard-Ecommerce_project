import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useHistory } from "react-router-dom";

const UserProfileDropDown = (props) => {

    const {userLoginIcon, clearSession, user, profileIcon, exitIcon, cartIcon, coinsIcon } = props;

    const history = useHistory();
    const handleClick = () => {
      history.push("/profile");
    };
  
    const rewardpoints = () => {
      history.push("/reward-points");
    };
    const orderPage =() =>{
      history.push("/order/allorder");
    }
  

    return (
      <Dropdown>
      <Dropdown.Toggle variant="info" className="nav-btn">
        <span>
          <img src={userLoginIcon} alt="Icon" className="mr-2" />
        </span>
        {user}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          className="userfont-dropdown border-line"
          onClick={handleClick}
        >
          <img src={profileIcon} alt="Icon" className="mr-2" />
          Profile
        </Dropdown.Item>
        <Dropdown.Item
          className="userfont-dropdown border-line"
          onClick={rewardpoints}
        >
          <img src={coinsIcon} alt="Icon" className="mr-2" />
          Gifti Global Points
        </Dropdown.Item>
        <Dropdown.Item className="userfont-dropdown border-line"
          onClick={orderPage}
          >
          <img src={cartIcon} alt="Icon" className="mr-2" />
          Orders
        </Dropdown.Item>
        <Dropdown.Item
          className="userfont-dropdown border-line"
          onClick={clearSession}
        >
          <img src={exitIcon} alt="Icon" className="mr-2" />
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    )
}

export default UserProfileDropDown;