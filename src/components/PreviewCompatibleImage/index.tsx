// import Img from "gatsby-image"
import React from "react"

interface PreviewCompatibleImageProps {
  imageInfo: {
    alt?: string
    childImageSharp?: object
    image: object | string
  }
  style?: object
}

const PreviewCompatibleImage = ({ imageInfo, style }: PreviewCompatibleImageProps): JSX.Element | null => {
  const imageStyle = { ...style, borderRadius: "5px" }
  const { alt = "", childImageSharp, image } = imageInfo

  if (!!image && !!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }
  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }
  if (!!image && typeof image === "string") {
    return <img style={imageStyle} src={image} alt={alt} />
  }

  return null
}

export default PreviewCompatibleImage
