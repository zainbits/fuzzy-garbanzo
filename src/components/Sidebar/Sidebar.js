import React from 'react'
import './sidebar.scss'
import { FaGithub, FaLinkedin, FaHome } from 'react-icons/fa'
import { AiFillSetting } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { setCurrentNavTab, toggleSettingsNavTab } from '../../redux/engine/engine-reducer'
import { useDispatch } from 'react-redux'

const Sidebar = () => {

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

    const clickHandler = () => {
        dispatch(setCurrentNavTab('settings'))
        dispatch(toggleSettingsNavTab(true))
    }

    return (
        <div className='sidebar'>
            <div className="sidebar_tabs">
                <NavLink to="/portfolio/home" className={activeHandler('icon')}>
                    <FaHome onClick={() => { dispatch(setCurrentNavTab('closed')) }} />
                </NavLink>
                <NavLink to="/portfolio/git" className="icon">
                    <FaGithub />
                </NavLink>
                <div className='icon'>
                    <FaLinkedin />
                </div>
            </div>
            <div className="sidebar_tools">
                <NavLink to="/portfolio/settings" className={activeHandler('icon')}>
                    <AiFillSetting onClick={clickHandler} />
                </NavLink >
            </div>
        </div>
    )
}

export default Sidebar