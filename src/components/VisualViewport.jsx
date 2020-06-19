/** @jsx h @jsxFrag Fragment */
/* eslint-env browser */

import PropTypes from "prop-types"
import {
  createElement as h,
  forwardRef,
  useEffect,
  useState
} from "react"

const VisualViewport = forwardRef (({
  "as": Element = "div",
  children,
  style = {},
  ...props
}, ref) => {
  const [viewport, setViewport] = useState ({})

  const updateViewport = () => {
    setViewport ({
      "maxHeight": window.visualViewport.height,
      "maxWidth": window.visualViewport.width
    })
  }

  /* eslint-disable-next-line consistent-return */
  useEffect (() => {
    if (
      typeof window !== "undefined"
        && typeof window.visualViewport !== "undefined"
    ) {
      updateViewport ()

      window.visualViewport.addEventListener ("resize", updateViewport)

      return () =>
        window.visualViewport.removeEventListener ("resize", updateViewport)
    }
  }, [])

  return (
    <Element
      ref={ref}
      style={{ ...style, ...viewport }}
        /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
    >
      {children}
    </Element>
  )
})

VisualViewport.displayName = "VisualViewport"

VisualViewport.propTypes = {
  "as": PropTypes.elementType,
  "children": PropTypes.node,
  "style": PropTypes.object
}

export { VisualViewport }
