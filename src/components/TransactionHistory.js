import React, { useState } from 'react'


function TransactionHistory({ transaction, delTrans }) {
    const [srh, setSrh] = useState('')

    return (
        <>
            <h2>Transaction History</h2>
            <input type='text' className='search' placeholder='Search' onChange={(e) => setSrh(e.target.value)}></input>
            {/* <ul className='transList'>
                {transaction.filter(data => data.name.toLowerCase().includes(srh) || data.amount.toString().includes(srh)).map(data =>
                    <li className={data.trtype} key={data.id}>{data.name} - ₹{data.amount} <button onClick={()=>{delTrans(data.id)}}>X</button></li>
                )
                }
            </ul> */}

            <table className='transList'>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
                {transaction.filter(data => data.name.toLowerCase().includes(srh) || data.amount.toString().includes(srh)).map(data =>
                    <tr className={data.trtype} key={data.id}>
                        <td>{data.name}</td>
                        <td>₹{data.amount}</td>
                        <td><button onClick={()=>{delTrans(data.id)}}>X</button></td>
                    </tr>
                )}
            </table>
        </>
    )
}
export default TransactionHistory