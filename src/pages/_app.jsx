/** @jsx h @jsxFrag Fragment */

import {
  createElement as h,
  memo
} from "react"

import IndexPage from "./index.jsx"

const App = () =>
  (
    <IndexPage />
  )

App.displayName = "App"

const AppMemo = memo (App)

export { AppMemo as App }
