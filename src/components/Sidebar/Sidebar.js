import React from 'react'
import './sidebar.scss'
import { FaGithub, FaLinkedin, FaHome } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const iconActiveHandler = (e) => {
        return e.isActive ? "icon-active" : "icon"
    }

    const footerActiveHandler = (e) => {
        return e.isActive ? "footer-active" : "footer"
    }

    const activeHandler = (type) => {
        return type === 'icon' ? iconActiveHandler : footerActiveHandler
    }

    return (
        <div className='sidebar'>
            <NavLink to="/" className={activeHandler('icon')}>
                <FaHome />
            </NavLink>
            <div className="icon">
                <FaGithub />
            </div>
            <div className='icon'>
                <FaLinkedin />
            </div>
            <NavLink to="/settings" className={activeHandler()}>
                <AiFillSetting />
            </NavLink >
        </div>
    )
}

export default Sidebar