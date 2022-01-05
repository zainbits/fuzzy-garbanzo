import React, { useState } from 'react'

const Navelem = ({title, isActive, onClick}) => {
    // const [click, setClick] = useState(false)
    // const handleClick = () => {
    //     setClick(!click)
    // }

    return (
        <div className={isActive ? 'navbar_element-active' : 'navbar_element'} onClick={onClick}>
            <span>{title}</span>
            {isActive && <span>x</span>}
        </div>
    )
}

export default Navelem