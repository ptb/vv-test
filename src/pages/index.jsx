/** @jsx h @jsxFrag Fragment */

import PropTypes from "prop-types"
import {
  createElement as h,
  memo,
  useRef,
  useState
} from "react"
import useScrollLock from "use-scroll-lock"

import { Button } from "../components/Button.jsx"
import { Content } from "../components/Content.jsx"
import { Modal } from "../components/Modal.jsx"

const IndexPage = ({ "as": Element = "div" }) => {
  const ref = useRef ()
  const [showModal, setShowModal] = useState (false)

  useScrollLock (showModal, ref)

  return (
    <Element>
      <Button
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <Content />
      <Button
        setShowModal={setShowModal}
        showModal={showModal}
      />
      <Content />
      {showModal && (
        <Modal
          ref={ref}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      )}
    </Element>
  )
}

IndexPage.displayName = "IndexPage"

IndexPage.propTypes = {
  "as": PropTypes.elementType
}

const IndexPageMemo = memo (IndexPage)

export { IndexPageMemo as default }
