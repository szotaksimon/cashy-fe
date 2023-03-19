import "../../UI/Incomes.css"

const InputContainer = () => {
    return (
        <div className="income-input-div">
                <span className="value-input">
                    <input type="text" placeholder="Value" />
                </span>
                <span className="category-input">
                    <select name="categorys" id="categorys">
                        <option value="salary">Salary</option>
                        <option value="investments">Investments</option>
                        <option value="gifts">Gifts</option>
                    </select>
                </span>
                <span className="comment-input">
                    <input type="text" placeholder="Comment" />
                </span>
                <span className="date-input">
                    <input type="date" />
                </span>
                <span>
                    <button>Ok</button>
                </span>
            </div>
    )
}
export default InputContainer