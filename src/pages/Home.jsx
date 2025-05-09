import React from 'react';
import '../styles/style.css';

function Home() {
    return (
        <div className="default-params">
            <div className="custom-header">
                <img style={{ width: "20%", justifyItems: "center", marginLeft: "40%"}}src="../../assets/images/icon-192x192.jpg" />
                <h1 className="page-title">Project Light</h1>
                <h1 className="custom-subtitle">Literacy for Life Transformation</h1>
            </div>
            <center><h2 className="title">A-Z Who God Says I Am</h2></center>
            <img className="branding-img" src="../../assets/images/branding/kidBanner.png" alt="kids branding images" />
            <div className="divider"></div> 
        </div>
    );
}

export default Home;