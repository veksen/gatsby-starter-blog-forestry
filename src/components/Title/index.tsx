import { Link } from "gatsby"
import React from "react"
import * as SC from "./styles"

interface TitleProps {
  children: React.ReactNode
  backTo?: {
    link: string
    text: string
  }
  backToText?: string
  style?: React.CSSProperties
}

const Title = ({ children, backTo, ...restProps }: TitleProps): JSX.Element => (
  <SC.TitleWrapper {...restProps}>
    {children}
    {backTo && (
      <SC.Back to={backTo.link}>
        <SC.Arrow>⟵</SC.Arrow> {backTo.text}
      </SC.Back>
    )}
  </SC.TitleWrapper>
)

export default Title
