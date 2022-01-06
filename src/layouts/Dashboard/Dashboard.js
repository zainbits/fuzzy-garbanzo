import React from 'react'
import './Dashboard.css'
import Navbar from '../../components/Navbar/Navbar'
import { Route, Routes, Navigate } from "react-router-dom";
import Settings from '../../layouts/Settings/Settings'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <Routes>
                <Route path="/home" element={<div>home v1:32:5jan</div>}/>
                <Route path="/education" element={<div>education</div>}/>
                <Route path="/settings" element={<Settings />} />
                <Route path="/projects" element={<div>projects</div>}/>
                <Route path="/skills" element={<div>skills</div>}/>
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
        </div>
    )
}

export default Dashboard