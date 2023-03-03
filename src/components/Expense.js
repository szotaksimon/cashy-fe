function Income(props) { 
  
  const filtered = props.items.filter(item => {
    return item.income  === !true
  })

  console.log(filtered)

  return (
    <div>
      <h2>Kiadások</h2>
      <ul>
      {filtered.map((item) => (<li key={item.id}>{item.amount} Ft | {item.category.categoryName} - {item.income ? 'bevétel' : 'kiadás'}</li>))}
      </ul>
    </div>
  );
}

export default Income;