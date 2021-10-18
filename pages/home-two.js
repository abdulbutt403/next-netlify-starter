import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Navigation from '../components/Navigation/Navigation';
import Loader from '../components/Shared/Loader';
import Slider from '../components/HomeTwo/Slider';
import About from '../components/HomeTwo/About';
import HowItWorks from '../components/HomeTwo/HowItWorks';
import Features from '../components/HomeTwo/Features';
import Counter from '../components/HomeTwo/Counter';
import Screenshots from '../components/Common/Screenshots';
import Testimonial from '../components/HomeTwo/Testimonial';
import Pricing from '../components/HomeTwo/Pricing';
import Faq from '../components/Common/Faq';
import Team from '../components/HomeTwo/Team';
import AppDownload from '../components/HomeTwo/AppDownload';
import Blog from '../components/HomeTwo/Blog';
import Contact from '../components/Common/Contact';
import Footer from '../components/Common/Footer';
import GoTop from '../components/Common/GoTop';
import AppUsers from '../components/HomeTwo/AppUsers';

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