import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Features extends React.Component {
    render() {
        return (
            <section id="features" className="awsome-features"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={30} animateOnce={true}>
                                <div className="section-title"> 
                                    <h2>Awsome Features</h2>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="row"> 
                        <div className="col-md-6 col-lg-4"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <i className="icofont-sun"></i>
                                    </div>
                                    <h4>High Resolution</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
            
                        <div className="col-md-6 col-lg-4"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <i className="icofont-light-bulb"></i>
                                    </div>
                                    <h4>Unique Design</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-md-6 col-lg-4"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <i className="icofont-imac"></i>
                                    </div>
                                    <h4>Full Responsive</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-md-6 col-lg-4"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={200} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <i className="icofont-code-alt"></i>
                                    </div>
                                    <h4>CLEAN CODES</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-md-6 col-lg-4"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={250} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <i className="icofont-eye"></i>
                                    </div>
                                    <h4>RETINA READY</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-md-6 col-lg-4"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={300} animateOnce={true}>
                                <div className="single-feature"> 
                                    <div className="feature-icon">
                                        <i className="icofont-space-shuttle"></i>
                                    </div>
                                    <h4>UNLIMITED FEATURES</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div> 
            </section>
        )
    }
}
