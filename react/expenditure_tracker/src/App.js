import { GlobalProvider } from './context/GlobalState';

import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import Transaction from './components/Transaction';

function App() {
  return (
    <GlobalProvider>
      <Header/>

      <div className='container'>
        <Balance/>
        <IncomeExpense/>
        <History/>
        <Transaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
