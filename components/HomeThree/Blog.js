import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Blog extends React.Component {
    render() {
        return (
            <section id="blog" className="blog-section"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={30} animateOnce={true}>
                                <div className="section-title"> 
                                    <h2>Latest Blog Post</h2>
                                    <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit amet, consectetur adipisicing incididunt.</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="single-blog-post-two sm-one-col">
                                    <div className="blog-img">
                                        <Link href="/details-two">
                                            <a onClick={() => window.location.refresh()}>
                                                <img src="/images/blog/1.jpg" alt="Blog Post Image" />
                                            </a>
                                        </Link>
                                        <div className="post_date">20 <br /> Oct</div>
                                    </div>
                                    
                                    <div className="blog-info">         
                                        <h6 className="blog-title">
                                            <Link href="/details-two">
                                                <a onClick={() => window.location.refresh()}>Awesome app landing page</a>
                                            </Link>
                                        </h6>

                                        <p>Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient.  
                                        Erat tristique nonummy etiam, fusce est porttitor...</p>
                                        
                                        <Link href="/details-two">
                                            <a onClick={() => window.location.refresh()} className="default-button">
                                                Read More 
                                                <i className="icofont-swoosh-right"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-lg-4"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="single-blog-post-two sm-one-col">
                                    <div className="blog-img">
                                        <Link href="/details-two">
                                            <a onClick={() => window.location.refresh()}>
                                                <img src="/images/blog/2.jpg" alt="Blog Post Image" />
                                            </a>
                                        </Link>
                                        <div className="post_date">20 <br /> Oct</div>
                                    </div>
                                    
                                    <div className="blog-info">         
                                        <h6 className="blog-title">
                                            <Link href="/details-two">
                                                <a onClick={() => window.location.refresh()}>Awesome app landing page</a>
                                            </Link>
                                        </h6>

                                        <p>Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient.  
                                        Erat tristique nonummy etiam, fusce est porttitor...</p>
                                        
                                        <Link href="/details-two">
                                            <a onClick={() => window.location.refresh()} className="default-button">
                                                Read More 
                                                <i className="icofont-swoosh-right"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-lg-4"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                <div className="single-blog-post-two sm-one-col">
                                    <div className="blog-img">
                                        <Link href="/details-two">
                                            <a onClick={() => window.location.refresh()}>
                                                <img src="/images/blog/2.jpg" alt="Blog Post Image" />
                                            </a>
                                        </Link>
                                        <div className="post_date">20 <br /> Oct</div>
                                    </div>
                                    
                                    <div className="blog-info">         
                                        <h6 className="blog-title">
                                            <Link href="/details-two">
                                                <a onClick={() => window.location.refresh()}>Awesome app landing page</a>
                                            </Link>
                                        </h6>

                                        <p>Aliquet id lacinia ultricies odio, neque ipsum facilisis parturient.  
                                        Erat tristique nonummy etiam, fusce est porttitor...</p>
                                        
                                        <Link href="/details-two">
                                            <a onClick={() => window.location.refresh()} className="default-button">
                                                Read More 
                                                <i className="icofont-swoosh-right"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>  
            </section>
        )
    }
}
