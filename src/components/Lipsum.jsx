/** @jsx h @jsxFrag Fragment */

import PropTypes from "prop-types"
import {
  createElement as h,
  Fragment,
  memo
} from "react"

const Lipsum = ({
  "as": Element = Fragment
}) =>
  (
    <Element>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </Element>
  )

Lipsum.displayName = "Lipsum"

Lipsum.propTypes = {
  "as": PropTypes.elementType
}

const LipsumMemo = memo (Lipsum)

export { LipsumMemo as Lipsum }
