import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
   const {transactions} = useContext(GlobalContext);

   const Amounts = transactions.map(transaction => transaction.amount);
   // check the amounts again
   
   const total = Amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

   // looping through the amount array and summing up the total transaction to initial the total balance.

  return (
    <div className='balance'>
    <h2>Your Balance</h2>
    
    <h2> ${total}</h2>
    </div>
  )
}
