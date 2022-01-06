import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentNavTab, toggleSettingsNavTab } from '../../redux/engine/engine-reducer'
import { useNavigate } from 'react-router'
import { IoMdClose } from 'react-icons/io'

const Navelem = ({ title }) => {
    const { currentNavTab } = useSelector(state => state.engine)
    const [click, setClick] = useState(false)
    const navigate = useNavigate()
    const [className, setClassName] = useState("navbar_element")
    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch(setCurrentNavTab(title))
        navigate(`/${title}`)
    }

    const closeTabHandler = () => {
        if (currentNavTab === 'settings') {
            dispatch(toggleSettingsNavTab(false))
        }
        dispatch(setCurrentNavTab('close'))
        navigate("home")
    }

    useEffect(() => {
        if (currentNavTab === title) {
            setClick(true)
            setClassName("navbar_element-active")
        } else {
            setClick(false)
            setClassName("navbar_element")
        }
    }, [currentNavTab, title])

    return (
        <div className={className}>
            <span onClick={clickHandler}>{title}</span>
            {click && <span className='button-close' onClick={closeTabHandler}><IoMdClose /></span>}
        </div>
    )
}

export default Navelem