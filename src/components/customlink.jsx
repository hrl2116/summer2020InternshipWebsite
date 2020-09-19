import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LinkContainer = styled.div`
  width: 100%;
  vertical-align: middle;
`

// link hover effect
const Label = styled(Link)`
  padding: 5px;
  position: relative;
  color: ${props => props.linkcolor || "#000000"};
  font-size: ${props => props.fontSize};
  text-decoration: none;
  &:hover {
    color: ${props => props.linkcolor || "#000000"};
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    color: ${props => props.linkcolor || "#000000"};
    background-color: ${props => props.linkcolor || "#000000"};
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: transform 0.5s ease-in-out 0s;
  }
  &&:hover::after {
    color: "black" !important;
    transform: scaleX(1);
    transform-origin: 0% 0%;
  }
`
const Arrow = ({ linkcolor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 -2 12 27"
  >
    <path
      id="arrow"
      data-name="arrow"
      d="M13,0,26,11H0Z"
      transform="translate(11) rotate(90)"
      fill={linkcolor}
    />
  </svg>
)

const CustomLink = React.forwardRef(({ to, displayText, linkcolor, fontSize, arrow, clickHandler }, ref) => (
  <LinkContainer>
   
      <Label ref={ref} to={to} linkcolor={linkcolor} fontSize={fontSize} onClick={clickHandler}>
        {displayText}
      </Label>
    
    {arrow ? (
      
        <Arrow linkcolor={linkcolor} />
      
    ) : null}
  </LinkContainer>
))

Arrow.propTypes = {
  linkcolor: PropTypes.string,
}
Arrow.defaultProps = {
  linkcolor: "black",
}

CustomLink.propTypes = {
  to: PropTypes.string,
  displayText: PropTypes.string.isRequired,
  linkcolor: PropTypes.string,
  fontSize: PropTypes.string,
}

CustomLink.defaultProps = {
  linkcolor: "black",
  fontSize: "1rem",
}

export default CustomLink
