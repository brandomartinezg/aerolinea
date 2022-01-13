import { useState } from "react"

const useFilter = (array, key ,value = '' ) => {
    const [input, setInput] = useState(value);
    const arrayFiltered = array ? array.filter(c => c[key].toLowerCase().includes(input.toLowerCase())) : [];
    return[
        arrayFiltered.length === 0 ? array : arrayFiltered,
        setInput
    ];
};

export default useFilter;