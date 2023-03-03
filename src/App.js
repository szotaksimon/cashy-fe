import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import Income from './components/Income';
import Expense from './components/Expense';

const queryClient = new QueryClient()

const API_URL = process.env.REACT_APP_BACKEND_URL + '/money-flow'

function App() {
  const { isLoading, error, data } = useQuery('todos', () =>
    fetch(API_URL).then((res) => res.json()));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;


  return (
    <div>
      <Income items={data} />
      <Expense items={data} />
    </div>
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

