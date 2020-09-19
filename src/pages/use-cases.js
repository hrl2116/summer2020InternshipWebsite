import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Bubbles from "../components/bubble.jsx"
import Layout from "../components/layout"
import { theme } from "../theme/GlobalStyles"
import UsecaseCard from "../components/UsecaseCard.jsx"

const UseCases = () => {
  const query = `(max-width: ${theme.tablet})`
  const isBrowser = typeof window !== "undefined";

  const [checkMobile, setCheckMobile] = useState({
    matches: isBrowser ? window.matchMedia(query).matches : null
  })

  useEffect(() => {
    //add listener to screen change
    const handler = e => setCheckMobile({ matches: e.matches })

    if (isBrowser)
      window.matchMedia(query).addListener(handler)
  })
  
  return (
    <div>
      {checkMobile.matches ? (
        <Layout>
          <SEO title="Use Cases" />
          {/* mobile: display card view */}
          <UsecaseCard />
        </Layout>
      ) : (
        <Layout cancelFooter="false">
          {/* no footer for animation page */}
          <SEO title="Use Cases" />
          {/* laptop: display animation */}
          <Bubbles />
        </Layout>
      )}
    </div>
  )
}

export default UseCases
