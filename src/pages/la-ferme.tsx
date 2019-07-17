import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import { rhythm } from "../utils/typography"
import Container from "../components/Container"
import Title from "../components/Title"
import About from "../components/About"
import ContactForm from "../components/ContactForm"
import Contact from "../components/Contact"

const BlogIndex = (props): JSX.Element => {
  const siteTitle = get(props, "data.site.siteMetadata.title")
  const siteDescription = get(props, "data.site.siteMetadata.description")
  const posts = get(props, "data.allMarkdownRemark.edges")
  console.log(posts)

  return (
    <Layout location={props.location}>
      <Helmet
        htmlAttributes={{ lang: "fr" }}
        meta={[{ name: "description", content: siteDescription }]}
        title={siteTitle}
      />
      <Container>
        <Title>À propos de la ferme</Title>
        <About />

        <Title style={{ marginTop: "3em" }}>Contactez-nous</Title>
        <Contact />
        <ContactForm />

        {/* <BioBaskets padTop /> */}
      </Container>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___publish_date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            publish_date(formatString: "MMMM DD, YYYY")
            title
            body
          }
        }
      }
    }
  }
`
