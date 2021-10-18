import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'

export default class Navigation extends Component {

    _isMounted = false;

    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("menu-shrink");
            } else {
                elementId.classList.remove("menu-shrink");
            }
        });
        window.scrollTo(0, 0);

        if (!(window.location.pathname === '/details-one' || window.location.pathname === '/details-two' || window.location.pathname === '/blog-one' || window.location.pathname === '/blog-two' || window.location.pathname === '/blog-three')){
            let mainNavLinks = document.querySelectorAll("nav ul li a");
            
            window.addEventListener("scroll", () => {
                let fromTop = window.scrollY;
            
                mainNavLinks.forEach(link => {
                    let section = document.querySelector(link.hash);
            
                    if (
                        section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            });
        }
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    renderMenus = () => {
        // For external pages like blog & blog details
        if (window.location.pathname === '/details-one' || 
            window.location.pathname === '/details-two' || 
            window.location.pathname === '/blog-one' || 
            window.location.pathname === '/blog-two' || 
            window.location.pathname === '/blog-three'){
            return(
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/">
                            <a
                                onClick={this.toggleNavbar} 
                                className="nav-link"
                            >
                                Home
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a
                                onClick={this.toggleNavbar} 
                                className="nav-link" 
                            >
                                About
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a
                                onClick={this.toggleNavbar} w
                                className="nav-link" 
                            >
                                Tokenomics
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a
                                onClick={this.toggleNavbar} 
                                className="nav-link" 
                            >
                                Roadmap
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a
                                onClick={this.toggleNavbar} 
                                className="nav-link" 
                            >
                                FAQs
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a
                                onClick={this.toggleNavbar} 
                                className="nav-link" 
                            >
                                Vote
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/">
                            <a
                                onClick={this.toggleNavbar} 
                                className="nav-link" 
                            >
                                Login
                            </a>
                        </Link>
                    </li>

                </ul>
            );
        }

        return(
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <AnchorLink 
                        onClick={this.toggleNavbar} 
                        offset={() => 100} 
                        className="nav-link active" 
                        href="#home"
                    >
                        Home
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink 
                        onClick={this.toggleNavbar} 
                        offset={() => -30} 
                        className="nav-link" 
                        href="#about"
                    >
                        About
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink 
                        onClick={this.toggleNavbar} 
                        offset={() => -30} 
                        className="nav-link" 
                        href="#how-it-works"
                    >
                        Tokenomics
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink 
                        onClick={this.toggleNavbar} 
                        offset={() => -30} 
                        className="nav-link" 
                        href="#roadmap"
                    >
                        Roadmap
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink 
                        onClick={this.toggleNavbar} 
                        offset={() => -30} 
                        className="nav-link" 
                        href="#faqs"
                    >
                        FAQs
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <AnchorLink 
                        onClick={this.toggleNavbar} 
                        offset={() => -30} 
                        className="nav-link" 
                        href="#faqs"
                    >
                        Vote
                    </AnchorLink>
                </li>
                <li className="nav-item">
                    <button 
                        onClick={() => {window.location.href = "/login"}} 
                        offset={() => -30} 
                        className="btn-nav-link" 
                        href="#faqs"
                    >
                        Login
                    </button>
                </li>
                <li className="nav-item">
                    <button 
                        onClick={() => {window.location.href = "/register"}} 
                        offset={() => -30} 
                        className="btn-nav-link bg" 
                        href="#faqs"
                    >
                        Register
                    </button>
                </li>
                
            </ul>
        );
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <div>
                <nav id="navbar" className="navbar fixed-top navbar-expand-md navbar-light top-menu">
                    <div className="container">
                        <a className="navbar-brand2" href="/">
                            STARCOIN.NETWORK
                        </a>

                        <button 
                            onClick={this.toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            { this.renderMenus() }
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
