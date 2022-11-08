import Card from "../../UI/card/Card";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import Button from "../../UI/Button/Button";

import "./NewExpense.css";
import { useState } from "react";

const NewExpense = function ({ onAddExpense }) {
  const [formVisibility, setFormVisibility] = useState(false);

  const saveExpenseHandler = (enteredExpense) => {
    const expense = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    onAddExpense(expense);
    changeFormVisibility();
  };

  const changeFormVisibility = () => {
    setFormVisibility((prevVisibility) => !prevVisibility);
  };

  return (
    <Card className="new-expense">
      {!formVisibility && (
        <Button onClick={changeFormVisibility}>Add New Expense</Button>
      )}
      {formVisibility && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={changeFormVisibility}
        />
      )}
    </Card>
  );
};

export default NewExpense;
