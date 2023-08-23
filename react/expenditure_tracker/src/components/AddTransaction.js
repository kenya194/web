import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Addtransaction = () => {

    const[inputText, setText] = useState('');
    const handleText = (e)=>{
        setText(e.target.value)
    };

    const[Amount, setAmount] = useState();
    const handleAmount = (e)=>{
        setAmount(e.target.value)
    };

    const{addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000000),
            inputText,
            Amount: +Amount
        }
        //this set an id for every transaction, so we have set it to generate an outrageous quantity of random numbers.
        // the inputtext and amount collects the data in their state.
        addTransaction(newTransaction);
    }

    return ( 

        <div>
            <h2>Add New Transaction</h2>

            <form onSubmit={onSubmit}>
            
            <h3>Text</h3>
            <input type="text" value= {inputText} onChange={handleText} placeholder="Enter text..."></input>

            <h3>Amount</h3>
            <h6>(Positive - Income | Negative - Expense)</h6>
            <input type="number" value={Amount} onChange={handleAmount} placeholder="Enter Amount..."></input>

            <button className="btn">Add Transaction</button>
            </form>
            
            
        </div>
     );
}
 
export default Addtransaction;