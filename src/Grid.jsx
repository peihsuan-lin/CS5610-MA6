import { useContext } from 'react';
import './Grid.css';
import { Cell } from './Cell';
import { CounterContext } from './CounterProvider';

export function Grid() {
    const [countState] = useContext(CounterContext);

    return (
        <div className="grid-container">
            <h2>Count: {countState}</h2>
            <div className="grid">
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </div>
        </div>
    );
}
