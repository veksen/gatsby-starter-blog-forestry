import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import React from "react"
import { HTMLContent } from "../HTMLContent"

const ABOUT_QUERY = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/la-ferme/" } }) {
      html
    }
  }
`

const About = (): JSX.Element => {
  const { markdownRemark } = useStaticQuery(ABOUT_QUERY)
  const { html } = markdownRemark

  return <HTMLContent className="content" content={html} />
}

export default About
