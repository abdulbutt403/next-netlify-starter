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
                                    <i className="icofont-users"></i>
                                    <p>Users</p>
                                    <h3 className="counter-number">2900</h3>
                                </ScrollAnimation>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-lg-3"> 
                            <div className="counter-box"> 
                                <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                    <i className="icofont-heart-alt"></i>
                                    <p>Happy Clients</p>
                                    <h3 className="counter-number">2099</h3>
                                </ScrollAnimation>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-lg-3"> 
                            <div className="counter-box"> 
                                <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                    <i className="icofont-ui-rating"></i>
                                    <p>Reviews</p>
                                    <h3 className="counter-number">1999</h3>
                                </ScrollAnimation>
                            </div>
                        </div>
                        
                        <div className="col-sm-6 col-lg-3"> 
                            <div className="counter-box"> 
                                <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                    <i className="icofont-cloud-download"></i>
                                    <p>App Downloads</p>
                                    <h3 className="counter-number">7899</h3>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
