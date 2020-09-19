import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import logoImage from "../images/logo_horizontal.png";
import {theme} from "../theme/GlobalStyles"

const Container = styled.header`
  background-color: transparent;
  padding: 1.45rem 1.0875rem;
  padding-bottom: 0;
  display: flex;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`
const MenuDiv = styled.div`
  text-align: right;  
  width: 100%;
  @media (max-width: ${theme.tablet}) {
    display: none;
  }
`
const HomeButton = styled(Link)`
  margin-left: 10px;
  margin-right: 10px;
`;
const Logo = styled.img`
  width: 10rem;
`
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  top: 3.3rem;
  font-size: 1rem;
  font-weight: normal;
  width: 8rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 0.75rem 0.5rem;
  text-align: left;
  border-radius: 10px;
`
const Tab = styled.div`
  display: inline-flex;
  margin: 0rem 2.3rem;
  font-size: 1rem;
  font-weight: bold;
  &:hover ${DropdownContent} {
    display: block;
    
  }

  &:hover {
    color: ${theme.fontDarkBlue};
  }
`
const NavLink = styled(Link)`
  color: black;
  padding-left: 5px;
  width: 100%;
  display: inline-block;
  text-decoration: none;
  &:hover {
    color: ${theme.fontDarkBlue};
  }
`;

const ContactLink = styled(Link)`
  border: solid;
  border-color: ${theme.fontDarkBlue};
  border-radius: 10px;
  border-width: 2px;
  padding: 10px;
  color: #000;
  text-decoration: none;
  &:hover {
    background-color: ${theme.fontDarkBlue};
    color: #fff;
    transition: all 0.3s ease-in-out ;
  }
`
const HamburgerDiv = styled.div`
  text-align: right;  
  width: 100%;
  display: none;

  @media (max-width: ${theme.tablet}) {
    display: block;
  }
`
const MobileLink = styled(Link)`
  color: black;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dfdfdf;
  padding: 1rem;
  text-decoration: none;
  &:last-child {
    border-bottom: none;
  }
`
const MobileContainer = styled.div`
  width: 16rem;
  position: absolute;
  right: 1rem;
  top: 4.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
  max-height: ${props => props.showMenu ? "50rem" : "0"};
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  overflow: hidden;
  transition: max-height 0.5s ease-in-out; 
  @media (max-width: ${theme.phone}) {
    left: 4%;
    right: 4%;
    width: auto;
  }
  
`
const Icon = styled.div`
  cursor: pointer;
  float: right;
  padding-top: 0.5rem;
`
const HamburgerIcon = () => (
  <svg viewBox="0 0 100 80" width="25" height="25">
    <rect width="100" height="15" rx="15" ry="15"></rect>
    <rect y="30" width="100" height="15" rx="15" ry="15"></rect>
    <rect y="60" width="100" height="15" rx="15" ry="15"></rect>
  </svg>
)

const Header = ({siteTitle, menuLinks}) => {

    const [showMenu, setShowMenu] = useState(false);

    const changeMenu = (showMenu) => {
      setShowMenu(!showMenu)
    }
    
    const aboutLink =  {
      link: menuLinks[0].subLinks[0].link,
      title: menuLinks[0].subLinks[0].title
    }
    const smartchainLink =  {
      link: menuLinks[1].subLinks[0].link,
      title: menuLinks[1].title
    }  
    const usecaseLink = {
      link: menuLinks[2].subLinks[0].link,
      title: menuLinks[2].subLinks[0].title
    } 
    const productsLink = {
      link: menuLinks[2].subLinks[1].link,
      title: menuLinks[2].subLinks[1].title
    }

    return (
      <Container>
        
        <HomeButton to="/">           
            <Logo src={logoImage} alt="Shoptaki Logo" />
        </HomeButton>
        
        <MenuDiv >  
        
            <Tab>
                About Us
                <DropdownContent>
                  <NavLink
                    to={aboutLink.link}
                    
                  >{aboutLink.title}</NavLink>
                </DropdownContent>
            </Tab>

            <Tab>
                <NavLink 
                  to={smartchainLink.link}
                >{smartchainLink.title}</NavLink>
            </Tab>

            <Tab>
                  Our Solution
                  <DropdownContent>
                    <NavLink
                      style={{paddingBottom: '5px'}}
                      to={usecaseLink.link}
                    >{usecaseLink.title}</NavLink>
                    <NavLink
                      to={productsLink.link}
                    >{productsLink.title}</NavLink>
                  </DropdownContent>
            </Tab>

            <Tab>
                <ContactLink to="/contact-us/">
                  Contact Us
                </ContactLink>
            </Tab>

         
        </MenuDiv>

        <HamburgerDiv>
                <Icon onClick={(e) => changeMenu(showMenu)}> 
                  <HamburgerIcon /> 
                </Icon>

                <MobileContainer showMenu={showMenu}>
                  <MobileLink to="/"> Home </MobileLink>
                  <MobileLink to={aboutLink.link}> {aboutLink.title} </MobileLink>
                  <MobileLink to={smartchainLink.link}> {smartchainLink.title} </MobileLink>
                  <MobileLink to={usecaseLink.link}> {usecaseLink.title} </MobileLink>
                  <MobileLink to={productsLink.link}> {productsLink.title} </MobileLink>
                  <MobileLink to="/contact-us/"> Contact Us </MobileLink>
                </MobileContainer>

        </HamburgerDiv>

      </Container>
    )
}

export default Header


