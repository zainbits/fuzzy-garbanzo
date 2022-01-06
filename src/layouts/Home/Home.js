import React from 'react'
import './Home.scss'
import { useSelector } from 'react-redux'
import Typewriter from 'typewriter-effect'
const Home = () => {
    const { name, qualities } = useSelector(state => state.contentful)
    return (
        <div className='home'>
            <div className='introduction'>
                <div>Hi</div>
                <div>My name is {name}</div>
                <div className='iam'>& I am a&nbsp;<Typewriter
                    options={{
                        strings: qualities,
                        autoStart: true,
                        loop: true,
                    }}
                />
                </div>
            </div>
        </div>
    )
}

export default Home