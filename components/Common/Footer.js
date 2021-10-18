import React from 'react'
import Link from 'next/link';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer"> 
                <div className="footer-top">
                    <div className="container"> 
                        <div className="row"> 
                            <div className="col-lg-12"> 
                                <div className="subscribe-text">
                                    <h3>Subscribe to the STARCOIN Newsletter</h3>
                                    <p>Sign up to get all the latest and greaatest STARCOIN news, learn about access to special events, upcoming competions/genres and much more.</p>
                                </div>
                                
                                <div className="subscribe-form">
                                    <form className="newsletter-form">
                                        <input type="email" className="form-control" placeholder="Enter your email address" name="EMAIL" required />

                                        <button type="submit" className="btn subscribe-btn">
                                            <i className="icofont-paper-plane"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="container"> 
                        <div className="row"> 
                            <div className="col-md-6 col-lg-6"> 
                                <p className="copyright">Copyright @2021 STARCOIN.NETWORK. </p>
                            </div>

                            <div className="col-md-6 col-lg-6"> 
                                <ul className="social-links"> 
                                    <li>Follow us :</li>
                                    <li>
                                        <a href="https://t.me/StarCoinNetwork" target="_blank">
                                            <i className="icofont-telegram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/StarCoinNetwork" target="_blank">
                                            <i className="icofont-twitter"></i>
                                        </a>
                                    </li> 
                                    <li>
                                        <a href="https://instagram.com/starcoinnetwork" target="_blank">
                                            <i className="icofont-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://medium.com/@StarCoinNetwork" target="_blank">
                                            <i className="icofont-brand-mcdonals"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto: contact@starcoin.network">
                                            <i className="icofont-email"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
