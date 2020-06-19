/** @jsx h @jsxFrag Fragment */

import { css } from "@amory/style"
import PropTypes from "prop-types"
import {
  createElement as h,
  forwardRef,
  Fragment,
  memo
} from "react"

import { Button } from "./Button.jsx"
import { Lipsum } from "./Lipsum.jsx"
import { VisualViewport } from "./VisualViewport.jsx"

const Modal = forwardRef (({
  setShowModal,
  showModal
}, ref) =>
  (
    <VisualViewport
      className={css ({
        "backgroundColor": "rgba(255,255,204,.8)",
        "left": 0,
        "minHeight": "100%",
        "minWidth": "100%",
        "overflowY": "auto",
        "position": "fixed",
        "top": 0,
        "WebkitOverflowScrolling": "touch",
        "zIndex": 1
      })}
      ref={ref}
    >
      {[...Array (50).keys ()].map ((i) =>
        (
          <Fragment key={i}>
            <input defaultValue={i} type="text" />
            <Button
              setShowModal={setShowModal}
              showModal={showModal}
            />
            <Lipsum />
          </Fragment>
        ))}
    </VisualViewport>
  ))

Modal.displayName = "Modal"

Modal.propTypes = {
  "setShowModal": PropTypes.func,
  "showModal": PropTypes.bool
}

const ModalMemo = memo (Modal)

export { ModalMemo as Modal }
