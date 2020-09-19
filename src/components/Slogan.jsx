import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import TitleLiner from "./titleliner.jsx"
import upperbg from "../images/upper_background.svg"
import { theme } from "../theme/GlobalStyles"

const Container = styled.div`
  --size: ${props => props.homepage ? '711px' : '48rem'};
  --size-t: ${props => props.homepage ? '60rem' : '48rem'};
  --size-m: ${props => props.homepage ? '63rem' : '48rem'};

  position: absolute;
  z-index: -3;
  /* background-image: url(${upperbg}); */
  background-color: ${theme.lightGray};
  top: calc(var(--size) - 0.09719 * 100vw);
  text-align: center;
  width: 100%;
  height: 45rem;
  
  background: rgb(248,248,248);
  background: linear-gradient(177deg, rgba(248,248,248,1) 85%, rgba(132,207,237,1) 94%, rgba(29,171,227,1) 100%);
  transform: skewY(11deg);

  @media (max-width: ${theme.tablet}) {
    top: calc(var(--size-t) - 0.09719 * 100vw); 
    height: 36rem;
  }

  @media (max-width: ${theme.mobile}) {
    top: calc(var(--size-m) - 0.09719 * 100vw); 
    height: 36rem;
  }
`;

const TextContainer = styled.div`
  text-align: center;
  transform: skewY(-11deg);
  padding: 15vw 0;
  margin: auto;
  width: 50rem;

  @media (max-width: ${theme.tablet}) {
    
    padding: 10rem 0;
  }

  @media (max-width: ${theme.mobile}) {
    max-width: 65vw;
    padding-top: ${props => props.homepage ? '10rem' : '8rem' };
  }
`;

const Title = styled.h1`
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: lighter;
  font-style: italic;
  font-size: 2rem;
  flex-wrap: wrap;

  @media (max-width: ${theme.mobile}) {
    font-size: 1.5rem;
  }

`;

const Description = styled.p`
  margin: auto;
  margin-top: 1.5rem;
  max-width: 40rem;
  font-size: 1.2rem;
  white-space: normal;
  line-height: 1.8;
  flex-wrap: wrap;

  @media (max-width: ${theme.mobile}) {
    font-size: 0.9rem;
    
  }
`;

const Slogan = ({ title, description, color, homepage }) => (
  <Container homepage={homepage}>
    <TextContainer>
      <Title>{title}</Title>
      <TitleLiner color={color} size={"100%"}/>
      <Description>{description}</Description>
    </TextContainer>
  </Container>
)

Slogan.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  color: PropTypes.string,
}

Slogan.defaultProps = {
  description: ``,
  color: `blue`,
}

export default Slogan
