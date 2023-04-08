import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPizza = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="19" y="271" rx="14" ry="14" width="235" height="28" /> 
    <circle cx="134" cy="142" r="106" /> 
    <rect x="18" y="316" rx="17" ry="17" width="236" height="88" /> 
    <rect x="18" y="423" rx="17" ry="17" width="95" height="29" /> 
    <rect x="316" y="349" rx="12" ry="12" width="122" height="20" /> 
    <rect x="133" y="423" rx="11" ry="11" width="115" height="28" />
  </ContentLoader>
)

export default SkeletonPizza