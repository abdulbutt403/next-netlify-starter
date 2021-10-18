import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import VisibilitySensor from "react-visibility-sensor";

const options = {
    items: 1,
    nav: true,
    dots: false,
    touchDrag: false,
    mouseDrag: true,
    autoplay: false,
    autoplayHoverPause: true,
    loop: true,
    navText: [
        "<i class='icofont-long-arrow-left'></i>", 
        "<i class='icofont-long-arrow-right'></i>"
    ]
}

class Slider extends React.Component {
    render() {
        return (
            <div id="home" className="hompage-slides-wrapper video-bg angle-slides-wrapper-bg">


                <OwlCarousel 
                    className="homepage-slides owl-carousel owl-theme"
                    {...options}
                >
                    {this.props.slideData.map((data, idx) => (
                        <div className="single-slider-item" key={idx}>
                            <div className="slide-item-table">
                                <div className="slide-item-tablecell">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-md-12 col-lg-7">
                                                <VisibilitySensor>
                                                    {({ isVisible }) => (
                                                        <div className="slider-text">
                                                            <h1
                                                                className={
                                                                    isVisible
                                                                        ? "animated fadeInUp slow opacityOne" : ''
                                                                }
                                                            >
                                                                { data.heading }
                                                            </h1>
                                                            <p
                                                                className={
                                                                    isVisible
                                                                        ? "animated fadeInUp slow opacityOne" : ''
                                                                }
                                                            >
                                                                { data.text }
                                                            </p>
                                                            
                                                            <div className="slide-button">
                                                                <a 
                                                                    href="https://pancakeswap.finance/swap#/swap" TARGET="_BLANK" 
                                                                    className={`
                                                                        slide-btn-white mr-10 ${isVisible ? "animated fadeInDown slow opacityOne" : ""}
                                                                    `}
                                                                >
                                                                    <i className="icofont-space-shuttle"></i> 
                                                                    BUY NOW
                                                                </a>
                                                                <a 
                                                                    href="#" 
                                                                    className={`
                                                                        slide-btn-bordered ${isVisible ? "animated fadeInDown slow opacityOne" : ""}
                                                                    `}
                                                                >
                                                                     <i className="icofont-eye"></i> 
                                                                     &nbsp;WHITEPAPER
                                                                </a>
                                                            </div>
                                                        </div>
                                                    )}
                                                </VisibilitySensor>
                                            </div>

                                            <div className="col-md-12 col-lg-5">
                                                <div className="welcome-phone">
                                                    <img src="/images/silver_coin_1.png" alt="STARCOIN" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div> 
        )
    }
}

Slider.defaultProps = {
    slideData: [
        {
            heading: "The First Crypto Backed Record Label Contract",
            text: "StarCoin’s will offer the biggest record deal in history for a first-time record deal. StarCoin and a record label will sign and fund an artist with the funds generated through transactions for the token, allowing free use of funds for the artist and label without fear of repayment."
        },
        {
            heading: "StarCoin is Disrupting the Music Industry",
            text: "StarCoin will be the first cryptocurrency partnered with a record label that will offer holders the opportunity to be signed to a record contract."
        }
    ]
}

export default Slider;