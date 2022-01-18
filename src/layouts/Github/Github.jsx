import React, { useEffect, useState } from 'react'
import style from './Github.module.scss'

const Github = () => {

    const [data, setData] = useState({})

    useEffect(()=>{
        fetch('http://localhost:5000/github/graphql')
        .then( res => res.json())
        .then( details => {
            setData(details)
            console.log(data)
        })
        .catch( err => console.error(err))
    }, [])

    return (
        <div className={style.github_component}>
            github
        </div>
    )
}

export default Github