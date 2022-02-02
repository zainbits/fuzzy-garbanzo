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
                <Route path="/portfolio/home" element={<Home />}/>
                <Route path="/portfolio/education" element={<Education />}/>
                <Route path="/portfolio/settings" element={<Settings />} />
                <Route path="/portfolio/skills" element={<Skills />}/>
                <Route path="/portfolio/git" element={<Github />} />
                <Route path="/portfolio/*" element={<Navigate replace to="/portfolio/home" />} />
            </Routes>
        </div>
    )
}

export default Dashboard