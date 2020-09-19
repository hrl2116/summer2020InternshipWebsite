import React from "react"
import styled from "styled-components"
import autonomous from "../images/homepage_autonomy.png";
import efficiency from "../images/homepage_clock.png";
import security from "../images/homepage_security.png";
import { theme } from "../theme/GlobalStyles.js"
import TitleLiner from "./titleliner.jsx"

const HeaderTitle = styled.div`
  text-align: center;
  font-family: "Myriad Pro Light";
  font-size: 50px;
  
  margin-top: 10rem;
  @media (max-width: ${theme.mobile}){
      font-size: 35px;
  }
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20;
  margin-bottom: 4rem;
  
`

const CardHeader = () => (
  <div>
    <HeaderTitle>What do we promise?</HeaderTitle>
    <Line>
      <TitleLiner color="orange" size={"26rem"}/>
    </Line>
  </div>
)

const CardContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  text-shadow: 0.1rem 0.1rem #EAEAEA;

  @media (max-width: ${theme.mobile}){
    margin-bottom: 4rem;
  } 

`;

const TextContainer = styled.div`
  margin: auto;
  width: 62%;
  line-height: 1.5;
  font-size: 1.2em;
`;

const TitleContainer = styled.div`
  display: flex;
  margin: auto;
  width: 70%;
  flex-wrap: nowrap;
  justify-content: center;
  font-size: 18px;
  margin-top: 1rem;
  margin-bottom: 0.2rem;
`;

const BigContainer = styled.div`
  max-width: 85%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin:auto;
  margin-bottom: 6em;

  @media (max-width: ${theme.mobile}){
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0;
  } 
`;

const Autonomous = () => (
  <div>
  <CardContainer>
  <div>
  <img src={autonomous} alt="Autonomous Data" />

    <TitleContainer><h2>AUTONOMY</h2></TitleContainer>
    <TextContainer>Continuously optimize data processes to meet individual 
      business needs and regulatory compliance.</TextContainer>
    </div>
  </CardContainer>
  </div>
)


const Efficiency = () => (
  <div>
    <CardContainer>
      <div>
        <img src={efficiency}  alt="Effecient Validation" />
        <TitleContainer><h2>EFFICIENCY</h2></TitleContainer>
        <TextContainer >Resolve virtually any user validation, analysis, 
          or prediction task within fractions of a second.</TextContainer>
      </div>
    </CardContainer>
  </div>
)

const Security = () => (
  <div>
    <CardContainer>
    <div>
      <img src={security} alt="Quantum Secure System" />
      <TitleContainer><h2>SECURITY</h2></TitleContainer>
      <TextContainer>Ensure safe and future-proof data transactions 
        using quantum resistant cryptography.</TextContainer>
    </div>
    </CardContainer>
  </div>
  )

  const CardSection = (props) => (
    <>
      <CardHeader />
      <BigContainer>
        <Autonomous />
        <Efficiency />
        <Security />
      </BigContainer>
    </>
  )

  export default CardSection
