import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class AppDownload extends React.Component {
    render() {
        return (
            <section id="app-download" className="app-download-section wave-one-download-section"> 
                <div className="wave-bg-section-tb-one"></div>
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <div className="section-title"> 
                                <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                    <h2>NOW AVAILABLE</h2>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </ScrollAnimation>
                            </div> 
                        </div>
                    </div>
                    
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <div className="app-download-content">
                                <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                    <a href="https://www.apple.com/app-store/" className="download-btn" target="_blank">
                                        <i className="icofont-brand-apple"></i>
                                        <span>
                                            available on
                                            <span className="large-text">App Store</span>
                                        </span>
                                    </a>
                                
                                    <a href="https://play.google.com/store/apps" className="download-btn" target="_blank">
                                        <i className="icofont-brand-android-robot"></i>
                                        <span>
                                            available on
                                            <span className="large-text">Play Store</span>
                                        </span>
                                    </a>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
