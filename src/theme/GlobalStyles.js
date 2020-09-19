import { createGlobalStyle } from "styled-components";
import MyriadProRegular from "../static/fonts/myriad-pro/MYRIADPRO-REGULAR.woff";
import MyriadProLight from "../static/fonts/myriad-pro/MyriadPro-Light.woff";
import MyriadProSemiBold from "../static/fonts/myriad-pro/MYRIADPRO-SEMIBOLD.woff";

export const theme = {
    logoOrange: '#EC6908',
    logoYellow: '#FEE300',
    logoDarkBlue: '#084DA1',
    logoLightBlue: '#0E99D3',

    gradientBlue: '#1DA7E3',
    lightGray: '#F8F8F8',

    fontDarkBlue: '#1071BB',
    fontLightBlue: '#3F9CE5',
    fontBlueGray: '#8EB4D0',
    fontGray: '#707070',

    phone: "480px",
    mobile: "768px",
    tablet: "992px",
    desktop: "1200px",
    largeDesktop: "1440px"
}

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Myriad Pro Regular';
        font-style: normal;
        font-weight: normal;
        src: url(${MyriadProRegular}) format('woff');
    }


    @font-face {
        font-family: 'Myriad Pro Light';
        font-style: normal;
        font-weight: normal;
        src: url(${MyriadProLight}) format('woff');
    }


    @font-face {
        font-family: 'Myriad Pro Semibold';
        font-style: normal;
        font-weight: normal;
        src: url(${MyriadProSemiBold}) format('woff');
    }

    * {
        user-select: none;
        outline: none;
    }

    html {
        scroll-behavior: smooth;
    }


    body {
        font-family: 'Myriad Pro Regular', sans-serif;
        margin: 0;
        padding: 0;

        a:hover, 
        a:focus {
            text-decoration: none;
            
        }
    }

    a:hover {
        color: inherit;
        text-decoration: none;
    }

  
`;
