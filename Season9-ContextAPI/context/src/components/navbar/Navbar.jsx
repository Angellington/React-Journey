import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
            <>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/images"}>Images</NavLink>
            </>
  )
}

export default Navbar