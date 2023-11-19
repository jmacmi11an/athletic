import React from "react"
import "../styles/NavBar.css";

function NavBar({onClick}) {
    const handleClick = () => onClick()

    return (
        <div className='NavBar'>
            <div className='NavBar-container'>
                <div className='NavBar-header'>The Athletic</div>
                <button className='NavBar-button' onClick={handleClick}>Follow +</button>
            </div>
        </div>
    )
}

export default NavBar
