import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {

    const {transactions} = useContext(GlobalContext);

     const amounts = transactions.map(transaction => transaction.amount);


    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expenditure = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0)  * -1)
        .toFixed(2);

    return ( 
        <div className="income_Expense">

            <div className="money">
            <h2>Income</h2>
            <p className="Inc_ome"> ${income}</p>
            </div>

            <div className="money">
            <h2>Expenditure</h2>
            <p className="ex_pense">${expenditure}</p>
            </div>
        </div>
     );
}
 
export default IncomeExpense;