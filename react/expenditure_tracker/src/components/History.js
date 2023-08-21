import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const History = () => {

    const context = useContext(GlobalContext);

    console.log (context)

    return ( 
        <div>
            <h1>History</h1>

            <ul className="list">
                <li className="plus">
                Cash <span>+ $500</span><button className="delete_btn">X</button>
                </li>   
            </ul>

            {/* <div className="history_output">
            <h3>Cash</h3>
            <h4>+ $500</h4>
            </div> */}
        
        </div>
     );
}
 
export default History;