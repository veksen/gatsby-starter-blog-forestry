import React from "react"
import * as SC from "./styles"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const Container: React.SFC<ContainerProps> = ({ children, className, style }) => (
  <SC.ContainerWrapper style={style} className={className}>
    {children}
  </SC.ContainerWrapper>
)

export default Container
