import Expenses from "./components/Expenses";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Flowers',
      amount: '35.23',
      date: new Date (2021, 6, 6),
    },
    {
      id :'e2',
      title: 'GPU',
      amount: '1000.99',
      date: new Date (2020, 1, 25),
    },
    {
      id: 'e3',
      title: 'Nespresso Pods',
      amount: '25.00',
      date: new Date (2021, 4, 12),
    }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <div>
        <Expenses expenses = {expenses} />
      </div>
    </div>
  );
}

export default App;
