import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'
import { useSelector } from 'react-redux'
import Navelem from './Navelem'

const Navbar = () => {
    const { settingsNavTab } = useSelector(state => state.engine)
    const activeHandle = (e) => {
        return e.isActive ? "navbar_element-active" : "navbar_element"
    }

    return (
        <div className="navbar">
            <NavLink to="/projects" className={activeHandle} id='home'>Projects</NavLink>
            <NavLink to="/about" className={activeHandle}>Education</NavLink>
            <NavLink to="/skills" className={activeHandle}>Skills</NavLink>
            <NavLink to="#" className={"navbar_element"} id="tool">...</NavLink>
            {settingsNavTab && <NavLink to="/settings" className={activeHandle}><Navelem title="settings"/></NavLink>}
        </div>
    )
}

export default Navbar