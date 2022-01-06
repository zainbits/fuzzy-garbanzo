import setTheme from '../../utils/setTheme'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import { useState } from 'react'
import './Settings.scss'


const Settings = () => {

    const { themes } = useSelector(state => state.contentful)

    const [state, setState] = useState(localStorage.getItem('currentTheme'))

    const applyTheme = (theme) => {
        setTheme(theme.value)
        setState(localStorage.getItem('currentTheme'))
    }

    const colorStyles = {
        control: styles => ({
            ...styles,
            backgroundColor: 'green',
            color: 'yellow'
        }),
        option: styles => ({...styles, backgroundColor: 'yellow'})
    }

    return (
        <div className='settings'>
            Select Theme
            <Select styles={colorStyles} placeholder={state} onChange={applyTheme} options={themes} />
        </div>
    )
}

export default Settings