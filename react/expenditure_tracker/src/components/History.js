import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const History = () => {

    const {transactions} = useContext(GlobalContext);

    return ( 
        <div>
            <h1>History</h1>

            <ul id="list">
                {transactions.map(transaction =>(<li className="plus">{transaction.text}
                 <span>+ $500</span><button className="delete_btn">X</button>
                </li>))}
                
            </ul>

            {/* <div className="history_output">
            <h3>Cash</h3>
            <h4>+ $500</h4>
            </div> */}
        
        </div>
     );
}
 
export default History;