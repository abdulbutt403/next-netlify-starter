import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class HowItWorks extends React.Component {
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    render() {
        return (
            <section id="how-it-works" className="how-it-works angle-gray-bg"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={30} animateOnce={true}>
                                <div className="section-title"> 
                                    <h2>TOKENOMICS AT A GLANCE</h2>
                                    <p>StarCoin Token is a BEP20 token built on the Binance Smart Chain.</p>
                                    <p>Contract Address will be shared upon launch</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="row"> 
                        <div className="col-md-6 col-lg-6"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <i className="icofont-star"></i>
                                    </div>
                                    <h4>Token Name</h4>
                                    <p>StarCoin (STAR)</p>
                                </div>
                            </ScrollAnimation>
                        </div>
            
                        <div className="col-md-6 col-lg-6"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <i className="icofont-network"></i>
                                    </div>
                                    <h4>Network</h4>
                                    <p>Binance Smart Chain (BSC)</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-md-6 col-lg-6"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <i className="icofont-coins"></i>
                                    </div>
                                    <h4>Total STAR Supply</h4>
                                    <p>100 Million Tokens</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-md-6 col-lg-6"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <i className="icofont-square-root"></i>
                                    </div>
                                    <h4>TAX</h4>
                                    <p>8%</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-md-6 col-lg-6"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={250} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <i className="icofont-people"></i>
                                    </div>
                                    <h4>Team Tokens</h4>
                                    <p>Zero</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-md-6 col-lg-6"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <i className="icofont-space-shuttle"></i>
                                    </div>
                                    <h4>Circulating Tokens</h4>
                                    <p>35%</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div> 
            </section>
        );
    }
}

export default HowItWorks;