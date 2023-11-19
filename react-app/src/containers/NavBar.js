import React from "react"
import "../styles/NavBar.css";

function NavBar({onClick}) {
    const handleClick = () => onClick()

    return (
        <div className='NavBar'>
            <div className='NavBar-container'>
                <h4 className='NavBar-header'>The Athletic</h4>
                <div className='NavBar-button'>
                    <button onClick={handleClick}>Follow +</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar
