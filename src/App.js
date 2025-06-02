import React from 'react';
import Navbar from "./navbar/Navbar";
import './App.css';


function App() {

    return (
        <div>
            <Navbar/>
            <div style={{paddingTop: '120px'}}>
                <h2> Welcome to My Portfolio</h2>
            </div>
            <img src="/profile.png" alt="profile" className="profile-image"/>
        </div>
    );
}

export default App;