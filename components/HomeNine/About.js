import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends React.Component {
    render(){
        return (
            <section id="about" className="app-about-section"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={30} animateOnce={true}>
                                <div className="section-title"> 
                                    <h2>About Our App</h2>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="row align-items-center"> 
                        <div className="col-lg-7"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="app-about-text"> 
                                    <h3>Best Mobile App</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> 
                                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                    
                                    <ul> 
                                        <li><i className="icofont-verification-check"></i> Responsive design</li>
                                        <li><i className="icofont-verification-check"></i> Easy to customize</li>
                                        <li><i className="icofont-verification-check"></i> Modern design</li>
                                    </ul>

                                    <a href="#app-download" className="default-button">
                                        <i className="icofont-cloud-download"></i> 
                                        Download Now
                                    </a>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-lg-5"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="text-center"> 
                                    <img src="/images/app-about.jpg" alt="App About Image" />
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