function ExpenseDate(props) {
  const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
  const expenseDay = props.date.toLocaleString("en-US", { day: "2-digit" });
  const expenseYear = props.date.getFullYear();

  return (
    <div>
      <div>{expenseDay}</div>
      <div>{expenseMonth}</div>
      <div>{expenseYear}</div>
    </div>
  );
}

export default ExpenseDate;
