import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Navigation from '../components/Navigation/Navigation';
import Loader from '../components/Shared/Loader';
import Slider from '../components/HomeSeven/Slider';
import About from '../components/HomeThree/About';
import HowItWorks from '../components/HomeThree/HowItWorks';
import Features from '../components/HomeThree/Features';
import Counter from '../components/HomeThree/Counter';
import Screenshots from '../components/Common/Screenshots';
import Testimonial from '../components/HomeThree/Testimonial';
import Pricing from '../components/HomeThree/Pricing';
import Faq from '../components/Common/Faq';
import Team from '../components/HomeThree/Team';
import AppDownload from '../components/HomeThree/AppDownload';
import Blog from '../components/HomeThree/Blog';
import Contact from '../components/HomeSeven/Contact';
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