/** @jsx h @jsxFrag Fragment */

import PropTypes from "prop-types"
import {
  createElement as h,
  memo
} from "react"

const Button = ({
  "as": Element = "button",
  setShowModal,
  showModal
}) =>
  (
    <Element
      onClick={() =>
        setShowModal (!showModal)}
      type="button"
    >
      {showModal ? "Hide Modal" : "Show Modal"}
    </Element>
  )

Button.displayName = "Button"

Button.propTypes = {
  "as": PropTypes.elementType,
  "setShowModal": PropTypes.func,
  "showModal": PropTypes.bool
}

const ButtonMemo = memo (Button)

export { ButtonMemo as Button }
