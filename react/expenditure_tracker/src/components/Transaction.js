const Transaction = () => {
    return ( 
        <div>
            <h2>Add New Transaction</h2>
            <form className="frm">
                <div>
                        <h3>Text</h3>
            <input type="text" placeholder="Enter text..."></input>

            <h3>Amount</h3>
            <h6>(Positive - Income | Negative - Expense)</h6>
            <input type="text" placeholder="Enter Amount..."></input>

            <button className="btn">Add Transaction</button>
                </div>
            
            </form>
            
        </div>
     );
}
 
export default Transaction;