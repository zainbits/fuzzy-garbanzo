import React, { useState } from 'react'

const Navelem = ({title}) => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(true)
    }

    return (
        <div onClick={handleClick}>
            <span>{title}</span>
            {click && <span>x</span>}
        </div>
    )
}

export default Navelem