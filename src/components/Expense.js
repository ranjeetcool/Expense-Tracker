import React from 'react'


function Expense({ income, expense }) {
    return (
        <>
            <div className='Expense'>
                <span>
                    <h2>Balance</h2>
                    <div className='bal'>₹{income - expense}</div>
                </span>
                <span>
                    <h2 >Income</h2>
                    <div className='inc'>₹{income}</div>
                </span>
                <span>
                    <h2>Expense</h2>
                    <div className='exp'>₹{expense}</div>
                </span>
            </div>
        </>
    )
}
export default Expense