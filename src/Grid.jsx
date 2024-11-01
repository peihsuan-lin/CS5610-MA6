import React, { useState } from 'react';
import './Grid.css';
import { Cell } from './Cell';

export function Grid() {
    const [onCount, setOnCount] = useState(0);

    function updateCount(changeInCount) {
        setOnCount((currentCount) => currentCount + changeInCount);
    }

    return (
        <div className="grid-container">
            <h2>Count: {onCount}</h2>
            <div className="grid">
                <Cell onClick={updateCount} />
                <Cell onClick={updateCount} />
                <Cell onClick={updateCount} />
                <Cell onClick={updateCount} />
            </div>
        </div>
    );
}
