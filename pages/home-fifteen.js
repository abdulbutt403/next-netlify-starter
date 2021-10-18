import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Navigation from '../components/Navigation/Navigation';
import Loader from '../components/Shared/Loader';
import Slider from '../components/HomeFifteen/Slider';
import About from '../components/HomeTwo/About';
import HowItWorks from '../components/HomeFifteen/HowItWorks';
import Features from '../components/HomeTwo/Features';
import Counter from '../components/HomeFifteen/Counter';
import Screenshots from '../components/Common/Screenshots';
import Testimonial from '../components/HomeFifteen/Testimonial';
import Pricing from '../components/HomeFifteen/Pricing';
import Faq from '../components/HomeFifteen/Faq';
import Team from '../components/HomeFifteen/Team';
import AppDownload from '../components/HomeFifteen/AppDownload';
import Blog from '../components/HomeFifteen/Blog';
import Contact from '../components/HomeFifteen/Contact';
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