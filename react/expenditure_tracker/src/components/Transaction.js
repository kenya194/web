import { useState } from "react";

const Transaction = () => {

    const[inputText, setText] = useState();
    const handleText = (e)=>{
        setText(e.target.value)
    };

    const[Amount, setAmount] = useState();
    const handleAmount = (e)=>{
        setAmount(e.target.value)
    };



    return ( 

        <div>
            <h2>Add New Transaction</h2>

            <form className="frm">
                <div>
                <h3>Text</h3>
            <input type="text" value= {inputText} onChange={handleText} placeholder="Enter text..."></input>

            <h3>Amount</h3>
            <h6>(Positive - Income | Negative - Expense)</h6>
            <input type="number" value={Amount} onChange={handleAmount} placeholder="Enter Amount..."></input>

            <button className="btn">Add Transaction</button>
                </div>
            
            </form>
            
        </div>
     );
}
 
export default Transaction;