import { Link } from "react-router-dom"
import "../styles/Expense.css"


function Expense(props) { 
  
  console.log(props.expenses)

  return (
    <Link to="/">
      <div className="expense">
        <h2>Kiadások</h2>
        <div>
        {props.expenses.map((item) => (<p key={item.id}>{item.amount} Ft | {item.category.categoryName}</p>))}
        </div>
      </div>
    </Link>
  );
}

export default Expense;