import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()

async function fetchMoney() {
  const res = await fetch(process.env.REACT_APP_BACKEND_URL+'/money-flow')
  return res.json()
}

function Money() {
  const { data, status } = useQuery('money', fetchMoney)
  if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'error') {
    return <p>Error!</p>
  }
  console.log(data)

  return (
    <div>
      <ul>
        {data.map((money) => (<li key={money.id}>{money.amount} Ft | {money.category.categoryName} - {money.income ? 'bevétel' : 'kiadás'}</li>))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Money />
      </QueryClientProvider>
    </div>
  );
}

export default App;
