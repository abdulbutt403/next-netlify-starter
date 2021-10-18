import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Navigation from '../components/Navigation/Navigation';
import Loader from '../components/Shared/Loader';
import Slider from '../components/HomeSixteen/Slider';
import About from '../components/HomeTwo/About';
import HowItWorks from '../components/HomeSixteen/HowItWorks';
import Features from '../components/HomeTwo/Features';
import Counter from '../components/HomeSixteen/Counter';
import Screenshots from '../components/Common/Screenshots';
import Testimonial from '../components/HomeSixteen/Testimonial';
import Pricing from '../components/HomeSixteen/Pricing';
import Faq from '../components/HomeSixteen/Faq';
import Team from '../components/HomeSixteen/Team';
import AppDownload from '../components/HomeSixteen/AppDownload';
import Blog from '../components/HomeSixteen/Blog';
import Contact from '../components/HomeSixteen/Contact';
import Footer from '../components/Common/Footer';
import GoTop from '../components/Common/GoTop';

class Index extends React.Component {
    render(){
        return(
            <NoSSR key="1">
                <Preloader fadeDuration={1000}>

                    <Navigation />

                    <Slider />

                    <About />

                    <HowItWorks />

                    <Features />

                    <Counter />

                    <Screenshots />

                    <Testimonial />

                    <Pricing />

                    <Faq />

                    <Team />

                    <AppDownload />

                    <Blog />

                    <Contact />

                    <Footer />

                    <GoTop scrollStepInPx="50" delayInMs="16.66" />

                    <Placeholder>
                        <Loader />
                    </Placeholder>
                    
                </Preloader>
            </NoSSR>
        );
    }
}

export default Index;