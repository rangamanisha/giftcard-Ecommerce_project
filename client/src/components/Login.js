import React, { useState } from 'react';
import ReactBootstrap, {
  Button,
  Form,
  FormControl,
  Col,
  Alert,
  Row,
  InputGroup,
} from "react-bootstrap";
import axios from 'axios';  
import Navbar from "./Navbar";
import Footer from "./Footer";
import Emailicon from '../assets/Email-icon.svg';
import Usericon from '../assets/User-icon.svg';
import Passwordicon from '../assets/Password-icon.svg';
import Googleicon from '../assets/Google-icon.svg';
import Facebookicon from '../assets/Facebook-icon.svg';



const Login = (props) => { 
  const [employee, setemployee] = useState({ Email: '', Password: ''});  
    const apiUrl = "https://api.giftiglobal.com/v1/accounts/sessions/signin";    
    const Login = (e) => {    
            e.preventDefault();    
            debugger;   
            const data ={ "signin": { email:employee.Email,
              password: employee.Password } }; 
            axios.post(apiUrl, data)    
            .then((result) => {    
                debugger;  
                console.log(result.data);   
                const serializedState = JSON.stringify(result.data);  
                var a = localStorage.setItem('myData', serializedState);   
                console.log("A:",a)  
                const user = result.data.status;  
                console.log(result.data.message);  
                if (result.data.status == 'OK')    
                    props.history.push('/Dashboard')    
                else    
                alert('Invalid User');  

        })        
      };  
   
          const onChange = (e) => {    
                e.persist();    
                debugger;    
                setemployee({...employee, [e.target.name]: e.target.value});    
              }    

            
        
  return (
    <div className="body">
      <Navbar />   
      <div className="login-card mx-auto">
        <p className="login-text text-center h3 pt-5">Login to your Account</p>
        <p className="text-center mt-0">
          <small>Enter to continue and explore within your grasp</small>
        </p>

        <Form onSubmit={Login} class="user">
          <Form.Group controlId="formBasicEmail" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="email" placeholder="Enter email" value={employee.Email} onChange={ onChange }  className="icons_fields" name="Email"/>
            <img
                src={Usericon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>



          <Form.Group controlId="formBasicPassword" className="w-75 mx-auto icons_login">
          
            <Form.Control size="lg" type="password" placeholder="Password" className="icons_fields" value={employee.Password} onChange={ onChange }  name="Password" />

            <img
                src={Passwordicon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>
          <div className="row">
            <Form.Group style={{ marginLeft: "77px" }}>
              <Form.Check
                type="radio"
                label="Remember Me"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Form.Group>

            <Form.Group style={{ marginLeft: "162px" }}>
              <span>Forgot me?</span>
            </Form.Group>
          </div>

          <Button
            className="btn-custom mt-3"
            variant="info"
            size="lg"
            type="Submit"
          >
            Login to Continue
          </Button>

          <p className="text-center mt-4">Don’t have an account ? Sign up</p>

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
                  or sign in with
                </td>
                <td>
                  <hr />
                </td>
              </tr>
            </tbody>
          </table>

          <div className="row mt-4">
            <Button
              variant="outline-secondary"
              className="google-button mr-sm-3"
            >
              <img
                src={Googleicon}
                style={{ width: "24px", height: "50px" }}
                alt="Icon"
                
              />
            </Button>
            <Button
              variant="outline-secondary"
              className="facebook-button mr-sm-3"
            >
              {" "}
              <img
                src={Facebookicon}
                style={{ width: "50px", height: "50px" }}
                alt="Icon"
              />
            </Button>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
