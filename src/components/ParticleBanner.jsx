import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";
import styled from "styled-components"
import { theme } from "../theme/GlobalStyles.js"

  

const ParticalContainer= styled.div`
    position: absolute;
    top: 8rem;
    left: 0;  
    bottom: 100rem;     
    width: 100%;
    z-index: -1;
`


function SmartchainBanner() {
    const isBrowser = typeof window !== "undefined";

    const [width, setWidth] = useState(isBrowser ? window.innerWidth : null)
    useEffect(() => isBrowser ? window.onresize = () => setWidth(window.innerWidth) : null)
  
    return (
    <ParticalContainer>
     
      <Particles
        height={width < theme.phone ? '48.5rem' : '40rem'}
        style={{backgroundColor: 'white'}}
        params={{
      
          particles: {
            number: {
              value: 135,
              density: {
                enable: true,
                value_area: 1803.4120608655228
              }
            },
            color: {
              value: "#88CFE0"
            },
            shape: {
              type: "circle",
              polygon: {
                nb_sides: 4
              }
            },
            opacity: {
              value: 0.4008530152163807,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 160,
              color: "#8EB4D0",
              opacity: 0.5208530152163807,
              width: 0.6413648243462091
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: false,
                mode: "bubble"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      />
 
    </ParticalContainer>
      
    );
}

export default SmartchainBanner
 

