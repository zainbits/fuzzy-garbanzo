import React, { useEffect } from 'react'
import setTheme from '../../utils/setTheme'

const Settings = () => {

    const themer = (theme) => {
        setTheme(theme)
    }

    return (
        <div>
            <button onClick={()=>themer("light")}>LightTheme</button>
            <button onClick={()=>themer("default")}>Default</button>
        </div>
    )
}

export default Settings