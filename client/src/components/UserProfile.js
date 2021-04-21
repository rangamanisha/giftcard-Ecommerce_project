import React,{useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Emailicon from '../assets/Email-icon.svg';
import Usericon from '../assets/User-icon.svg';
import Passwordicon from '../assets/Password-icon.svg';
import Col from 'react-bootstrap/Col';
import { getProfileState } from '../reducer/profile.reducer';
import { getprofileListAction } from '../actions/profile.actions';
import { useDispatch, useSelector } from 'react-redux';


const UserProfile = () => {
  debugger;
  const profilestate = useSelector(getProfileState);
  const dispatch = useDispatch()
  

  const data = profilestate;
  
  useEffect(() => {
        dispatch(getprofileListAction({}));
    }, [dispatch]);




    return (
        <div className="profile-card mx-auto mt-5 col-md-5">

        <Form className="profile">
          <Form.Row>
          <Form.Group as={Col} xs={5} controlId="formBasicText" className="icons_login profile-input">
              <Form.Control size="sm" type="text" placeholder="First Name" className="profile-iconsfields"  value={data.first_name} name="first_name"/>
              <img
                src={Usericon}
                alt="Icon"
                className="profile_icon"
              />
            </Form.Group> 
        
            <Form.Group as={Col} xs={4} controlId="formBasicText" className="icons_login">
              <Form.Control size="sm" type="text" placeholder="Last Name" className="profile-iconsfields-a" value={data.last_name} name="last_name" />
            </Form.Group>
          </Form.Row>
    
          <Form.Group  controlId="formGridEmail" className="w-75 mt-2 mx-auto icons_login">
            <Form.Control size="sm" type="date" id="example-date-input" className="profile-iconsfields" name="date" />
            <img
              src={Emailicon}
              alt="Icon"
              className="profile_icon"
            />
          </Form.Group>
         
    
          <Form.Group controlId="language" className="w-75 mt-4 mx-auto">
          <Form.Control size="sm" type="text" placeholder="language" className="profile-iconsfields-b" value={data.language} name="password"/>
        </Form.Group>
     
        <Form.Group controlId="formBasicPassword" className="w-75 mt-4 mx-auto">
          <Form.Control size="sm" type="text" placeholder="Country" className="profile-iconsfields-b" value={data.country} name="confirm_password"/>
        </Form.Group>
    
        <Form.Group controlId="formBasicPassword" className="w-75 mt-4 mx-auto icons_login">
          <Form.Control size="sm" type="text" placeholder="phone number" className="profile-iconsfields"  name="confirm_password"/>
          <img
              src={Passwordicon}
              alt="Icon"
              className="profile_icon"
            />
        </Form.Group>
    
        <Form.Group controlId="formBasicEmail" className="w-75 mt-4 mx-auto icons_login">
            <Form.Control size="sm" type="email"  placeholder="Email" className="profile-iconsfields"  value={data.email} name="email" readOnly/>
            <img
              src={Emailicon}
              alt="Icon"
              className="profile_icon"
            />
          </Form.Group>        
        </Form>
    
       <div className="text-center">
        <Button
          className="profile-btn w-75 mt-4"
          variant="info"
          size="lg"
          type="submit"
        >
         Edit Profile 
        </Button>
        </div>
      </div>
    )
}

export default UserProfile;