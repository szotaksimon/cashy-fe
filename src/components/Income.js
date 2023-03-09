import { Link } from "react-router-dom"
import "../styles/Income.css"
function Income(props) { 
  
  console.log(props.incomes)

  return (
    <Link to="/expenses">
      <div className="income">
        <h2>Bevételek</h2>
        <div>
        {props.incomes.map((item) => (<p key={item.id}>{item.amount} Ft | {item.category.categoryName}</p>))}
        </div>
      </div>
    </Link>
  );
}

export default Income;