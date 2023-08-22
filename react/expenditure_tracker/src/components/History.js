import React, {useContext} from "react";

import TransactionCalculation from "./TransactionCalculation";
import { GlobalContext } from "../context/GlobalState";

const History = () => {

    const {transactions} = useContext(GlobalContext);

    return ( 
        <div>
            <h1>History</h1>

            <ul className="list">
                {transactions.map(transaction =>( <TransactionCalculation key={transaction.id} transaction ={transaction}/>))}
                
            </ul>

            {/* <div className="history_output">
            <h3>Cash</h3>
            <h4>+ $500</h4>
            </div> */}
        
        </div>
     );
}
 
export default History;