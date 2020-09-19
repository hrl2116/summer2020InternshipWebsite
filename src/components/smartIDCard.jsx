import React from "react";
import styled from "styled-components";
import { theme } from "../theme/GlobalStyles"
import productShow from "../images/products_smartID.png";
import greenIcon from "../images/products_verified.svg"
import TitleLiner from "../components/titleliner.jsx"


const Box = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  box-align: center;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  width: 50rem;
  margin: 0 auto 5rem auto;
  @media (max-width: ${theme.mobile}) {
    width: 100%;
    margin-left: 0rem;
  }
`;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: "row";
  position: relative;
  padding: 3rem 3rem;
`

const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
`

const SmartTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
`
const SmartDescription = styled.div`
  margin-top: 2rem;
`
const Boldword = styled.span`
  font-family: 'Myriad Pro Semibold';
  display: inline;
`
const Horizontal = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${theme.tablet}) {
    flex-direction: column-reverse;
  }
`
const ProductImage = styled.img`
  margin: 2rem 2rem;
  height: 30rem;

  @media (max-width: ${theme.tablet}) {
    margin: 2.5em auto;
  }
`
const BenefitsTitle = styled.div`
  margin-top: 8rem;
  font-family: 'Myriad Pro Semibold';
  @media (max-width: ${theme.tablet}) {
    margin-left: 2rem;
    margin-top: 2.5rem;
  }
  @media (max-width: ${theme.mobile}) {
    margin-left: 0;
  }
`
const BenefitsDescriptions = styled.ul`
  margin: 1em 2.4em 0em -1em;
  @media (max-width: ${theme.tablet}) {
    margin-left: 0rem;
  }
`
const AdditionalDescription = styled.div`
  margin-top: 2.4em;
`
const GreenIcon = styled.img`
  width: 1.2rem;
  margin-right: 0.2rem;
`
const Pt = styled.li`
  list-style-position: outside;
  line-height: 2;
`

const SmartIDCard = React.forwardRef((props, ref) => {
  return (
    <Box ref={ref}>
      <Container>
        <VerticalBox>
          <SmartTitle>
            SmartID 
            <TitleLiner />
          </SmartTitle>
          
          <SmartDescription>
            <p style={{lineHeight: 1.6,}}><Boldword>SmartID is a digital passport </Boldword>to authenticate
            users quickly while minimizing data hacks, identity theft and data
            redundancy.</p>
      
            <p style={{lineHeight: 1.6,}}>SmartID will be used to verify the identity of users across an
            assortment of platforms.</p>
          </SmartDescription>

          <Horizontal>
            <ProductImage src={productShow} alt="smartID"></ProductImage>

            <VerticalBox>
              <BenefitsTitle>Benefits</BenefitsTitle>
              <BenefitsDescriptions>
                <Pt>Platforms only have information while using site reducing risk
                of hacking</Pt>
                <Pt>Eliminates need for traditional login systems</Pt>
                <Pt>Users can control what information each platform can see</Pt>
              </BenefitsDescriptions>
  
              <AdditionalDescription>
                <GreenIcon src={greenIcon}></GreenIcon>
               More secure than a traditional SSO (single sign on)
              </AdditionalDescription>

            </VerticalBox>
          </Horizontal>
        </VerticalBox>
      </Container>
    </Box>
  )
})

export default SmartIDCard
