const Transaction = () => {
    return ( 
        <div>
            <h2>Add New Transaction</h2>

            <h3>Text</h3>
            <input type="text" placeholder="Enter text..."></input>

            <h3>Amount</h3>
            <h6>(Positive - Income | Negative - Expense)</h6>
            <input type="text" placeholder="Enter Amount..."></input>
        </div>
     );
}
 
export default Transaction;