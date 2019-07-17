import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import React from "react"
import { HTMLContent } from "../HTMLContent"
import FBLogo from "../../assets/facebook.svg"
import * as SC from "./styles"

const CONTACT_QUERY = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/contactez-nous/" } }) {
      html
      frontmatter {
        name
        address {
          line
        }
      }
    }
  }
`

const Contact = (): JSX.Element => {
  const { markdownRemark } = useStaticQuery(CONTACT_QUERY)
  const { frontmatter, html } = markdownRemark
  const { name, address } = frontmatter

  console.log(name)
  console.log(address)

  return (
    <React.Fragment>
      <div className="sub sub-main">{name}</div>

      {address.length && (
        <ul>
          {address.map(({ line }) => (
            <li>{line}</li>
          ))}
        </ul>
      )}

      <HTMLContent className="content" content={html} />

      <SC.FollowOnFB href="https://www.facebook.com/Ferme-de-la-Racine-Carr%C3%A9e-1189474737876101/">
        <SC.Inner>
          <FBLogo />
          Suivez-nous sur Facebook
        </SC.Inner>
        <SC.InnerHover>
          <FBLogo />
          Suivez-nous sur Facebook
        </SC.InnerHover>
      </SC.FollowOnFB>
    </React.Fragment>
  )
}

export default Contact
