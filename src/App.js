import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Route, Routes } from "react-router-dom"

import Income from './components/Income';
import Expense from './components/Expense';

const queryClient = new QueryClient()

const API_URL = process.env.REACT_APP_BACKEND_URL + '/money-flow'

function App() {
  const { isLoading, error, data } = useQuery('cashy', () =>
    fetch(API_URL).then((res) => res.json()));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const incomes = data.filter(item => {
    return item.income  === true
  })
  const expenses = data.filter(item => {
    return item.income  === !true
  })

  return (
    <Routes>
      <Route path="/" element={<Income incomes={incomes} />} />
      <Route path="/expenses" element={<Expense expenses={expenses}/>} />
    </Routes>
    
  );

}

function AppWrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

export default AppWrapper;

