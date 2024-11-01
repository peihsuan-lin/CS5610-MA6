import './Cell.css';
import { useState, useContext } from 'react';
import { CounterContext } from './CounterProvider';

export function Cell() {
    const [cellColor, setCellColor] = useState("white");
    const [countState, setCountState] = useContext(CounterContext);

    const handleClick = () => {
        if (cellColor === "white") {
            setCellColor("black");
            setCountState(countState + 1);
        } else {
            setCellColor("white");
            setCountState(countState - 1);
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
