import React from "react"
import logo from "../../images/logotipo.svg"

const Header = () => {
  return (
    <header className={"content-center"}>
      <div className={"content-center pt-10"}>
        <img className={"mx-auto"} src={logo} alt="Luz Natural Jóias" />
      </div>
    </header>
  )
}

export default Header
