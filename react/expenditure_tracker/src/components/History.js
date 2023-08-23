import React, {useContext} from "react";

import TransactionCalculation from "./TransactionCalculation";
import { GlobalContext } from "../context/GlobalState";

const History = () => {

    const {transactions} = useContext(GlobalContext);
    // passing context from global state to transactions.

    return ( 
        <div>
            <h1>History</h1>

            <ul className="list">

                {transactions.map(transaction =>( <TransactionCalculation key={transaction.id} transaction ={transaction}/>))}
                
            </ul>
        
        </div>
        // Giving the transaction an id makes each transaction unique.
        // the transaction.map loops through the object transaction.
     // collection of transaction data from GlobalState and passing it as a prop to TransactionCalculation.
    
     );
}
 
export default History;