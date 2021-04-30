import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const UserProfileDropDown = (props) => {

    const {userLoginIcon, clearSession, user } = props;
    

    return (
        <Dropdown>
        <Dropdown.Toggle variant="info" className="nav-btn">
          <span>
            <img src={userLoginIcon} alt="Icon" className="mr-2" />
          </span>
          {user}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
          <Dropdown.Item eventKey="2">Gifti Global Points</Dropdown.Item>
          <Dropdown.Item eventKey="1">Orders</Dropdown.Item>
          <Dropdown.Item onClick={clearSession}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
}

export default UserProfileDropDown;