import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends React.Component {
    render(){
        return (
            <section id="about" className="app-about-section angle-gray-bg"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={20} animateOnce={true}>
                                <div className="section-title angle-section-title"> 
                                    <h2>About STARCOIN</h2>
                                    <p>StarCoin will to be the first cryptocurrency partnered with a record label that will offer holders the opportunity to be signed to a record contract.  Each month (subject to change), a different genre will be chosen, and the community will have the opportunity to vote for their favorite artists in that category for a life changing record label deal.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="row align-items-center"> 
                        <div className="col-lg-7"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="app-about-text"> 
                                    <h3>How do I Enter the contest?</h3>
                                    <p></p>
                                    <p>All Artists are able to join, for free, using our platform. It is required to register with real inforamtion, so we know who each person is should you become a finalist, or even just to promote yourself.</p> 
                                    <p>Follow the link below to start the simple process of creating an account, uploading your music and you will be entered. Good Luck !!</p>
                                    
                                    <ul> 
                                        <li><i className="icofont-verification-check"></i> Multiple Genres</li>
                                        <li><i className="icofont-verification-check"></i> 30 day Competition</li>
                                        <li><i className="icofont-verification-check"></i> LIFE CHANGING</li>
                                    </ul>

                                    <a href="#app-download" className="default-button">
                                        <i className="icofont-cloud-download"></i> 
                                        UPLOAD Music Now
                                    </a>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-lg-5"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                <div className="text-center"> 
                                    <img src="/images/gold_coin_1.png" alt="STARCOIN" />
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;