import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import React from "react"
import { HTMLContent } from "../HTMLContent"

const ABOUT_QUERY = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "about-page" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          html
        }
      }
    }
  }
`

const About = (): JSX.Element => {
  const data = useStaticQuery(ABOUT_QUERY)
  const { edges } = data.allMarkdownRemark
  const { html } = edges[0].node

  return <HTMLContent className="content" content={html} />
}

export default About
