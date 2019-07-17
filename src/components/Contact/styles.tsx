import styled from "styled-components"

export const Inner = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 88px;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.3s top;
`

export const InnerHover = styled(Inner)`
  top: -100%;
`

export const FollowOnFB = styled.a`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #4267b2;
  border-bottom: 2px solid #4267b2;
  color: #4267b2;
  margin: 22px 0;
  height: 88px;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    background: #4267b2;
    color: #fff;
  }

  &:hover ${Inner} {
    top: 100%;
  }

  &:hover ${InnerHover} {
    top: 0;
  }

  svg {
    margin-right: 15px;
  }

  svg path {
    transition: fill 0.3s ease;
    fill: #4267b2;
  }

  &:hover svg path {
    fill: #fff;
  }
`

// /* purgecss ignore */
// .follow-on-fb svg path {
//   transition: fill 0.3s ease;
//   fill: #4267b2;
// }

// /* purgecss ignore */
// .follow-on-fb:hover svg path {
//   fill: #fff;
// }

// .follow-on-fb svg {
//   margin-right: 15px;
// }
