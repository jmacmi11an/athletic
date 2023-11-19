import React from "react"
import { useState } from "react"
import "../styles/ListItem.css"
// import Select from 'react-select';

export default function ListItem ({name, id, onClick}) {
    const [selected, setSelected] = useState(false)




    const handleClick = () => {
        setSelected(!selected)
        onClick()
    }
    const classString = `ListItem ${selected && 'selected'}`
    
    return <div key={id} onClick={handleClick} className={classString}>
        {name}
    </div>
}