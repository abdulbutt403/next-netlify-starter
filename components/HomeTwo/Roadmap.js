import React from 'react';
import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Blog extends React.Component {
    render() {
        return (
            <section id="roadmap" className="blog-section angle-sp"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={30} animateOnce={true}>
                                <div className="section-title"> 
                                    <h2>STARCOIN Roadmap at a Glance</h2>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 col-lg-4"> 
                            <div className="single-blog-post sm-one-col">
                                <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                    <div className="blog-img">
                                                <img src="/images/roadmap1.png" alt="Blog Post Image" />
                                        <div className="blog-date">August/September 2021</div>
                                    </div>
                                    
                                    <div className="blog-info">         
                                        <h6 className="blog-title">
                                        
                                        </h6>
                                        <div className="post-admin">
                                        <p>
                                            <li>Website Version 1 <img src="/images/greenCheck1.png" width="15px" /></li>
                                            <li>Social Media Created <img src="/images/greenCheck1.png" width="15px" /></li>
                                            <li>Contract Creation <img src="/images/greenCheck1.png" width="15px" /></li>
                                        </p>
                                            
                                        </div>

                                      
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                        
                        <div className="col-md-12 col-lg-4"> 
                            <div className="single-blog-post sm-one-col">
                                <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                    <div className="blog-img">
                                                <img src="/images/blog/2.jpg" alt="Blog Post Image" />
                                        <div className="blog-date">October 2021</div>
                                    </div>
                                    
                                    <div className="blog-info">         
                                        <h6 className="blog-title">
                                            
                                        </h6>
                                        <div className="post-admin">
                                        <p>
                                            <li>Contract Audit <img src="/images/greenCheck1.png" width="15px" /></li>
                                            <li>Official Token Launch</li>
                                            <li>CoinGecko Listing</li>
                                            <li>CoinMarketCap Listing</li>
                                            <li>Platform ready for Music uploads</li>
                                            <li>Announce genre for competition</li>
                                            <li>Announce record label partner</li>
                                            <li>Announce winners contract amount</li>
                                        </p>
                                            
                                        </div>
                                   
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                        
                        <div className="col-md-12 col-lg-4"> 
                            <div className="single-blog-post sm-one-col">
                                <ScrollAnimation animateIn="fadeInUp" delay={150} animateOnce={true}>
                                    <div className="blog-img">
                                                <img src="/images/blog/2.jpg" alt="Blog Post Image" />
                                        <div className="blog-date">November 2021</div>
                                    </div>
                                    
                                    <div className="blog-info">         
                                        <h6 className="blog-title">
                                            
                                        </h6>
                                        <div className="post-admin">
                                        <p>
                                            <li>select Winning Artist</li>
                                            <br/>
                                            <b>Q4 2021</b>
                                            <br/>
                                            <li>NFT Marketplace v1</li>
                                            <li>Exclusive NFT of signed artist release</li>
                                            <li>Development of first signed artist</li>
                                            <li>Additional Exchange Listings</li>
                                            <li>Marketing and partnerships</li>
                                        </p>
                                            
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>  
            </section>
        )
    }
}
