import { useState } from "react";
import Card from "../UI/card/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart/ExpensesChart";
import ExpensesList from "./ExpensesList/ExpensesList";

const Expenses = function ({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterYearChangeHandler = (year) => {
    console.log(year);
    setFilteredYear(year);
  };
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear() === Number(filteredYear)
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterYearChange={filterYearChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
