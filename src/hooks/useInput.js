import { useState } from "react";

const useInput = (type='text', input = '') => {
    const [inputValue, setInputValue] = useState(input);
    // const regex = /(?i)^(?:[a-z]+(?: |\. ?)?)+[a-z]$/;
    const regex = /^[a-zA-Z ]+$/;
    const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    const isValidInput = type === 'text' ? regex.test(inputValue):regexEmail.test(inputValue);
    return[
        inputValue,
        isValidInput,
        setInputValue
    ];
}
export default useInput;