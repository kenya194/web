import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'
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
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) => {
    const[state, dispatch] = useReducer(AppReducer, initialState)

    return (<GlobalContext.Provider value={{transactions: state.transaction}}>
        {children}
    </GlobalContext.Provider>)
}