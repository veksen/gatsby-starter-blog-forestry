import React, { Fragment } from "react"
import { graphql, navigate } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"

import Layout from "../components/Layout"
import Container from "../components/Container"
import Title from "../components/Title"
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage"

const PhotosPage = (props): JSX.Element => {
  console.log(props)
  const siteTitle = get(props, "data.site.siteMetadata.title")
  const siteDescription = get(props, "data.site.siteMetadata.description")
  const photos = get(props, "data.allMarkdownRemark.nodes")
  console.log(photos)

  return (
    <Layout location={props.location}>
      <Helmet
        htmlAttributes={{ lang: "fr" }}
        meta={[{ name: "description", content: siteDescription }]}
        title={siteTitle}
      />
      <Container>
        <Title>Photos</Title>

        <div>
          {photos.map(photo => {
            return <img src={require(photo.frontmatter.image)} />
          })}
        </div>

        {/* <div>
          {Object.keys(imagesByYear)
            .sort((a, b) => Number(b) - Number(a))
            .map(year => {
              return (
                <Fragment>
                  <h3 className="gallery__year">{year}</h3>
                  <div className="gallery-wrapper">
                    {imagesByYear[year].map(({ src, index }) => (
                      <div
                        className="gallery-wrapper__image"
                        onClick={() => navigate(`/photos-slider/${index + 1}`)}
                      >
                        <PreviewCompatibleImage style={{ maxWidth: "100%" }} imageInfo={src} />
                      </div>
                    ))}
                  </div>
                </Fragment>
              );
            })}
        </div> */}

        {/* <BioBaskets padTop /> */}
      </Container>
    </Layout>
  )
}

export default PhotosPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(filter: { fields: { slug: { regex: "/photos/" } } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          image
        }
      }
    }
  }
`
