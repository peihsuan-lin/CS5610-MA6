import './Cell.css';
import React, { useState } from 'react';

export function Cell(props) {
    const [cellColor, setCellColor] = useState("white");
    const handleClick = () => {
        if (cellColor === "white") {
            setCellColor("black");
            props.onClick(1);
        } else {
            setCellColor("white");
            props.onClick(-1);
        }
    }

    let cellClassName = 'box'; 
    if (cellColor === 'black') {
        cellClassName = 'box-click';
    }

    return (
        <div className={cellClassName} onClick={handleClick}></div>
    );
}
