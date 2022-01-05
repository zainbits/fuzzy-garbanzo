import React, { useEffect } from 'react'
import setTheme from '../../utils/setTheme'
import { useSelector, useDispatch } from 'react-redux'
import { add, toggleSettingsNavTab } from '../../redux/engine/engine-reducer'

const Settings = () => {
    const { flag, count } = useSelector(state => state.engine)
    const dispatch = useDispatch()
    const themer = (theme) => {
        setTheme(theme)
    }

    return (
        <div>
            {count}
            <button onClick={()=>themer("light")}>LightTheme</button>
            <button onClick={()=>themer("default")}>Default</button>
            <button onClick={()=>{dispatch(add())}}>add</button>
            <button onClick={()=>{dispatch(toggleSettingsNavTab())}}>show hide settings navbar</button>
        </div>
    )
}

export default Settings