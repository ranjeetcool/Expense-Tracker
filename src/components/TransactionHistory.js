import React from 'react'


function TransactionHistory({ transaction, delTrans }) {
  
    return (
        <>
            <h2>Transaction History</h2>
            <ul className='transList'>
                {transaction.map(data =>
                    <li className={data.trtype} key={data.id}>{data.name} - ₹{data.amount} <button onClick={()=>{delTrans(data.id)}}>X</button></li>
                )
                }
            </ul>
        </>
    )
}
export default TransactionHistory