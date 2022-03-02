import { useState } from "react";


export const useCounter = ( initialState = 1 ) => { //si no se recive un valor, el valor por defecto 1
   
    const [counter, setCounter] = useState( initialState );

    const increment = ( /*factor = 1*/) => {
        setCounter ( counter + 1 /*factor*/); 
    }

    const decrement = ( /*factor = 1*/) => {
        setCounter ( counter - 1 /*factor*/); 
    }

    const reset = () => {
        setCounter ( initialState );
    }

    return { 
        counter, 
        increment, 
        decrement,
        reset
     }
};
