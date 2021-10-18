import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

export default class AppDownload extends React.Component {
    render() {
        return (
            <section id="app-download" className="app-download-section angle-download-section"> 
                <div className="container"> 

                    
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <div className="app-download-content">
                                <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                    <a href="https://www.apple.com/app-store/" className="download-btn" target="_blank">
                                        <i className="icofont-brand-apple"></i>
                                        <span>
                                            Coming Soon to
                                            <span className="large-text">App Store</span>
                                        </span>
                                    </a>
                                
                                    <a href="https://play.google.com/store/apps" className="download-btn" target="_blank">
                                        <i className="icofont-brand-android-robot"></i>
                                        <span>
                                            Coming Soon to
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
