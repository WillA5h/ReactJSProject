import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem
        title = {expenses[0].title}
        amount = {expenses[0].amount}
        date = {expenses[0].date}
      />
      <ExpenseItem
        title = {expenses[1].title}
        amount = {expenses[1].amount}
        date = {expenses[1].date}
      />
      <ExpenseItem
        title = {expenses[2].title}
        amount = {expenses[2].amount}
        date = {expenses[2].date}
      />
    </div>
  );
}

export default App;
