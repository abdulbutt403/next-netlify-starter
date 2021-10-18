import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Navigation from '../components/Navigation/Navigation';
import Loader from '../components/Shared/Loader';
import Slider from '../components/HomeOne/Slider';
import About from '../components/HomeOne/About';
import HowItWorks from '../components/HomeOne/HowItWorks';
import Features from '../components/HomeOne/Features';
import Counter from '../components/HomeOne/Counter';
import Screenshots from '../components/Common/Screenshots';
import Testimonial from '../components/HomeOne/Testimonial';
import Pricing from '../components/HomeOne/Pricing';
import Faq from '../components/Common/Faq';
import Team from '../components/HomeOne/Team';
import AppDownload from '../components/HomeOne/AppDownload';
import Blog from '../components/HomeOne/Blog';
import Contact from '../components/Common/Contact';
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