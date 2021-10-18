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
            <section id="how-it-works" className="how-it-works wave-one-how-it-works gray-bg"> 
                <div className="wave-bg-section-tb-one"></div>
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={30} animateOnce={true}>
                                <div className="section-title"> 
                                    <h2>How it works?</h2>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="row align-items-center"> 
                        <div className="col-lg-6"> 
                            <div className="hiw-feature-content"> 
                                <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                    <div className="single-hiw-feature"> 
                                        <i className="icofont icofont-login"></i>
                                        <h4>Login First</h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
                                </ScrollAnimation>
                                
                                <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                    <div className="single-hiw-feature"> 
                                        <i className="icofont icofont-test-tube-alt"></i>
                                        <h4>Face Testing</h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
                                </ScrollAnimation>
                                
                                <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                    <div className="single-hiw-feature"> 
                                        <i className="icofont-chart-histogram-alt"></i>
                                        <h4>Data Analysis</h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
                                </ScrollAnimation>
                                
                                <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                    <div className="single-hiw-feature"> 
                                        <i className="icofont-light-bulb"></i>
                                        <h4>Show Result</h4>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                        
                        <div className="col-lg-5 offset-lg-1"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={250} animateOnce={true}>
                                <div className="video-demo-content"> 
                                    <img src="/images/video-demo.jpg" alt="Video Demo Image" className="img-circle" />
                                    <div className="play-video-icon">
                                        
                                        <Link href="#">
                                            <a 
                                                onClick={e => {e.preventDefault(); this.openModal()}}
                                                className="popup-youtube"
                                            >
                                                <i className="icofont-play"></i>
                                                <div className="sonar-wrapper">
                                                    <div className="sonar-emitter">
                                                        <div className="sonar-wave"></div>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>

                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                        <ModalVideo 
                            channel='youtube' 
                            isOpen={this.state.isOpen} 
                            videoId='szuchBiLrEM' 
                            onClose={() => this.setState({isOpen: false})} 
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default HowItWorks;