/** @jsx h @jsxFrag Fragment */

import {
  createElement as h,
  StrictMode
} from "react"
import { render } from "react-dom"

import { App } from "./pages/_app.jsx"

render (
  (
    <StrictMode>
      <App />
    </StrictMode>
  ),
  /* eslint-disable-next-line no-undef */
  document.getElementById ("root")
)
