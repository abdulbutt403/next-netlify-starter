import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

export default class Faq extends React.Component {
    render() {
        return (
            <section id="faqs" className="faqs-section angle-gray-bg"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-lg-12"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={30} animateOnce={true}>
                                <div className="section-title"> 
                                    <h2>Frequently Asked Questions</h2>
                                    <p>Do you have Questions? We have the answers!</p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    
                    <div className="row align-items-center"> 
                        <div className="col-lg-5"> 
                            <ScrollAnimation animateIn="fadeInUp" delay={50} animateOnce={true}>
                                <div className="text-center">
                                    <img src="/images/faq-img.png" alt="Faq Image" />
                                </div>
                            </ScrollAnimation>
                        </div>
                        
                        <div className="col-lg-7"> 
                            <div className="faq-content">
                                <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                    <Accordion allowZeroExpanded preExpanded={['']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>1.</span> When is StarCoin Launching? 
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    If you are reading this, WE HAVE ALREADY LAUNCHED. Welcome to the StarCoin.network family!
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>2.</span>  Where can I purchase StarCoin?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    StarCoin is available on <a href="https://pancakeswap.finance/swap#/swap">PancakeSwap</a> now, and will also soon be available right here on our website, on our own DEX which is paunching any day.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>3.</span>  What Slippage do I need to purchase StarCoin?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Due to our low 8% tax, a minimum of 9% slippage should be applied for any transactions on PancakeSwap.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="d">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>4.</span>  What is the total supply of StarCoin?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                The Max Total Supply is 100,000,000 STAR tokens. No more coins can ever be created.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="e">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>5.</span>  What is the Binance Smart Chain (BSC) Contract Address for STAR?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    The STAR Contract Address is: 0x00000000000000000000000000.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="f">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>6.</span>  Who can enter the StarCoin music competition?
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    The Contest is open to EVERYONE, EVERYWHERE. We encourage you to create an account, upload your music and be part of becoming a STAR !
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
