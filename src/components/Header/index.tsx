import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"

import Burger from "../../icons/burger.svg"
import Close from "../../icons/close.svg"
import * as SC from "./styles"

const BACKGROUND_QUERY = graphql`
  {
    allImageSharp(filter: { fixed: { originalName: { eq: "background.jpg" } } }) {
      edges {
        node {
          id
          fixed {
            src
            originalName
          }
        }
      }
    }
  }
`

const Header = (props): JSX.Element => {
  const backgroundQuery = useStaticQuery(BACKGROUND_QUERY)
  const background = backgroundQuery.allImageSharp.edges[0].node.fixed.src

  const isHome = props.location.pathname === `${__PATH_PREFIX__}/`
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function openMenu() {
    setIsMenuOpen(true)
  }
  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <SC.HeaderWrapper
      background={background}
      className={classNames({
        extended: isHome,
        isOpen: isMenuOpen
      })}
    >
      <SC.StyledContainer>
        <SC.MobileWrapper>
          <SC.LogoWrapper to="/">
            <SC.StyledLogo />
          </SC.LogoWrapper>

          <SC.Collapser>{isMenuOpen ? <Close onClick={closeMenu} /> : <Burger onClick={openMenu} />}</SC.Collapser>
        </SC.MobileWrapper>

        <SC.Menu
          className={classNames({
            isOpen: isMenuOpen
          })}
        >
          <SC.StyledLink to="/" activeClassName="active">
            Accueil
          </SC.StyledLink>
          <SC.StyledLink to="/la-ferme" activeClassName="active">
            La ferme
          </SC.StyledLink>
          <SC.StyledLink to="/photos" activeClassName="active">
            Photos
          </SC.StyledLink>
          <SC.StyledLink to="/recettes" activeClassName="active">
            Recettes
          </SC.StyledLink>
        </SC.Menu>
      </SC.StyledContainer>
    </SC.HeaderWrapper>
  )
}

export default Header
