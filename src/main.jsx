import React, { useState } from 'react';
import ExpenseForm from './components/Expenseform';
import ExpenseTable from './components/Expensetable';
import SearchBar from './components/searchbar';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const deleteExpense = (indexToDelete) => {
    setExpenses(expenses.filter((_, index) => index !== indexToDelete));
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      <div style={{ flex: 1 }}>
        <h2>Add Expense</h2>
        <ExpenseForm addExpense={addExpense} />
      </div>
      <div style={{ flex: 2 }}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ExpenseTable expenses={filteredExpenses} onDelete={deleteExpense} />
      </div>
    </div>
  );
}

export default App;