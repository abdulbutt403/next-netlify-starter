import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Counter extends React.Component {
    render() {
        return (
            <div id="counter" className="counter-stats angle-counter-stats"> 
                <div className="container">   
                  <div className="row"> 
                        <div className="col-sm-6 col-lg-3"> 
                            <div className="counter-box"> 
                                <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                    <i className="icofont-music-notes"></i>
                                    <p>ROCK N' ROLL</p>
                                   
                                </ScrollAnimation>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-lg-3"> 
                            <div className="counter-box"> 
                                <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                    <i className="icofont-music-disk"></i>
                                    <p>Hip Hop</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-lg-3"> 
                            <div className="counter-box"> 
                                <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                    <i className="icofont-ui-music-player"></i>
                                    <p>Pop</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-lg-3"> 
                            <div className="counter-box"> 
                                <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                    <i className="icofont-retro-music-disk"></i>
                                    <p>Metal</p>
                                </ScrollAnimation>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
