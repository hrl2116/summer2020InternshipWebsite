import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { theme } from "../theme/GlobalStyles"

import bubbledata from "./bubbledata"

const PageContainer = styled.div`
  height: 100%;
  margin-top: 2rem;
  padding: 3rem;
  justify-content: center;
  align-items: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (max-width: ${theme.phone}) {
    margin-top: 1rem;
  }
`
const Container = styled.div`
  height: 100%;
  max-width: 80rem;
  display: flex;
  margin-top: 1rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-basis: 10%;
  flex-wrap: wrap;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  @media (max-width: ${theme.phone}) {
    flex-direction: column;
    margin-top: 1rem;
    max-width: 30rem;
  }
`
const Title = styled.div`
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 25px;
  margin-top: 2rem;
`
const Description = styled.div`
  font-size: 16px;
  max-height: 8rem;
  margin-top: 1rem;
  line-height: 1.6;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
`
const ContentContainer = styled.div`
  max-height: 25rem;
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: ${theme.tablet}) {
    width: 15rem;
  }
  @media (max-width: ${theme.phone}) {
    width: 15rem;
  }
`
const CardContainer = styled.div`
  width: 28rem;
  height: 23rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 2rem;
  margin-top: 2rem;
  padding: 2rem;
  padding-top: 0rem;
  box-shadow: 0.2rem 0.2rem 0.5rem #999999;
  @media (max-width: ${theme.tablet}) {
    margin-left: 1rem;
    width: 15rem;
  }

  @media (max-width: ${theme.phone}) {
    margin-left: 0rem;
    width: 14rem;
  }
`
const LineBreaker = styled.div`
  flex-basis: 100%;
  height: 0;
`
const PageTitle = styled.h1`
  margin-top: 3rem;
  flex-wrap: wrap;
  @media (max-width: ${theme.tablet}) {
    margin-top: 0rem;
    text-align: center;
  }
`
const Item = ({ node }) => (
  <CardContainer>
    <ContentContainer>
      <img src={node.icon} width="80px" height="80px" alt={node.title} />
      <LineBreaker />
      <Title>{node.title}</Title>
      <Description>{node.description}</Description>
    </ContentContainer>
  </CardContainer>
)

Item.propTypes = {
  node: PropTypes.any.isRequired,
}
const UsecaseCard = () => (
  <PageContainer>
    <PageTitle>Possibilities are endless with Smartchain</PageTitle>
    <Container>
      {bubbledata.map((node, i) => (
        <Item key={i} node={node} />
      ))}
    </Container>
  </PageContainer>
)

export default UsecaseCard
