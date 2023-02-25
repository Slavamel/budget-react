import { FormEvent } from "react";
import classes from './NewExpenseForm.module.css';

function NewExpenseForm() {
  const submitHandle = (event: FormEvent): void => {
    console.log(event);
    console.log(typeof event);
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandle} className={classes.container}>
      <label>
        Amount
        <input type="text" />
      </label>
      <label>
        Category
        <select>
          <option></option>
          <option>Housing</option>
          <option>Utilities</option>
          <option>Taxi</option>
          <option>Clothing</option>
          <option>Supplies</option>
          <option>Personal</option>
          <option>Gifts</option>
          <option>Entertainment</option>
          <option>Food</option>
          <option>Health</option>
          <option>Misc</option>
        </select>
      </label>
      <label>
        Description
        <input type="text" />
      </label>
      <label>
        Date
        <input type="date" />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default NewExpenseForm;
