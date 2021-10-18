import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactAudioPlayer from 'react-audio-player';


export default function Musiclist()  {
    const [music, setMusicData]=useState([]);
    let abc;
    useEffect(async ()=>{
        axios.get('http://localhost:9000/api/v1/getMusic')
        .then((response, error)=>{
            // console.log("🚀 ~ file: MusicList.js ~ line 12 ~ .then ~ response", response.data.musicData)
            setMusicDataFunction(response.data.musicData);
            // abc=response.data.musicData;
            console.log(music)
        })
        .catch((error)=>{
        console.log("🚀 ~ file: MusicList.js ~ line 18 ~ useEffect ~ error", error)

        })
    }, [])

    const setMusicDataFunction = (data) =>{
        setMusicData(data);
    }
    return (

        <>




                   <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="section-title" style={{paddingTop: 300}}> 
                                    <h2 style={{color: "#fff"}}>Our Music Listing</h2>
                                    <p style={{color: "#fff"}}>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                    </ScrollAnimation>

                    
                       <div className="title-box" >
                          <p>Song Title</p>
                          <p>Artist Name</p>
                          <p>Description</p>
                          <p>Play</p>
                          <p>Vote</p>
                        </div>
                    <div className="d-flex justify-content-center align-items-center">
                        
                            <ul class="list animate">
                                

                                
                                {/* <li class="item ">
                               
                                    <div className="item-desc"></div>
                                    <div className="item-desc">Johnny Singer</div>
                                    <div className="item-desc">Johnny Sins</div>
                                    <div className="item-desc">  <ReactAudioPlayer
                                    src="/music/abc.mp3"
                                    autoPlay
                                    controls
                                    /></div>
                                    <div className="item-desc"> <img height="40px" style={{cursor: 'pointer'}} src="/images/vote.png"/></div>
                                </li> */}
                                {music.map((row)=>(
                                <li key={row.name} class="item ">
                                    
                                    <div className="item-desc" >{row.name}</div>
                                    <div className="item-desc">{row.artist}</div>
                                    <div className="item-desc">{row.description}</div>
                                    <div className="item-desc">  <ReactAudioPlayer
                                    src={"http://localhost:9000/static/music/"+row.file_path+".mp3"}
                                    autoPlay
                                    controls
                                    /></div>
                                    <div className="item-desc"><button > <img height="40px" style={{cursor: 'pointer'}} src="/images/vote.png"/></button></div>
                                </li>
                                    ))} 
                                
                            </ul>
                    </div>
        </>
    );
}





