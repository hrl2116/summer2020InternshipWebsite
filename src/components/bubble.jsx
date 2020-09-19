import React, { useEffect, useState } from "react"
import { motion, useCycle } from "framer-motion"
import styled from "styled-components"
import PropTypes from "prop-types"
import bubbledata from "./bubbledata"
import range from "lodash-es/range"
import "./bubblestyle.css"

const Container = styled.div`
  width: "900px";
  height: "900px";
  display: "flex";
  justify-content: "center";
  align-items: "center";
  overflow: "hidden";
  padding: 10;
`
const tagContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
}
const tag = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
const Pattern = ({ picPath, patternID, descr }) => (
  <pattern
    id={patternID}
    x="0%"
    y="0%"
    height="100%"
    width="100%"
    viewBox="-4 -4 25 25"
  >
    <image
      alt={descr}
      x="0%"
      y="0%"
      width="17"
      height="17"
      xlinkHref={picPath}
    />
  </pattern>
)
Pattern.propTypes = {
  picPath: PropTypes.string.isRequired,
  patternID: PropTypes.string,
  descr: PropTypes.string,
}
Pattern.defaultProps = {
  patternID: "",
  descr: "",
}

const Node = ({ node }) => (
  <motion.svg
    width={2 * node.size + 6}
    height={2 * node.size + 6}
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
    variants={itemAnimation}
    custom={node.id}
    initial={"inactive"}
    animate={"active"}
    key={node.id}
    style={{
      borderRadius: "50%",
      cursor: "pointer",
      marginLeft: node.left,
      marginTop: node.top,
      position: "absolute",
    }}
  >
    <defs>
      <Pattern patternID={node.name} picPath={node.icon} descr={node.title} />
    </defs>
    <g>
      <motion.circle
        id={node.name}
        cx={node.size + 3}
        cy={node.size + 3}
        r={node.size}
        fill={node.url}
        stroke={node.color}
        style={{ strokeWidth: 3 }}
      />
    </g>
  </motion.svg>
)

Node.propTypes = {
  node: PropTypes.any,
}
Node.defaultProps = {
  node: null,
}

const itemAnimation = {
  inactive: { y: 0 },
  active: custom => ({
    y: [0, 20, 0, 20, 0, 20, 0],
    transition: {
      delay: custom * 0.5,
      loop: Infinity,
      type: "spring",
      duration: 8,
      stiffness: 2,
    },
  }),
}

