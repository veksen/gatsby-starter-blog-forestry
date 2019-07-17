import styled from "styled-components"
import { Link } from "gatsby"

export const TitleWrapper = styled.h2`
  color: #ff806f !important;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px !important;
`

export const Back = styled(Link)`
  margin-top: 10px;
  color: #ff806f;
  font-size: 16px;
  opacity: 0.6;
  position: relative;

  &:hover {
    color: #ff806f;
    opacity: 1;
  }
`

export const Arrow = styled.span`
  margin-right: 10px;

  @media screen and (min-width: 568px) {
    position: absolute;
    right: 100%;
  }
`
