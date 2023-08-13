
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import Transaction from './components/Transaction';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <div className="App">
      <Header/>

      <div className='container'>
        <Balance/>
        <IncomeExpense/>
      </div>

      <div>
        <History/>
      </div>

      <div>
        <Transaction/>
        <AddTransaction/>
      </div>

    

    </div>
  );
}

export default App;
