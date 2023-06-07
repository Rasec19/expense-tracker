import { GlobalProvider } from './context/GlobalState';
import { Header, TransactionForm, Balance, TransactionList, IncomeExpenses, ExpenseChart } from './components'

function App() {

  return (
   <GlobalProvider>
    <div className='bg-zinc-950 text-white h-screen flex justify-center items-center'>
      <div className='container mx-auto w-3/6'>
        <div className='bg-zinc-800 p-10 rounded-lg flex gap-x-2'>
          <div>
            <h1 className='text-4xl font-bold text-emerald-500'>Expense Tracker</h1>
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>
          <div className='flex flex-col flex-1'>
            <ExpenseChart />
            <TransactionList />
          </div>
        </div>
      </div>
    </div>
   </GlobalProvider> 
  )
}

export default App
