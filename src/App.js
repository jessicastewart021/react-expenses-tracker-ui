import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const dummyExpenses = [
  { title: "Car insurance", amount: 294.67, date: new Date(2022, 5, 4), id: 1 },
  {
    title: "Home insurance",
    amount: 295.67,
    date: new Date(2021, 2, 28),
    id: 2,
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { ...expense, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
