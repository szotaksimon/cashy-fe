import "../UI/Incomes.css"

const Incomes = () => {
    return (
        <div className="container">
            <h2>Incomes</h2>
            <div className="income-input-div">
                <span className="value-input">
                    <input type="text" placeholder="Value" />
                </span>
                <span className="category-input">
                    <select name="categorys" id="categorys">
                        <option value="category">Payment</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </span>
                <span className="comment-input">
                    <input type="text" placeholder="Comment" />
                </span>
                <span className="date-input">
                    <input type="date" placeholder="Date" />
                </span>
                <span>
                    <button>Ok</button>
                </span>
            </div>
            <div className="show-incomes-div">
                asd
            </div>
        </div>
    )
}
export default Incomes