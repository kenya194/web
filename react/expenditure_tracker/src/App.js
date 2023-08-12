
import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';

function App() {
  return (
    <div className="App">
      <Header/>

      <div className='container'>
        <Balance/>
        <IncomeExpense/>
      </div>

    

    </div>
  );
}

export default App;
