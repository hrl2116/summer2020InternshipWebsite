import React, { useRef, useMemo, useState } from 'react';
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";

import world_png from "../images/world_map.png";

extend({ OrbitControls })



const Sphere = ( {back, pointerOver } ) => {
  const texture = useMemo(() => new THREE.TextureLoader().load(world_png), [])

  return (
    
      <mesh
        
        visible 
        position={[0, 0.25, 0]} 
        castShadow 
        
        onPointerOver={ pointerOver }
        
      >
        <sphereBufferGeometry attach="geometry" args={[2.75, 32, 32]} />
        <meshBasicMaterial attach="material" transparent opacity={back ? 0.4 : 1} depthWrite={false} side={back ? THREE.BackSide : THREE.FrontSide}>
          <primitive attach="map" object={texture} />
        </meshBasicMaterial>
      </mesh>
    
  );
}


const Controls = ({rotate}) => {
  const orbitRef = useRef()
  const { camera, gl } = useThree()

  useFrame(() => orbitRef.current.update());

  return (
    <orbitControls
      autoRotate
      enableZoom={false}
      enablePan={false}
      enableRotate={rotate}
      maxPolarAngle={1.2 * Math.PI / 3}
      minPolarAngle={1.2 * Math.PI / 3}
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

function Light({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}

const Globe = () => {
  const [hovered, setHover] = useState(false)
  
  const isBrowser = typeof window !== "undefined";
  

  const pointerOver = e => setHover(true);
  const pointerOut = e => setHover(false)

  if (isBrowser)
    document.body.addEventListener('mouseup', pointerOut, { passive: true })
 

  return (
    <>
      {isBrowser && (
        <Canvas id="canvas" style={{width: '100%', height: '100%'}} >
          <Controls rotate={hovered}/>
          
          <Sphere />
          <Sphere back  pointerOver={pointerOver} />
          <Light brightness={10} color={"white"} />
        </Canvas>
      )}
    </>
  );
}

export default Globe;

