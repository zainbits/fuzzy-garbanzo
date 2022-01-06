import React from 'react'
import './Home.scss'
import { useSelector } from 'react-redux'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const Home = () => {
    const { name, qualities } = useSelector(state => state.contentful)

    const {text} = useTypewriter({
        words: qualities.length === 0 ? [''] : qualities,
        loop: 0, // Infinit
      })
      
    return (
        <div className='home'>
            <div className='introduction'>
                <div>Hi,</div>
                <div>My name is {name}</div>
                <div>
                    and I'm a <span style={{color: "red"}}>{text}</span><Cursor />
                </div>
            </div>
        </div>
    )
}

export default Home