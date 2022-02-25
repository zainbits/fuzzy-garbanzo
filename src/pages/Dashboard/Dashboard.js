import React from 'react'
import './Dashboard.css'
import Navbar from '../../components/Navbar/Navbar'
import { Route, Routes, Navigate } from "react-router-dom";
import Settings from '../Settings/Settings'
import Home from '../Home/Home'
import Github from '../Github/Github'
import Education from '../Education/Education'
import Skills from '../Skills/Skills'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/education" element={<Education />}/>
                <Route path="/settings" element={<Settings />} />
                <Route path="/skills" element={<Skills />}/>
                <Route path="/git" element={<Github />} />
                <Route path="/*" element={<Navigate replace to="/home" />} />
            </Routes>
        </div>
    )
}

export default Dashboard