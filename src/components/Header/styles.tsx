import styled, { css } from "styled-components"
import { Link } from "gatsby"

import Logo from "../../icons/logo.svg"
import Container from "../Container"

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

export const MobileWrapper = styled.div`
  display: flex;
  height: 86px;

  @media screen and (max-width: 767px) {
    flex: 0 0 auto;
    width: 100%;
    align-items: center;
  }
`

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  box-shadow: none;

  @media screen and (max-width: 567px) {
    pointer-events: none;
    margin-right: 20px;
  }
`

export const StyledLogo = styled(Logo)`
  width: 214px;
`

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-left: auto;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    height: auto;
    display: none;
    flex: 1 0 auto;
    width: 100%;
  }

  &.isOpen {
    padding-top: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
`

export const StyledLink = styled(Link)`
  color: #f3e9de;
  font-size: 17px;
  position: relative;
  box-shadow: none;

  @media screen and (max-width: 767px) {
    margin-top: 15px;
    font-size: 24px;
  }

  & + & {
    margin-left: 25px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    display: block;
    transition: all 0.3s;
    border-bottom: 2px solid #f3e9de;

    @media screen and (max-width: 767px) {
      border-color: transparent;
    }
  }

  &:hover {
    color: #f3e9de;
  }

  &:hover::after,
  &.active::after {
    top: -6px;
    left: -9px;
    right: -9px;
    bottom: -6px;
    border: 1px solid #fff;
  }
`

export const HeaderWrapper = styled.nav<{ background: any }>`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 25px 0;
  height: 136px;
  background: linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%),
    url(${props => props.background}) no-repeat 50% 6% / cover;
  transition: all 0.3s;

  &.extended {
    min-height: 450px;
    max-height: 731px;
    height: 75vh;

    @media screen and (max-width: 767px) {
      height: 350px;
    }
  }

  &.extended ${StyledContainer} {
    justify-content: center;
    flex-direction: column;
  }

  &.extended ${MobileWrapper} {
    height: auto;
    margin: 0 auto;
  }

  &.extended ${LogoWrapper} {
    flex: 1 0 auto;

    @media screen and (max-width: 567px) {
      order: 1;
    }
  }

  &.extended ${StyledLogo} {
    width: 500px;

    @media screen and (max-width: 767px) {
      max-width: 100%;
      margin: 0 20px;
      width: 214px;
    }
  }

  &.extended ${Menu} {
    flex: 0 0 100px;
    margin: 0 auto;
    order: 1;

    @media screen and (max-width: 767px) {
      flex: 1 0 auto;
    }
  }

  &.extended ${StyledLink} {
    font-size: 24px;
  }

  &.isOpen {
    @media screen and (max-width: 767px) {
      display: flex;
    }
  }

  @media screen and (max-width: 767px) {
    &.isOpen,
    &.isOpen.isExtended {
      height: 100vh;
    }
  }
`

// TODO: replicate
// @media screen and (max-width: 767px) {
//   .header-menu-open ~ .content,
//   .header-menu-open ~ .footer {
//     display: none;
//   }
// }

export const Collapser = styled.div`
  display: none;
  margin-left: auto;
  cursor: pointer;
  opacity: 0.35;
  user-select: none;

  @media screen and (max-width: 767px) {
    display: block;
  }
`
