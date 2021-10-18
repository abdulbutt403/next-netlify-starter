import React from 'react';
import { Preloader, Placeholder } from 'react-preloading-screen';
import NoSSR from 'react-no-ssr';
import Navigation from '../components/Navigation/Navigation';
import Loader from '../components/Shared/Loader';
import Slider from '../components/HomeFourteen/Slider';
import About from '../components/HomeTwo/About';
import Tokenomics from '../components/HomeTwo/Tokenomics';
import Faq from '../components/HomeTwo/Faq';
import Screenshots from '../components/Common/Screenshots';

import Team from '../components/HomeTwo/Team';
import AppDownload from '../components/HomeTwo/AppDownload';
import Roadmap from '../components/HomeTwo/Roadmap';
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

                    <Tokenomics />

                    <Faq />

                    <Screenshots />




                    <Team />

                    <AppDownload />

                    <Roadmap />


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