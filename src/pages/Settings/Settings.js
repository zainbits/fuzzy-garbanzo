import setTheme from '../../utils/setTheme'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import { useState } from 'react'
import style from './Settings.module.scss'


const Settings = () => {

    const { themes, themesData } = useSelector(state => state.contentful)

    const [ currentTheme, setCurrentTheme ] = useState(localStorage.getItem('currentTheme'))

    const applyTheme = (theme) => {
        setTheme(theme.value)
        setCurrentTheme(localStorage.getItem('currentTheme'))
    }

    const getColor = color => {
        const flag = Object.keys(themesData).length === 0
        return flag ? 'black' : themesData[currentTheme][color]
    }

    const colorStyles = {
        control: styles => ({
            ...styles,
            backgroundColor: getColor('navbar-bg'),
            color: getColor('font-primary')
        }),
        option: (styles) => ({
            ...styles,
            backgroundColor: getColor('navbar-bg'),
            color: getColor('font-primary')
        }),
        valueLabel: styles => ({
            ...styles,
            color: 'red'
        })
    }

    return (
        <div className={style.settings}>
            Select Theme
            <Select defaultValue={currentTheme} styles={colorStyles} placeholder={currentTheme} onChange={applyTheme} options={themes} />
        </div>
    )
}

export default Settings