import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>June 6th 2021</div>
      <div className="expense-item__description">
        <h2>Flowers</h2>
        <div className="expense-item__price">£120.40</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
