import React from 'react'
import style from './Education.module.scss'
import { useSelector } from 'react-redux'

const Education = () => {

    const { education } = useSelector(state => state.contentful)

    return (
        <div className={style.education_component}>
            {education.map( (item, index) => {
                const details = Object.keys(item)
                return <div key={index}>
                    <h2>{item.name}</h2>
                    <ul>
                    {details.map( key => (
                        key !== "name" && <li key={key}>
                            {key} : {item[key]}
                        </li>
                    ))}
                    </ul>
                </div>
            })}
        </div>
    )
}

export default Education