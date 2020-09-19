import React from "react"
import styled from "styled-components"
import TitleLiner from "./titleliner.jsx"
import {theme} from "../theme/GlobalStyles.js"
import cloudImage from "../images/whysmartchain_cloud.png"
import head from "../images/whysmartchain_head.png"


const AboutUsContainer = styled.div`
  padding: 2em;
  margin-top: 22em;
  @media (max-width: ${theme.mobile}){
    display: flex;
    flex-direction: column;
    margin-top: 18rem;
  }
`;
const CardContainer = styled.div`
  text-align: left;
  width: 45%;
  padding: 2.5em;
  background-color: #fff;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  @media (max-width: ${theme.mobile}){
    text-align: center;
    width: 100%;
    padding: 3rem 0 0 0;
    box-shadow: none;
    order: 2;
  }
`;
const CloudImageContainer = styled.div`
  max-width: 20rem;
  margin-left: 3em;
  @media (max-width: ${theme.mobile}){
    margin: 0;
  }
`;
const HeadImageContainer = styled.div`
  max-width: 20rem;
  margin-right: 3em;
  @media (max-width: ${theme.mobile}){
    margin: 0;
  }
`;
const HeaderTitle = styled.div`
  font-weight: "Myriad Pro Light";
  font-size: 1.75em;
`;
const RowContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  @media (max-width: ${theme.mobile}){
    padding: 2.5em;
    margin: 2em auto;
    width: auto;
    background-color: #fff;
    box-shadow: 0.2rem 0.2rem 0.5rem #999999;
    flex-direction: column;
  }
`;
const Text = styled.p`
  padding-top: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  @media (max-width: ${theme.mobile}){
    padding-top: 1.5em;
  }
`

const AdaptableCloud = () => (
  <RowContainer>
    <CardContainer>
        <HeaderTitle>Adaptable Cloud Infrastructure</HeaderTitle>
        <TitleLiner color="blue" />
        <Text>Smartchain adapts to legacy systems and 
        integrates into both cloud and physical computing 
        architecture.
        </Text>
    </CardContainer>
    <CloudImageContainer>
      <img src={cloudImage} alt="Cloud Computing" style={{maxWidth: "100%"}} />
    </CloudImageContainer>
  </RowContainer>
)

const HowItWorks = () => (
  <RowContainer>
    <HeadImageContainer>
          <img src={head} alt="Autonomous and Effecient Processing" style={{maxWidth: "100%"}} />
    </HeadImageContainer>
    <CardContainer>
          <HeaderTitle>How It Works?</HeaderTitle>
          <TitleLiner color="blue" />
          <Text>Smartchain can route data more efficiently and 
          securely through smart cognitive packets, and it 
          employs collaborative AI to analyze data and 
          autonomize processes.
          </Text>
    </CardContainer>
  </RowContainer>
)

const AboutUsCards = () => (
  <AboutUsContainer>
    <AdaptableCloud />
    <HowItWorks />
  </AboutUsContainer>
)

export default AboutUsCards