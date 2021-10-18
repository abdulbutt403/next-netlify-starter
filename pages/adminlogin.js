import {React, useState, useEffect } from 'react';
import NoSSR from 'react-no-ssr';
import { Preloader, Placeholder } from 'react-preloading-screen';
import ScrollAnimation from 'react-animate-on-scroll';
import Loader from '../components/Shared/Loader';
import axios from 'axios';

export default function Login() {
    useEffect (async()=>{
        const token = localStorage.getItem('x-auth-ad-token');
        console.log("🚀 ~ file: userPanel.js ~ line 12 ~ useEffect ~ token", token)
        if(token != '' || token != undefined)
        {
            axios.post('http://localhost:9000/api/v1/checkAdminToken', {},{
                headers:{
                    'x-auth-ad-token' : token
                }
            })
        .then((response, error)=>{
            if(response.status == 200)
            {
                window.location.href='/adminPanel';
            }
            else
            {
                
            }
        console.log("🚀 ~ file: userPanel.js ~ line 13 ~ .then ~ response", response)
            
        })
        .catch((error)=>{
            // window.location.href='/login';
        console.log("🚀 ~ file: userPanel.js ~ line 17 ~ useEffect ~ error", error)

        })
        }
        else 
        {
            console.log("No token found", token);
            // window.location.href='/login';
        }
        
    })


    const [errorMessage, seterrorMessage] =  useState("")


    const [loginData, setLoginData]= useState ({
       
        email : '',
        pass: '',
        
    })



    const onInputChange = event => {
		const { name, value } = event.target;
        // console.log("🚀 ~ file: register.js ~ line 21 ~ Register ~ value", value)
	
		setLoginData({
		  ...loginData,
		  [name]: value
		});
	  };

      const loginUser = async (event) => {
        event.preventDefault();
        // console.log("In handle")


           const response = await axios.post('http://localhost:9000/api/v1/adminlogin', {...loginData})
           console.log("🚀 ~ file: adminlogin.js ~ line 35 ~ loginUser ~ response", response)
       
            if(response.data.success)
            {
                console.log("🚀 ~ file: login.js ~ line 43 ~ loginUser ~ response.data.token", response.data.token)
                localStorage.setItem('x-auth-ad-token', response.data.token);
                
                window.location.href='/adminPanel';
            }
     
        


      }

        return (
            <NoSSR key="1">
                 <Preloader fadeDuration={1000}>
            <div class="register-main">

                <section class="signup">
                
                    <div class="container">
                        <div class="signup-content">
                            <form onSubmit ={loginUser} id="signup-form" class="signup-form">
                                <h2 class="form-title">Login to your account</h2>
                                <div class="form-group">
                                    <input type="email" class="form-input" name="email" id="email" placeholder="Your Email"  onChange={onInputChange}  value={loginData.email}/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-input" name="pass" id="password" placeholder="Password" onChange={onInputChange}  value={loginData.pass}/>
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="submit" id="submit" class="form-submit" value="Sign in"/>
                                </div>
                            </form>
                            <p class="loginhere">
                                Don't have an account ? <a href="#" class="loginhere-link">Sign up here</a>
                            </p>
                            <br/>
                            <p className="form-error">{errorMessage}</p>
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
