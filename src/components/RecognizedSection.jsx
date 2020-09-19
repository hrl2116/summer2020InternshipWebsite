import React from "react"
import global_logo from "../images/homepage_global_logo.svg"
import remtech_logo from "../images/homepage_remtech_logo.svg"
import cc_logo from "../images/homepage_cc_logo.svg"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles.js"
import lowerbg from "../images/lower_background.svg"

const Recog = styled.div`
    left:0;
    right:0;
    background-image: url(${lowerbg});
    background-size:cover;
    position: relative;
    max-height: 80rem;
    padding: 6em 0em;
    margin-bottom: 0em;
    
    @media (max-width: ${theme.mobile}){
        padding-top: 0em;
    }
`;


const RecogContainer= styled.div`
    height: 350px;
    width: 100%;
    margin-bottom:0em;
    margin-top:5em;

    @media (max-width: ${theme.mobile}){
        padding-top:5em;
        height:100%;
        margin-top:-12em;
        margin-bottom:0em;
        padding-bottom:0em;
    }
`

const RecogTitle = styled.div`
    text-align: center;
    font-weight:140;
    font-size: 27px;
    margin-bottom: 2.5em;
    padding-top: 2.5em;
    @media (max-width: ${theme.mobile}){
        padding-top: 12em;
    }
`
const RecogImageBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 2em;
 
  @media (max-width: ${theme.mobile}) {
         display: flex;
         flex-direction: column;
         text-align: center;
         margin-bottom:0em;
         padding-bottom:0em;
    } 
    
`
const SubRecogImagebox=styled.div`
   width:100%;
   text-align:center;
   margin-bottom:1%;
    @media (max-width: ${theme.mobile}){
        margin-bottom:1%;
        padding-bottom:0;
    }
`
const RecogImage1 =styled.img`
    width: 62%;
    margin-top:5%;
    padding-bottom:0em;
    @media (max-width: ${theme.mobile}){
        padding-bottom:0;
        width: 50%;
        margin-left:-3%;
    }
`
const RecogImage2 =styled.img`
    width: 70%;
    margin-top:11%;
    padding-bottom:0em;
    @media (max-width: ${theme.mobile}){
        width: 50%;
        padding-bottom:0;
        margin-left:-3%;
    }
`
const RecogImage3=styled.img`
    width: 45%;
    margin-top:-2.5%;
    padding-bottom:0em;
    @media (max-width: ${theme.mobile}){
        width: 40%;
        margin-top: 5em;
        padding-bottom:0;
        margin-left:-6%;
    }
    
`;

function Recognize() {
    return (
       <Recog> 
            <RecogContainer>
                <RecogTitle>Recognized By</RecogTitle>
                <RecogImageBox>
                <SubRecogImagebox>
                    <RecogImage1 src={global_logo} alt="Recognized by Global Startup Systems"/>
                </SubRecogImagebox>
                <SubRecogImagebox>
                    <RecogImage2 src={remtech_logo} alt="Recognized by Remtech Awards" />
                </SubRecogImagebox>
                <SubRecogImagebox>
                    <RecogImage3 src={cc_logo} alt="Recognized by Currency Cloud" />
                </SubRecogImagebox>
                </RecogImageBox>
            </RecogContainer>
            
        </Recog>
    )
}
export default Recognize
