import React from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import WhySmartchainBanner from "../components/whySmartchainBanner"


const Mission = () => (
    <Layout>
     
        <SEO title="Our Mission" />
        <WhySmartchainBanner 
            description = "Our Mission"
            regulartext = "At Shoptaki, we are taking the concept of blockchain to the next level, which will revolutionize the way we handle data and harness the power of A.I. We believe that people have the right to own their data - in a future where everything is connected, streamlined, and autonomous. The belief that technology can benefit humanity, not replace it, is at the core of Shoptaki. Here at Shoptaki, our mission is to help make the world a better, more efficient, and safer place for all."
        />
        </Layout>
)

export default Mission;