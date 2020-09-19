import React, { useRef } from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import SmartIDCard from "../components/smartIDCard.jsx"
import FinancialPlatformCard from "../components/FinancialPlatformCard.jsx"
import SmallCards from "../components/smallCards.jsx"
import Contact from "../components/ContactUsSection.jsx"
import WhySmartchainBanner from "../components/whySmartchainBanner"
import UniversalBenefits from "../components/UniversalBenefits.jsx"

const Products = () => {
    const SIDCRef = useRef();
    const FPCRef = useRef();

    const scrollHandler = (id) => {
        if (id === "SID" && SIDCRef.current)
            scrollToRef(SIDCRef.current);

        if (id === "FPC" && FPCRef.current)
            scrollToRef(FPCRef.current);
    }

    const scrollToRef = (currentRef) => currentRef.scrollIntoView();
    
    return (
        <Layout>
            <SEO title="Why Smartchain?" />
            <WhySmartchainBanner 
                title = "Pioneering the Data Singularity"
                description = "A secure and competitive global system for data"
            />

            <UniversalBenefits />
            <SmallCards scrollHandler={scrollHandler} />
            <SmartIDCard  ref={SIDCRef} />
            <FinancialPlatformCard ref={FPCRef} />
            <Contact />
            
        </Layout>
    )
}

export default Products;