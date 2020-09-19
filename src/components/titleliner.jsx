import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles"

const BlueLine = styled.div`
    width: 100%;
    width: ${props => props.size || "auto"};
    height: 4px;
    margin: auto;
    background: rgb(8,77,161);
    background: linear-gradient(90deg, ${theme.logoDarkBlue} 0%, ${theme.logoLightBlue} 54%, #fff 100%);  
`
const OrangeLine = styled.div`
    max-width: 26rem;
    width: 100%;
    width: ${props => props.size || "100%"};
    height: 4px;
    margin: auto;
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,0.835171568627451) 0%, rgba(254,227,0,1) 18%, rgba(236,105,8,1) 50%, rgba(254,227,0,1) 84%, rgba(255,255,255,0.9416141456582633) 100%);
`
const TitleLiner = ({ color, size }) => (
  color === "orange" ? <OrangeLine size={size}/> : <BlueLine size={size}/>
)

TitleLiner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
}

TitleLiner.defaultProps = {
  color: `blue`,
  size: `auto`,
}

export default TitleLiner
