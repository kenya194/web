import React, {createContext, useReducer} from "react";
// creating initial state
const initialState = {
    transactions : [
        {id: 1, text:'Flower', amount: -20},
        {id: 2, text:'Books', amount: -30},
        {id: 3, text:'luggage', amount: +20},
        {id: 4, text:'pens', amount: +20}
    ]
}
//creating context
export const globalContext = createContext(initialState);