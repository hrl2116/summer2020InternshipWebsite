import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from 'gatsby';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import Img from "gatsby-image";
import { theme } from "../theme/GlobalStyles";
import CustomLink from "./CustomLink";

const getConfigurableProps = () => ({
    showArrows: false,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: false,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: false,
    emulateTouch: true,
    selectedItem: 0,
    interval: 5000,
    transitionTime: 300,
    swipeScrollTolerance: 5,
});


const Container = styled.div`
    
    padding: 1.2rem;
    box-shadow: 0.2rem 0.2rem 0.5rem #999999;
    border-radius:25px;
    max-width: 70%;
    margin: auto;
    margin-top: 20rem;
    min-height: 30vw;
    margin-bottom: 10rem;
    background-color: white;
    z-index: 2;

    .control-dots {
        position: static;
    }

    @media (max-width: ${theme.mobile}) {
        margin-top: 18rem;
        min-height: 33vw;
        width: 80%; 
    }

    @media (max-width: ${theme.phone}) {
        min-width: 100%;
        margin-left: 0rem;
        margin-top: 20rem;
        margin-bottom: 5rem;
        float: right;
        min-height: 38rem;
        padding-bottom: 0.5rem;
    };
`;

const SlideContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    height: 100%;

    @media (max-width: ${theme.mobile}) {
        flex-direction: column-reverse; 
    }
`;

const TextContainer = styled.div`
    width: 55%;
    float: left;
    position: relative;
    padding-left: 3rem;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    text-align: left;

    @media (max-width: ${theme.tablet}) {
        padding: 2rem 0rem 3.5rem 2rem;
    }

    @media (max-width: ${theme.mobile}) {
        width: 100%;
        padding: 3rem 3rem 0rem 3rem;

    }
`;

const ImageContainer = styled.div`
    width: 45%;
    padding: 4rem;
    margin: auto;
    margin-left: 0.5rem;
    overflow: hidden;

    @media (max-width: ${theme.tablet}) {
        padding: 6vw;
    }

    @media (max-width: ${theme.mobile}) {
        width: 70%;
        padding: 3rem 0rem 0rem;
        margin-left: 15%;

    }
`;

const Heading = styled.h3`
  font-size : 3vw;
  padding-bottom: 2rem;
  @media (max-width: ${theme.tablet}) {
    padding-bottom: 0.5rem;
  }
  @media (max-width: ${theme.phone}) {
    font-size: 2rem;
  }
`

const Subtext = styled.p`
  font-size: 1.8rem;
  @media (max-width: ${theme.tablet}) {
    font-size: 2vw;
  }
  @media (max-width: ${theme.phone}) {
    font-size: 1rem;
  }
`;

const Dots = styled.li`
  height: 15px;
  width: 15px;
  background-color: ${props => props.selected ? theme.fontLightBlue : "white"};
  border-radius: 50%;
  border: 1px solid gainsboro;
  display: inline-block;
  margin-right: 0.5rem;
  outline: none;

  &:hover {
      background-color: ${theme.fontLightBlue};
  }

  @media (max-width: ${theme.phone}) {
   position: static;
  }
`;


const slideData =
  [
    {
      name: "What We Offer",
      linkText: "View our current products",
      link: "/products/",
      type: "Smartchain offers a hybrid infrastructure for public and private ledgers which allows for both centralized as well as decentralized models within its processes.",
    },
    {
      name: "Our Potential",
      linkText: "View our use cases",
      link: "/use-cases/",
      type: "Smartchain can be integrated into existing cloud distributions and act as a bridge between densely connected  networks.",
    },
    {
      name: "How It Works",
      linkText: "Why Smartchain?",
      link: "/why-smartchain/",
      type: "Smartchain combines AI and DL technologies to securely facilitate digital transfers across multiple industries.",
    },
  ]

const RCarousel = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allFile(
                    filter: { relativeDirectory: { eq: "slides" } }
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

    return (
        <Container>
            <Carousel {...getConfigurableProps()}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <Dots
                                selected
                                aria-label={`Selected: ${label} ${index + 1}`}
                                title={`Selected: ${label} ${index + 1}`}
                            />
                        );
                    }
                    return (
                        <Dots
                            
                            onClick={onClickHandler}
                            value={index}
                            key={index}
                            
                            tabIndex={0}
                            title={`${label} ${index + 1}`}
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }}
            >
                {slideData.map((slide, index) => 
                    <SlideContainer key={index}>
                        <TextContainer>
                            <Heading>{slide.name}</Heading>
                            <Subtext>{slide.type}</Subtext>
                            <CustomLink
                                to={slide.link}
                                displayText={slide.linkText}
                                linkcolor={theme.fontBlueGray}
                                fontSize={"1.2rem"}
                                arrow
                                    />
                        </TextContainer>
                        <ImageContainer>
                            <Img
                                fluid={data.allFile.nodes[index].childImageSharp.fluid}
                                key={data.allFile.nodes[index].id}
                                alt={data.allFile.nodes[index].name}
                            />
                        </ImageContainer>
                    </SlideContainer>
                )}
            </Carousel>
        </Container>
    )
}

export default RCarousel;