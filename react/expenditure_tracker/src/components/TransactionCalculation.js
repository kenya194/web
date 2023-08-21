import React from "react";

const TransactionCalculation = () => {
    return ( 
        <li className="plus">
         {transaction.text} <span>+ $500</span><button className="delete-btn">X</button>
        </li>
     );
}
 
export default TransactionCalculation;