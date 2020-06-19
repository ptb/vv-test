/** @jsx h @jsxFrag Fragment */

import PropTypes from "prop-types"
import {
  createElement as h,
  memo
} from "react"

const Content = ({
  "as": Element = "div",
  terms = [
    "stars",
    "birds",
    "puppy",
    "nature",
    "snow",
    "cafe",
    "hipster",
    "startup",
    "salad",
    "funny"
  ]
}) => {
  const images = terms.map ((term) =>
    (
      <img
        alt={term}
        key={term}
        src={`https://source.unsplash.com/random/800x200?${term}`}
      />
    ))

  return (
    <Element>
      {images}
    </Element>
  )
}

Content.displayName = "Content"

Content.propTypes = {
  "as": PropTypes.elementType,
  "terms": PropTypes.arrayOf (PropTypes.string)
}

const ContentMemo = memo (Content)

export { ContentMemo as Content }
