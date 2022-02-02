import React, { useEffect } from 'react'
import './sidebar.scss'
import { FaGithub, FaLinkedin, FaHome } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { NavLink, useLocation } from 'react-router-dom'
import { setCurrentNavTab, toggleSettingsNavTab } from '../../redux/engine/engine-reducer'
import { useDispatch } from 'react-redux'

const Sidebar = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname.split('/')[2];
        dispatch(setCurrentNavTab(path));
    })

    const dispatch = useDispatch()

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
            <div className="sidebar_tabs">
                <NavLink to="/portfolio/home" className={activeHandler('icon')}>
                    <FaHome />
                </NavLink>
                <NavLink to="/portfolio/git" className={activeHandler('icon')}>
                    <FaGithub />
                </NavLink>
                <div className='icon'>
                    <FaLinkedin />
                </div>
            </div>
            <div className="sidebar_tools">
                <NavLink to="/portfolio/settings" className={activeHandler('icon')}>
                    <AiFillSetting onClick={() => dispatch(toggleSettingsNavTab(true))} />
                </NavLink >
            </div>
        </div>
    )
}

export default Sidebar