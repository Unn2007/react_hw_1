import css from './TransactionHistory.module.css'
export const TransactionHistory = ({transactions}) => {
const TransactionHistoryItem = transactions.map(({id,type,amount,currency})=>{
    return (
        <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )

});

return (
<table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {TransactionHistoryItem}
  </tbody>
</table>
);


}