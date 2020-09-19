import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import WhySmartchainBanner from "../components/whySmartchainBanner.jsx"
import Slogan from "../components/Slogan.jsx"

import Contact from "../components/ContactUsSection.jsx"

import DifferentiateCard from "../components/differentiateCard.jsx"
import FeatureCard from "../components/featureCard.jsx"

import AboutUsCards from "../components/AboutUsCards.jsx"



const WhySmartchain = () => (
    <Layout>
     
        <SEO title="Why Smartchain?" />
        <WhySmartchainBanner 
            title = "We are not blockchain."
            subtitle = "We are the future."
            description = "We are a system where collaborative AI meets quantum resistance security."
        />

        <Slogan
            title="What is Smartchain?"
            description="Smartchain is a completely new type of technology. In the form of a multipurpose ecosystem, it revolutionizes concepts of blockchain with the help of collaborative artificial intelligence to bridge the gaps in effective management and implementation."
            color="orange"
            paddingM={"5rem"}
        />

        <AboutUsCards />
        <DifferentiateCard />
        <FeatureCard />

        <Contact />
    </Layout>
)

export default WhySmartchain;
