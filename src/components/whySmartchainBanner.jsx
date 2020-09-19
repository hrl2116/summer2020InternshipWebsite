import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles.js"
import SmartchainBanner from "./ParticleBanner.jsx";

const Container = styled.div`
  padding: 0 0 0 0;
  height: 40rem;
  width: 100%;
  page-break-after: always; 
  @media (max-width: ${theme.mobile}) {
    flex-direction: column;
    height: 48.5rem;
  }
`

const TextContainer = styled.div`
  max-width: 100%;
  padding-left:8rem;
  padding-right:5rem;
  padding-bottom:5rem;  
  height: 100%;
  @media (max-width: ${theme.mobile}) {
    padding: 0 3rem;
  }
`

const Title = styled.h1`
  margin-top:10rem;
  font-weight: bold;
  font-size: 2rem;
  color: #8EB4D0;
  display: inline-block;
  line-height:1.5em;
  @media (max-width: ${theme.mobile}) {
    margin-top: ${props => props.display ? "10rem" : "2rem"};
    width: 100%;
    font-size: 2rem;
    padding-right: 3rem;
  }
`
const Subtitle = styled.h2`
  font-size: 2rem;
  width: 100%;
  color: #3F9CE5;
  display: inline-block;
  line-height:1.5em;
  @media (max-width: ${theme.mobile}) {
    max-width: 22rem;
    font-size: 2rem;
    margin-top:1em;
  }
`
const Description = styled.p`
  width: 100%;
  font-weight: bold;
  font-size: 2rem;
  color: #1071BB;
  // margin-top:-0.2em;
  line-height:1.5em;
  margin-bottom: 2em;

  display: inline-block;
  @media (max-width: ${theme.mobile}) {
    max-width: ${theme.mobile};
    margin-top: 2rem;
    line-height: 1.8;
  }
`

const RegularText = styled.p`
  width: 100%;
  font-size: 1.5rem;
  color: #000000;
  margin-top:-0.2em;
  line-height:1.5em;
  display: inline-block;
  @media (max-width: ${theme.mobile}) {
    max-width: ${theme.mobile};
    margin-top: -1rem;
  }
  `

  const WhySmartchainBanner = ({
    title,
    subtitle,
    description,
    regulartext,
  }) => (
    <Container>
      <SmartchainBanner />
      <TextContainer> 
          <Title display={title}>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Description>{description}</Description>
          <RegularText>{regulartext}</RegularText>      
      </TextContainer>
    </Container>
  )
  

  export default WhySmartchainBanner

