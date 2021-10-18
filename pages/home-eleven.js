import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Navigation from '../components/Navigation/Navigation';
import Loader from '../components/Shared/Loader';
import Slider from '../components/HomeEleven/Slider';
import About from '../components/HomeEleven/About';
import HowItWorks from '../components/HomeEleven/HowItWorks';
import Features from '../components/HomeEleven/Features';
import Counter from '../components/HomeEleven/Counter';
import Screenshots from '../components/Common/Screenshots';
import Testimonial from '../components/HomeEleven/Testimonial';
import Pricing from '../components/HomeEleven/Pricing';
import Faq from '../components/HomeEleven/Faq';
import Team from '../components/HomeEleven/Team';
import AppDownload from '../components/HomeEleven/AppDownload';
import Blog from '../components/HomeEleven/Blog';
import Contact from '../components/HomeEleven/Contact';
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

                    <div className="pb-70">
                        <Blog />
                    </div>

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