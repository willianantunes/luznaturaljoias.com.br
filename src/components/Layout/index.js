import React from "react"
import Header from "../Header"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={"p-10"}>{children}</main>
    </>
  )
}

export default Layout
