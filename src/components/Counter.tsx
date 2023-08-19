import React, {useState} from 'react';
import style from "./Counter.module.scss"

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button className={style.btn} onClick={() => setCount(count + 1)}>increment</button>
            <h1>{count}</h1>
        </div>
    );
};
