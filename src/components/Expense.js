import React from 'react'


function Expense({ income, expense }) {
    return (
        <>
            <div div className='Expense'>
                <div>
                    <h2>Balance</h2>
                    <div className='bal'>₹{income - expense}</div>
                </div>
                <div>
                    <div>
                        <h2 >Income</h2>
                        <div className='inc'>₹{income}</div>
                    </div>
                    <div>
                        <h2>Expense</h2>
                        <div className='exp'>₹{expense}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Expense