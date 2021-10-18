import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Navigation from '../components/Navigation/Navigation';
import Loader from '../components/Shared/Loader';
import Slider from '../components/HomeTen/Slider';
import About from '../components/HomeTen/About';
import HowItWorks from '../components/HomeTen/HowItWorks';
import Features from '../components/HomeTen/Features';
import Counter from '../components/HomeTen/Counter';
import Screenshots from '../components/Common/Screenshots';
import Testimonial from '../components/HomeTen/Testimonial';
import Pricing from '../components/HomeTen/Pricing';
import Faq from '../components/HomeTen/Faq';
import Team from '../components/HomeTen/Team';
import AppDownload from '../components/HomeTen/AppDownload';
import Blog from '../components/HomeTen/Blog';
import Contact from '../components/HomeTen/Contact';
import Footer from '../components/Common/Footer';
import GoTop from '../components/Common/GoTop';
import AppUsers from '../components/HomeTen/AppUsers';

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