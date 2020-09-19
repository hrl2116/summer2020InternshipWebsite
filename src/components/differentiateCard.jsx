import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from 'gatsby'
import TitleLiner from "../components/titleliner.jsx"
import {theme} from "../theme/GlobalStyles.js"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  width: 80%;
  margin: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const Title = styled.div`
    padding: 2rem 0rem 1rem 0rem;
    font-family: "Myriad Pro Light";
    font-size: 1.75em;
`
const DesktopImg = styled.div`
    display: none;
    @media (min-width: ${theme.tablet}) {
        display: block;
        width: 80%;
    } 
`
const DesktopText = styled.div`
    display: none;
    @media (min-width: ${theme.tablet}) {
        display: flex;
        flex-direction: row;
    }    

`
const MobileItem = styled.div`
    display: flex;
    justify-content: center;
    @media (min-width: ${theme.tablet}) {
        display: none;
    }
`
const ImageContainer = styled.div`
    width: 6rem;
    float: left;
    padding: 2rem 1rem;
    @media (min-width: ${theme.tablet}) {
        width: 100%;
        padding: 0.5rem 0.5rem;
    }
`
const TextContainer = styled.div`
    width: 65%;
    float: left;
    text-align: left;
    padding: 1rem 1rem;
    font-size: 1.1rem;
    @media (min-width: ${theme.tablet}) {
        width: 30%;
        text-align: center;
        margin: 0rem auto;
    }
`

const DifferentiateCard = () => {

    const textItems = [
        {
            title: "Collaborative AI",
            description: "Utilizing A.I. to group overall data and make processes like transactions autonomous.",
        },
        {
            title: "Quantum Resistance Security",
            description: "Long-term increased security against attacks from quantum computers compared to popular public-key algorithms.",
        },
        {
            title: "Hyperconnected Ecosystem",
            description: "Realizing a singularity effect to streamline and aggregate data from different origins.",
        },
    ]

    // image query
    const data = useStaticQuery(
        graphql`
        query {
          allFile(
            filter: { relativeDirectory: { eq: "smartchain-icons" }}
          ) {
            nodes {
              id
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
        `
      )

    // image[3] is desktopimg, image[0,1,2] is mobileimg
    const images = data.allFile.nodes.map((image, i) => (
        <ImageContainer key={image.id} >
            <Img
                fluid={image.childImageSharp.fluid}
                
                alt={image.name}
            />
        </ImageContainer>
    ))

    const text = textItems.map((item, i) => (
        <TextContainer key={i} >
            <h3>{item.title}</h3>
            <p style={{lineHeight: 1.6,}}>{item.description}</p>
        </TextContainer>
    ));
    
    
    return (
        <Box>
            <Title>
                <h4>What Differentiates Smartchain?</h4>
                <TitleLiner color="blue" style={{maxWidth: "16rem"}} size={"80%"}/>
            </Title>
            
            <DesktopImg>{images[3]}</DesktopImg>
            <DesktopText>{text}</DesktopText>

            <MobileItem>{images[0]}{text[0]}</MobileItem>
            <MobileItem>{images[1]}{text[1]}</MobileItem>
            <MobileItem>{images[2]}{text[2]}</MobileItem>

            
        </Box>
    )
}

export default DifferentiateCard