import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export const Dashboard = () => {
    return (
        <div className="body">
            <Navbar />
            <div className="text-center dasboard-a">
            <h1>Dashboard</h1>
            <h1>Welcome to gifti global</h1>
            </div>
            <div className="dashboard">
            <Footer/>
            </div>
        </div>
    )
}


export default Dashboard;