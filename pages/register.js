import {React, useState} from 'react';
import NoSSR from 'react-no-ssr';
import { Preloader, Placeholder } from 'react-preloading-screen';
import ScrollAnimation from 'react-animate-on-scroll';
import Loader from '../components/Shared/Loader';
import axios from 'axios';

export default function Register()  {
    // const dotenv = require('dotenv');
    // dotenv.config();
    const [userData, setUserData]= useState ({
        name : '',
        email : '',
        pass: '',
        conf_pass : ''
    })





    const onInputChange = event => {
		const { name, value } = event.target;
        // console.log("🚀 ~ file: register.js ~ line 21 ~ Register ~ value", value)
	
		setUserData({
		  ...userData,
		  [name]: value
		});
	  };





      const registerUser = (event) => {
          event.preventDefault(); // process.env.REACT_APP_SERVER_URL

 
            axios.post('http://localhost:9000/api/v1/register', {...userData})
            .then((response, error)=>{
                console.log(error);
                if(response.data.success)
                {
                 window.location.href = "/userPanel";
                }
         //    console.log("🚀 ~ file: register.js ~ line 38 ~ .then ~ response", response)
                
            })
            .catch((error)=>{
                console.log("🚀 ~ file: login.js ~ line 41 ~ loginUser ~ error", error)
        
            })
    
         


          

      }
    
        return (
            <NoSSR key="1">
                  <Preloader fadeDuration={1000}>

            <div class="register-main">

                <section class="signup">
                
                    <div class="container">
                        <div class="signup-content">
                            <form onSubmit ={registerUser} id="signup-form" class="signup-form">
                                <h2 class="form-title">Create account</h2>
                                <div class="form-group">
                                    <input type="text" class="form-input" name="name" id="name" placeholder="Your Name" onChange={onInputChange}  value={userData.name}/>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-input" name="email" id="email" placeholder="Your Email" onChange={onInputChange}  value={userData.email}/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-input" name="pass" id="pass" placeholder="Password" onChange={onInputChange}  value={userData.pass}/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-input" name="conf_pass" id="conf_pass" placeholder="Repeat your password" onChange={onInputChange}  value={userData.conf_pass}/>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                    <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="submit" id="submit" class="form-submit" value="Sign up"/>
                                </div>
                            </form>
                            <p class="loginhere">
                                Have already an account ? <a href="#" class="loginhere-link">Login here</a>
                            </p>
                        </div>
                    </div>
                </section>

</div>
<Placeholder>
                        <Loader />
                    </Placeholder>
                    
                </Preloader>
            </NoSSR>
        )
        }