function Bubbles() {
  //selected node that will go to the center
  const [centerNode, setCenterNode] = useState(null)

  //animation for all floating nodes
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.01,
        type: "spring",
        duration: 1,
        stiffness: 2,
      },
    },
  }

  const randomContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.01,
        type: "spring",
        duration: 1,
        stiffness: 2,
      },
    },
  }
  const randomItem = {
    inactive: { y: 0 },
    active: custom => ({
      y: [0, 20, 0, 20, 0, 20, 0],
      transition: {
        delay: custom,
        loop: Infinity,
        type: "spring",
        duration: 12,
        stiffness: 4,
      },
    }),
  }

  const randomData = range(15)
  const [s1, cycleS1] = useCycle(1, 0)
  const [s2, cycleS2] = useCycle(1, 0)
  const [s3, cycleS3] = useCycle(1, 0)
  const [s4, cycleS4] = useCycle(1, 0)
  const [s5, cycleS5] = useCycle(1, 0)
  const [s6, cycleS6] = useCycle(1, 0)
  const [s7, cycleS7] = useCycle(1, 0)
  const [s8, cycleS8] = useCycle(1, 0)

  const [c, cycleC] = useCycle(0, 1)

  function selectA() {
    //set scale of the select node to 0
    if(s1 === 1){
      cycleS1()
    }
    if (s2 === 0) {
      cycleS2()
    }
    if (s3 === 0) {
      cycleS3()
    }
    if (s4 === 0) {
      cycleS4()
    }
    if (s5 === 0) {
      cycleS5()
    }
    if (s6 === 0) {
      cycleS6()
    }
    if (s7 === 0) {
      cycleS7()
    }
    if (s8 === 0) {
      cycleS8()
    }
    //set the centerNode to selectNode
    setCenterNode(bubbledata[0])
    //set the scale of the center Node's svg outline to 5, opacity of the text to 1
    if (c === 0) {
      cycleC()
    }
  }
  function selectB() {
    //set scale of the select node to 0
    if(s2 === 1){
      cycleS2()
    }
    if (s1 === 0) {
      cycleS1()
    }
    if (s3 === 0) {
      cycleS3()
    }
    if (s4 === 0) {
      cycleS4()
    }
    if (s5 === 0) {
      cycleS5()
    }
    if (s6 === 0) {
      cycleS6()
    }
    if (s7 === 0) {
      cycleS7()
    }
    if (s8 === 0) {
      cycleS8()
    }
    //set the centerNode to selectNode
    setCenterNode(bubbledata[1])
    //set the scale of the center Node's svg outline to 5, opacity of the text to 1
    if (c === 0) {
      cycleC()
    }
  }
  function selectC() {
    //set scale of the select node to 0
    if(s3 === 1){
      cycleS3()
    }
    
    
    if (s1 === 0) {
      cycleS1()
    }
    if (s2 === 0) {
      cycleS2()
    }
    if (s4 === 0) {
      cycleS4()
    }
    if (s5 === 0) {
      cycleS5()
    }
    if (s6 === 0) {
      cycleS6()
    }
    if (s7 === 0) {
      cycleS7()
    }
    if (s8 === 0) {
      cycleS8()
    }
    //set the centerNode to selectNode
    setCenterNode(bubbledata[2])
    //set the scale of the center Node's svg outline to 5, opacity of the text to 1
    if (c === 0) {
      cycleC()
    }
  }
  function selectD() {
    //set scale of the select node to 0
    if(s4 === 1){
      cycleS4()
    }
    
    //set the scale of the center Node's svg outline to 5, opacity of the text to 1
    if (c === 0) {
      cycleC()
    }
    if (s1 === 0) {
      cycleS1()
    }
    if (s2 === 0) {
      cycleS2()
    }
    if (s3 === 0) {
      cycleS3()
    }
    if (s5 === 0) {
      cycleS5()
    }
    if (s6 === 0) {
      cycleS6()
    }
    if (s7 === 0) {
      cycleS7()
    }
    if (s8 === 0) {
      cycleS8()
    }
    //set the centerNode to selectNode
    setCenterNode(bubbledata[3])
  }
  function selectE() {
    //set scale of the select node to 0
    if(s5 === 1){
      cycleS5()
    }
    
    if (s2 === 0) {
      cycleS2()
    }
    if (s3 === 0) {
      cycleS3()
    }
    if (s4 === 0) {
      cycleS4()
    }
    if (s1 === 0) {
      cycleS1()
    }
    if (s6 === 0) {
      cycleS6()
    }
    if (s7 === 0) {
      cycleS7()
    }
    if (s8 === 0) {
      cycleS8()
    }
    //set the centerNode to selectNode
    setCenterNode(bubbledata[4])
    //set the scale of the center Node's svg outline to 5, opacity of the text to 1
    if (c === 0) {
      cycleC()
    }
  }
  function selectF() {
    //set scale of the select node to 0
    if(s6 === 1){
      cycleS6()
    }
    //set the scale of the center Node's svg outline to 5, opacity of the text to 1
    if (c === 0) {
      cycleC()
    }
    if (s2 === 0) {
      cycleS2()
    }
    if (s3 === 0) {
      cycleS3()
    }
    if (s4 === 0) {
      cycleS4()
    }
    if (s5 === 0) {
      cycleS5()
    }
    if (s1 === 0) {
      cycleS1()
    }
    if (s7 === 0) {
      cycleS7()
    }
    if (s8=== 0) {
      cycleS8()
    }
    //set the centerNode to selectNode
    setCenterNode(bubbledata[5])
  }
  function selectG() {
    //set scale of the select node to 0
    if(s7 === 1){
      cycleS7()
    }
    
    if (s2 === 0) {
      cycleS2()
    }
    if (s3 === 0) {
      cycleS3()
    }
    if (s4 === 0) {
      cycleS4()
    }
    if (s5 === 0) {
      cycleS5()
    }
    if (s1 === 0) {
      cycleS1()
    }
    if (s6 === 0) {
      cycleS6()
    }
    if (s8=== 0) {
      cycleS8()
    }
    //set the centerNode to selectNode
    setCenterNode(bubbledata[6])
    //set the scale of the center Node's svg outline to 5, opacity of the text to 1
    if (c === 0) {
      cycleC()
    }
  }
  function selectH() {
    //set scale of the select node to 0
    if(s8 === 1){
      cycleS8()
    }
    if (s2 === 0) {
      cycleS2()
    }
    if (s3 === 0) {
      cycleS3()
    }
    if (s4 === 0) {
      cycleS4()
    }
    if (s5 === 0) {
      cycleS5()
    }
    if (s1 === 0) {
      cycleS1()
    }
    if (s7 === 0) {
      cycleS7()
    }
    if (s6=== 0) {
      cycleS6()
    }
    //set the centerNode to selectNode
    setCenterNode(bubbledata[7])
    //set the scale of the center Node's svg outline to 5, opacity of the text to 1
    if (c === 0) {
      cycleC()
    }
  }
  function cancelCenter() { 
    if (s1 === 0) {
      cycleS1()
    }
    if (s2 === 0) {
      cycleS2()
    }
    if (s3 === 0) {
      cycleS3()
    }
    if (s4 === 0) {
      cycleS4()
    }
    if (s5 === 0) {
      cycleS5()
    }
    if (s6 === 0) {
      cycleS6()
    }
    if (s7 === 0) {
      cycleS7()
    }
    if (s8 === 0) {
      cycleS8()
    }
    if(c === 1){
      cycleC()
    }
    setCenterNode(null)
  }
  function sideSelect(node) {
    setCenterNode(node)
    if (c === 0) {
      cycleC()
    }
    if (node === bubbledata[0]) {
      if (s1 === 1) {
        cycleS1()
      }
      if (s2 === 0) {
        cycleS2()
      }
      if (s3 === 0) {
        cycleS3()
      }
      if (s4 === 0) {
        cycleS4()
      }
      if (s5 === 0) {
        cycleS5()
      }
      if (s6 === 0) {
        cycleS6()
      }
      if (s7 === 0) {
        cycleS7()
      }
      if (s8 === 0) {
        cycleS8()
      }
    }
    if (node === bubbledata[1]) {
      if (s2 === 1) {
        cycleS2()
      }
      if (s1 === 0) {
        cycleS1()
      }
      if (s3 === 0) {
        cycleS3()
      }
      if (s4 === 0) {
        cycleS4()
      }
      if (s5 === 0) {
        cycleS5()
      }
      if (s6 === 0) {
        cycleS6()
      }
      if (s7 === 0) {
        cycleS7()
      }
      if (s8 === 0) {
        cycleS8()
      }
    }
    if (node === bubbledata[2]) {
      if (s3 === 1) {
        cycleS3()
      }
      if (s2 === 0) {
        cycleS2()
      }
      if (s1 === 0) {
        cycleS1()
      }
      if (s4 === 0) {
        cycleS4()
      }
      if (s5 === 0) {
        cycleS5()
      }
      if (s6 === 0) {
        cycleS6()
      }
      if (s7 === 0) {
        cycleS7()
      }
      if (s8 === 0) {
        cycleS8()
      }
    }
    if (node === bubbledata[3]) {
      if (s4 === 1) {
        cycleS4()
      }
      if (s2 === 0) {
        cycleS2()
      }
      if (s3 === 0) {
        cycleS3()
      }
      if (s1 === 0) {
        cycleS1()
      }
      if (s5 === 0) {
        cycleS5()
      }
      if (s6 === 0) {
        cycleS6()
      }
      if (s7 === 0) {
        cycleS7()
      }
      if (s8 === 0) {
        cycleS8()
      }
    }
    if (node === bubbledata[4]) {
      if (s5 === 1) {
        cycleS5()
      }
      if (s2 === 0) {
        cycleS2()
      }
      if (s3 === 0) {
        cycleS3()
      }
      if (s1 === 0) {
        cycleS1()
      }
      if (s4 === 0) {
        cycleS4()
      }
      if (s6 === 0) {
        cycleS6()
      }
      if (s7 === 0) {
        cycleS7()
      }
      if (s8 === 0) {
        cycleS8()
      }
    }
    if (node === bubbledata[5]) {
      if (s6 === 1) {
        cycleS6()
      }
      if (s2 === 0) {
        cycleS2()
      }
      if (s3 === 0) {
        cycleS3()
      }
      if (s4 === 0) {
        cycleS4()
      }
      if (s1 === 0) {
        cycleS1()
      }
      if (s5 === 0) {
        cycleS5()
      }
      if (s7 === 0) {
        cycleS7()
      }
      if (s8 === 0) {
        cycleS8()
      }
    }
    if (node === bubbledata[6]) {
      if (s7 === 1) {
        cycleS7()
      }
      if (s2 === 0) {
        cycleS2()
      }
      if (s3 === 0) {
        cycleS3()
      }
      if (s4 === 0) {
        cycleS4()
      }
      if (s1 === 0) {
        cycleS1()
      }
      if (s5 === 0) {
        cycleS5()
      }
      if (s6 === 0) {
        cycleS6()
      }
      if (s8 === 0) {
        cycleS8()
      }
    }
    if (node === bubbledata[7]) {
      if (s8 === 1) {
        cycleS8()
      }
      if (s2 === 0) {
        cycleS2()
      }
      if (s3 === 0) {
        cycleS3()
      }
      if (s4 === 0) {
        cycleS4()
      }
      if (s1 === 0) {
        cycleS1()
      }
      if (s5 === 0) {
        cycleS5()
      }
      if (s7 === 0) {
        cycleS7()
      }
      if (s6 === 0) {
        cycleS6()
      }
    }
  }
  
  useEffect(() => {
    selectA()
  }, []);

  return (
    <Container>
      <h1
      style={{
        position: "absolute",
        marginTop: "5rem",
        marginLeft: "3.2rem",}}
        class="title"
      >
        Possibilities are endless with Smartchain
      </h1>
      <motion.div
        variants={tagContainer}
        class="tagContainer"
        initial="hidden"
        animate="visible"
      >
        {bubbledata.map(node => (
          <motion.div
            key={node.id}
            variants={tag}
            onTap={() => sideSelect(node)}
          >
            {node.title}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={randomContainer}
        initial={"hidden"}
        animate={"visible"}
        style={{ position: "absolute", marginLeft: "450px", marginTop: "100px"}}
      >
        {randomData.map(node => (
          <motion.svg
            width={Math.abs(Math.sin(node)) * 20 + 20}
            height={Math.abs(Math.sin(node)) * 20 + 20}
            variants={randomItem}
            custom={node}
            initial={"inactive"}
            animate={"active"}
            key={node}
            style={{
              zIndex: 0,
              borderRadius: "50%",
              marginLeft: node * 42 + 250,
              marginTop:
                310 -
                Math.sqrt(340 * 340 - (node * 45 - 350) * (node * 45 - 300)),
              position: "absolute",
            }}
          >
            <g>
              <motion.circle
                cx={Math.abs(Math.sin(node)) * 10 + 10}
                cy={Math.abs(Math.sin(node)) * 10 + 10}
                r={Math.abs(Math.sin(node)) * 10 + 7}
                fill="transparent"
                stroke="#BDBDBD"
                style={{ strokeWidth: 3 }}
              />
            </g>
          </motion.svg>
        ))}
      </motion.div>
      <motion.div
        variants={randomContainer}
        initial={"hidden"}
        animate={"visible"}
        style={{ position: "absolute", marginLeft: "450px", marginTop: "100px"}}
      >
        {randomData.map(node => (
          <motion.svg
            width={Math.abs(Math.sin(node)) * 20 + 20}
            height={Math.abs(Math.sin(node)) * 20 + 20}
            variants={randomItem}
            custom={node}
            initial={"inactive"}
            animate={"active"}
            key={node}
            style={{
              zIndex: 0,
              borderRadius: "50%",
              marginLeft: node * 42 + 250,
              marginTop:
                530 +
                Math.sqrt(340 * 340 - (node * 45 - 340) * (node * 45 - 340)) -
                350,
              position: "absolute",
            }}
          >
            <g>
              <motion.circle
                cx={Math.abs(Math.sin(node)) * 10 + 10}
                cy={Math.abs(Math.sin(node)) * 10 + 10}
                r={Math.abs(Math.sin(node)) * 10 + 7}
                fill="transparent"
                stroke="#BDBDBD"
                style={{ strokeWidth: 3 }}
              />
            </g>
          </motion.svg>
        ))}
      </motion.div>
      <motion.div
        variants={container}
        initial={"hidden"}
        animate={"visible"}
        style={{ position: "absolute", marginLeft: "450px", marginTop: "100px" }}
      >
        <motion.div
          style={{ borderRadius: "50%" }}
          animate={{ scale: s1 }}
          onTap={selectA}
          whileHover={{ scale: 1.1, zIndex: 1 }}
        >
          <Node node={bubbledata[0]} />
        </motion.div>
        <motion.div
          style={{ borderRadius: "50%" }}
          animate={{ scale: s2 }}
          onTap={selectB}
          whileHover={{ scale: 1.1, zIndex: 1 }}
        >
          <Node node={bubbledata[1]} />
        </motion.div>
        <motion.div
          style={{ borderRadius: "50%" }}
          animate={{ scale: s3 }}
          onTap={selectC}
          whileHover={{ scale: 1.1, zIndex: 1 }}
        >
          <Node node={bubbledata[2]} />
        </motion.div>
        <motion.div
          style={{ borderRadius: "50%" }}
          animate={{ scale: s4 }}
          onTap={selectD}
          whileHover={{ scale: 1.1, zIndex: 1 }}
        >
          <Node node={bubbledata[3]} />
        </motion.div>
        <motion.div
          style={{ borderRadius: "50%" }}
          animate={{ scale: s5 }}
          onTap={selectE}
          whileHover={{ scale: 1.1, zIndex: 1 }}
        >
          <Node node={bubbledata[4]} />
        </motion.div>
        <motion.div
          style={{ borderRadius: "50%" }}
          animate={{ scale: s6 }}
          onTap={selectF}
          whileHover={{ scale: 1.1, zIndex: 1 }}
        >
          <Node node={bubbledata[5]} />
        </motion.div>
        <motion.div
          style={{ borderRadius: "50%" }}
          animate={{ scale: s7 }}
          onTap={selectG}
          whileHover={{ scale: 1.1, zIndex: 1 }}
        >
          <Node node={bubbledata[6]} />
        </motion.div>
        <motion.div
          style={{ borderRadius: "50%" }}
          animate={{ scale: s8 }}
          onTap={selectH}
          whileHover={{ scale: 1.1, zIndex: 1 }}
        >
          <Node node={bubbledata[7]} />
        </motion.div>
      </motion.div>

      {centerNode && (
        <motion.div
          style={{ borderRadius: "50%", marginLeft: "450px",marginTop: "100px", position: "absolute", }}
          onTap={cancelCenter}
          className="center">
          <motion.svg
            width="500px"
            height="500px"
            animate={{ scale: c }}
            onTap={cancelCenter}
            style={{
              cursor: "pointer",
              position: "absolute",
              opacity: 1,
              marginTop: "60px",
              marginLeft: "350px",
              borderRadius: "50%",
            }}
          >
            <defs>
              <Pattern patternID="focus" picPath="" />
            </defs>
            <motion.g>
              <motion.circle
                cx="220"
                cy="220"
                r="200"
                fill="white"
                stroke={centerNode.color}
                style={{ strokeWidth: 5 }}
              />
            </motion.g>
          </motion.svg>
          <motion.div
            animate={{ opacity: c }}
            onTap={cancelCenter}
            style={{
              cursor: "pointer",
              position: "absolute",
              marginTop: "120px",
              marginLeft: "420px",
              textAlign: "center",
              width: "300px",
            }}
          >
            <img src={centerNode.icon} width="80px" height="80px" />
            <div
              style={{
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              <h2 maxWidth="100rem">{centerNode.title}</h2>
              <p color="grey" maxWidth="100rem" style={{ marginTop: "30px", lineHeight: 1.6, }}>
                {centerNode.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </Container>
  )
}

export default Bubbles
