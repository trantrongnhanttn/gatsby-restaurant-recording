import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./Navbaricons"
import Navbaricons from "./Navbaricons"

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <NavbarHeader />
        <NavbarLinks />
        <Navbaricons />
      </nav>
    )
  }
}
