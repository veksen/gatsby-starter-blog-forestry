import React from "react"

import Header from "../Header"
import { rhythm, scale } from "../../utils/typography"

const Layout = (props): JSX.Element => {
  const { location, children } = props

  return (
    <div>
      <Header location={location} />
      {children}
    </div>
  )
}

export default Layout
