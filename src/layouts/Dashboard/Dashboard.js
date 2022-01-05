import React from 'react'
import './Dashboard.css'
import Navbar from '../../components/Navbar/Navbar'
import { Route, Routes, NavLink } from "react-router-dom";
import Settings from '../../layouts/Settings/Settings'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <Routes>
                <Route path="/" element={<div>home</div>}/>
                <Route path="/about" element={<div>About</div>}/>
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    )
}

export default Dashboard