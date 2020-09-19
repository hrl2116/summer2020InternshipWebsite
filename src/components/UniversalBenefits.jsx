import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles.js"
import TitleLiner from "../components/titleliner.jsx"
import upperbg from "../images/upper_background.svg"

const Container = styled.div`
position: absolute;
  
z-index: -1;
background-image: url(${upperbg});
top: 40rem;
text-align: center;
width: 100%;
padding: 3rem 3rem;
height: 100%;

-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box; 
@media (max-width: ${theme.tablet}){
    padding: 0;
}
`;
const UniversalBenefitsContainer = styled.div`
  padding: 2.5em;
  margin: 5em;
  background-color: #fff;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  height: 19rem;
  @media (max-width: ${theme.tablet}){
    margin: 5em 0 0 0;
    height: auto;
    padding: 2.5em 1em;
  }
`;

const TitleContainer = styled.div`
    font-size: 2em;
    text-align: left;
    padding-bottom: 1em;
`;

const TextContainer = styled.div`
display: flex;
flex-direction: row;
font-size: 1.2rem;

@media (max-width: 1290px){
    font-size: 1rem;
  }
  
@media (max-width: ${theme.tablet}){
    flex-direction: column;
  }
`;

const InnerContainer = styled.ul`
text-align: left;
padding-right: 1.5em;
margin-bottom: 0;
margin-top: 0;
    @media (max-width: ${theme.tablet}) {
        padding-right: 1em;
    }
`;

const Pt = styled.li`
  list-style-position: outside;
  padding-bottom: 1rem;
  line-height: 1.6;
`
const UniversalBenefits = (props) => (
    <Container>
    <UniversalBenefitsContainer>
        <TitleContainer>
            Universal Benefits
            <TitleLiner color="blue" />
        </TitleContainer>
        <TextContainer>
            <InnerContainer>
                <Pt>
                Data Centralization and Ownership Decentralization over multiple industries
                </Pt>
                <Pt>
                Real-time data streaming and analytics
                </Pt>
                <Pt>
                Distributed Learning over multiple nodes
                </Pt>
                <Pt>
                Collabortive AI analazying and automating different types of tasks/proccess
                </Pt>
                <Pt>
                Homomorphic Encryption and Unlinkable PseudoID to enhance privacy and security
                </Pt>
            </InnerContainer>
            <InnerContainer>
                <Pt>
                Real-time reporting and KPI measurements 
                </Pt>
                <Pt>
                Ubiquitous Machine Learning & Collaborative A.I.  solutions 
                </Pt>
                <Pt>
                Accessibility and connectivity with other Blockchain ecosystems
                </Pt>
                <Pt>
                SmartID can be used as identifiers for Individuals, Businesses, and systems
                </Pt>
            </InnerContainer>
        </TextContainer>
    </UniversalBenefitsContainer>
    </Container>
)

export default UniversalBenefits