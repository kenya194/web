import React, {useContext} from "react";

import { GlobalContext } from "../context/GlobalState";

const TransactionCalculation = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext)

    const operationSign = transaction.amount > 0 ? '+' : '-'; 
    // the ternary operator identifies if the amount is positive or negative
    // transaction amount was taken from the transaction object in global state.

    return ( 
        <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
         {transaction.text} <span>{operationSign}${Math.abs(transaction.amount)}</span><button 
         onClick={ () => deleteTransaction(transaction.id)} className="delete-btn">X</button>
        </li>
     );
}
 
export default TransactionCalculation;