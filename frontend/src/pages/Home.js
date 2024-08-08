import React from 'react';
import Registration from '../components/Registration';

function Home() {
    return (
        <div className="main-container">
            <div className="left-container">
                {/* Left content placeholder */}
            </div>
            <div className="center-container">
                <img src="/images/griffith_logo_green.png" alt="Griffith University Logo" className="logo" />
                <div className="title-banner">
                    <h1>Griffith Cyber Security Bootcamp</h1>
                </div>
                <Registration />
            </div>
            <div className="right-container">
                {/* Right content placeholder */}
            </div>
        </div>
    );
}

export default Home;