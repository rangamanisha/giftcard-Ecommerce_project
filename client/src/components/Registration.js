import React, { useState } from 'react';
import axios from 'axios';  
import {
    Button,
    Form,
  } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Emailicon from '../assets/Email-icon.svg';
import Usericon from '../assets/User-icon.svg';


const Signup = (props) => {
const [user, setuser] = useState({ First_name:'',Last_name:'',Email:'', Phone:'',Country_name:''});  
    const apiUrl = "https://api.giftiglobal.com/v1/accounts/registrations/signup";    
    const Signup = (e) => {    
            e.preventDefault();    
            ;   
            const data ={ "signup": { first_name:user.First_name, last_name:user.Last_name, email:user.Email,
            country_name:user.Country_name,phone:user.Phone ,"lang_key": "en"} }; 
            axios.post(apiUrl, data)    
            .then((result) => {    
                ;  
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data);  
                var a = localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                console.log(result.data.message);  
                if (result.data.status === 'OK')  {
                    props.history.push('/home')    
                  alert('mail sent');}
                else {
                alert('Invalid User');  }
              
        })        
      };  
   
          const onChange = (e) => {    
                e.persist();    
                ;    
                setuser({...user, [e.target.name]: e.target.value});    
          }    
    return (
        <div className="body">
          <Navbar />
          <div>
          <div className="login-card mx-auto mt-5">
        <p className="login-text text-center h3 pt-5">Create an Account</p>
        <p className="text-center mt-0">
          <small>Enter to continue and explore within your grasp</small>
        </p>

        <Form onSubmit={Signup} class="user" >
        <div className="row">
        <Form.Group controlId="formBasicText" className="singup-input mr-sm-3 icons_login">
            <Form.Control size="lg" type="text" placeholder="First Name" className="icons_fields" value={user.First_name} onChange={ onChange } name="First_name"/>
            <img
                src={Usericon}
                alt="Icon"
                className="icon_img"
              />
        </Form.Group>
        <Form.Group controlId="formBasicText" className="singup-inputfield mr-sm-3">
            <Form.Control size="lg" type="text" placeholder="Last Name"  className="icons_fields_b" value={user.Last_name} onChange={ onChange } name="Last_name"/>
        </Form.Group>
        </div>

        <Form.Group controlId="formBasicEmail" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="email" placeholder="Enter email" className="icons_fields" value={user.Email} onChange={ onChange } name="Email"/>
            <img
                src={Emailicon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>

          <Form.Group controlId="formBasictel" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="tel" placeholder="Phone" className="icons_fields" value={user.Phone} onChange={ onChange } name="Phone"/>
    </Form.Group>   



          <Form.Group controlId="formBasictext" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="text" placeholder="Country name" className="icons_fields" value={user.Country_name} onChange={ onChange } name="Country_name"/>
          </Form.Group>

      {/*    <Form.Group controlId="formBasicPassword" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="password" placeholder="Password" className="icons_fields"/>
            <img
                src={Passwordicon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="password" placeholder="Confirm Password" className="icons_fields"/>
            <img
                src={Passwordicon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>

    */}
          
          <Button className="btn-custom mt-3" variant="info" size="lg"  type="Submit">
            Sign up
          </Button>

          <p className="text-center mt-3">Already have an account ? Log in</p>

          <table width="100%">
            <tbody>
              <tr>
                <td>
                  <hr />
                </td>
                <td
                  style={{
                    width: "1px",
                    padding: "0 10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  or sign up with
                </td>
                <td>
                  <hr />
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
      </div>

          </div>
          <Footer />  
        </div>
    )
}

export default Signup;
