import React from "react";
import styled from "styled-components";
import { theme } from "../theme/GlobalStyles"


import TitleLiner from "../components/titleliner.jsx"
import greenIcon from "../images/products_verified.svg"
import financialImage from "../images/products_financial.png"
import lowerbg from "../images/lower_background.svg"

const Bg = styled.div`
  background-image: url(${lowerbg});
  height: 50rem;
  position: absolute;
  z-index: -1;
  top: 190rem;
  left: 0;
  width: 100%;
`
const Box = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  width: 50rem;
  margin: 5rem auto;
  @media (max-width: ${theme.mobile}) {
    width: 100%;
    margin-left: 0rem;
  }
`;


const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 63rem;
  padding: 3rem 3rem;

  
`
const Title = styled.div`
  font-weight: bold;
  font-size: 25px;
`
const Description = styled.div`
  margin-top: 2rem;
`
const BenefitsTitle = styled.div`
  margin-top: 2.5rem;
  margin-left: 2em;
  font-family: 'Myriad Pro Semibold';
  @media (max-width: ${theme.mobile}) {
    margin-left: 0rem;
  }
`
const BenefitsDescriptions = styled.ul`
  margin-top: 0.5rem;
  margin-left: 0rem;
  @media (max-width: ${theme.mobile}) {
    margin-left: 0rem;
  }
`
const AdditionalDescription = styled.div`
  margin-top: 2.5em;
  margin-right: 2.4em;
`
const GreenIcon = styled.img`
  width: 1.2rem;
  margin-right: 0.2rem;
`
const FinancialImage = styled.img`
  width: 100%;
  margin-top: 2.5em;
`
const Pt = styled.li`
  list-style-position: outside;
  line-height: 2;
`
const FinancialPlatformCard = React.forwardRef((props, ref) => {
  return (
    <>
    <Bg />
      <Box ref={ref} id="financialBox">
        <Container>
      
            <Title>
              Financial Platform
              <TitleLiner />
            </Title>
            
            <Description>
              <p style={{lineHeight: 1.6,}}>Finance Smartchain ID allows for transactional communication to be
              secure by being a hybrid structure of centralized and decentralized systems.</p>
              <p style={{lineHeight: 1.6,}}>Smartchain tracks data across different ecosystems to prevent fraud
              and automate certain processes.</p>
            </Description>

            <BenefitsTitle>Benefits</BenefitsTitle>
            <BenefitsDescriptions>
              <Pt>Limit Volume of Data </Pt>
              <Pt>Reduce Redundancy</Pt>
              <Pt>Verify Validity of Users</Pt>
              <Pt>Streamline transactions while automating KYC, AML, and regulation
                and compliance.</Pt>
              <Pt>Embeds each transaction with the SmartID to track transaction
                origins, prevent money laundering, etc…</Pt>
            </BenefitsDescriptions>

            <AdditionalDescription>
              <GreenIcon src={greenIcon}></GreenIcon>
              More secure than a traditional SSO (single sign on)
            </AdditionalDescription>

            <FinancialImage src={financialImage} alt="financialPlatform"></FinancialImage>

    
        </Container>
      
      </Box>  
    </>

  )
})

export default FinancialPlatformCard;
