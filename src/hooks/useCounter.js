import { useState } from "react";

const useCounter = (initialValue = 1) => {
    const [counter, setCounter] = useState(initialValue);
    const increment = () => setCounter(prev => prev + 1);
    const decrement = () => setCounter(prev => prev === 0 ? 0 : prev - 1);
    const resetCounter = () => setCounter(initialValue);
    const isPositive = counter > 0;

    return[
        counter, 
        increment, 
        decrement,
        resetCounter,
        isPositive
    ];
}

export default useCounter;