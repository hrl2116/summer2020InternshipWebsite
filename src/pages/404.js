import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { theme } from "../theme/GlobalStyles"

const StyledHead = styled.h1`
  color: ${theme.fontDarkBlue};
`;

const Container = styled.div`
  margin: 8rem 0 20rem 0;
  padding: 0 2rem;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <StyledHead>Page Not Found.</StyledHead>
      <p>Sorry,this page does not exist.</p>
    </Container>
    
  </Layout>
)

export default NotFoundPage
