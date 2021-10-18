import React, { useEffect } from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import GoTop from '../components/Common/GoTop';
import Dashboard from '../components/Dashboard/Dashboard';
import Loader from '../components/Shared/Loader';
import axios from 'axios';

export default function Index()  {
    useEffect (async()=>{
        const token = localStorage.getItem('x-auth-token');
        console.log("🚀 ~ file: userPanel.js ~ line 12 ~ useEffect ~ token", token)
        if(token != '' || token != undefined)
        {
            axios.post('http://localhost:9000/api/v1/checkToken', {},{
                headers:{
                    'x-auth-token' : token
                }
            })
        .then((response, error)=>{
            if(response.status == 200)
            {

            }
            else
            {
                window.location.href='/login';
            }
        console.log("🚀 ~ file: userPanel.js ~ line 13 ~ .then ~ response", response)
            
        })
        .catch((error)=>{
            window.location.href='/login';
        console.log("🚀 ~ file: userPanel.js ~ line 17 ~ useEffect ~ error", error)

        })
        }
        else 
        {
            console.log("No token found", token);
            window.location.href='/login';
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

