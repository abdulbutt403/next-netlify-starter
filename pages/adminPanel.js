import {React, useEffect} from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import GoTop from '../components/Common/GoTop';
import Dashboard from '../components/AdminDashboard/Dashboard';
import Loader from '../components/Shared/Loader';
import axios from 'axios';

export default function  Index()  {
    useEffect (async()=>{
        const token = localStorage.getItem('x-auth-ad-token');
        console.log("🚀 ~ file: userPanel.js ~ line 12 ~ useEffect ~ token", token)
        if(token != '' || token != undefined)
        {
            console.log("In testting")
            axios.post('http://localhost:9000/api/v1/checkAdminToken', {},{
                headers:{
                    'x-auth-ad-token' : token
                }
            })
        .then((response, error)=>{
            // console.log("🚀 ~ file: adminPanel.js ~ line 22 ~ .then ~ error", error)
            // console.log("🚀 ~ file: adminPanel.js ~ line 21 ~ .then ~ response", response)
            if(response.status == 200)
            {

            }
            else
            {
                console.log(" in else of if")
                window.location.href='/adminlogin';
            }
        console.log("🚀 ~ file: userPanel.js ~ line 13 ~ .then ~ response", response)
            
        })
        .catch((error)=>{
            console.log("🚀 ~ file: userPanel.js ~ line 17 ~ useEffect ~ error", error)
            window.location.href='/adminlogin';
        // console.log("🚀 ~ file: userPanel.js ~ line 17 ~ useEffect ~ error", error)

        })
        }
        else 
        {
            console.log("No token found", token);
            window.location.href='/adminlogin';
        }
        
    })
    
        return(
            <NoSSR key="1">
                <Preloader fadeDuration={1000}>

                   <Dashboard/>
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />

                    <Placeholder>
                        <Loader />
                    </Placeholder>
                    
                </Preloader>
            </NoSSR>
        );
    
}

