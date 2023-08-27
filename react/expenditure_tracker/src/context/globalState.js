import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'
// creating initial state
const initialState = {
    transactions : [
        // {id: 1, text:'Flower', amount: -20},
        // {id: 2, text:'Books', amount: -30},
        // {id: 3, text:'luggage', amount: +300},
        // {id: 4, text:'pens', amount: +20}
    ]
}
//creating context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const[state, dispatch] = useReducer(AppReducer, initialState)

    // actions => delete action, using the reducer comp
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    // you have to call them in the provider
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>)
}