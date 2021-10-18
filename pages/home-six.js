import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Navigation from '../components/Navigation/Navigation';
import Loader from '../components/Shared/Loader';
import Slider from '../components/HomeSix/Slider';
import About from '../components/HomeSix/About';
import HowItWorks from '../components/HomeSix/HowItWorks';
import Features from '../components/HomeSix/Features';
import Counter from '../components/HomeSix/Counter';
import Screenshots from '../components/Common/Screenshots';
import Testimonial from '../components/HomeSix/Testimonial';
import Pricing from '../components/HomeSix/Pricing';
import Faq from '../components/HomeSix/Faq';
import Team from '../components/HomeSix/Team';
import AppDownload from '../components/HomeSix/AppDownload';
import Blog from '../components/HomeSix/Blog';
import Contact from '../components/HomeSix/Contact';
import Footer from '../components/Common/Footer';
import GoTop from '../components/Common/GoTop';
import AppUsers from '../components/HomeSix/AppUsers';

class Index extends React.Component {
    render(){
        return(
            <NoSSR key="1">
                <Preloader fadeDuration={1000}>

                    <Navigation />

                    <Slider />

                    <AppUsers />

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