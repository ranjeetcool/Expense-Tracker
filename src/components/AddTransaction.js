import React, { useState } from 'react'


function AddTransaction({ addTrans }) {
    // const initialInputState = { id: null, name: '', amount: null }
    // const [inputValue, setInputValue] = useState(initialInputState)

    // const onChangeHandler = (e) => {
    //     setInputValue({ ...inputValue, [e.target.name]: e.target.value })
    // }

    // const addIncome = (e) => {
    //     e.preventDefault()
    //     if(!inputValue.name|| !inputValue.amount){
    //         alert("Transaction Input can't be Empty")
    //     }
    //     else{
    //     inputValue.trtype = 'income'
    //     console.log(inputValue)
    //     setInputValue(initialInputState)
    //     }
    // }
    // const addExpense = (e) => {
    //     e.preventDefault()
    //     if(!inputValue.name|| !inputValue.amount){
    //         alert("Transaction Input can't be Empty")
    //     }
    //     else{
    //     inputValue.trtype = 'expense'
    //     console.log(inputValue)
    //     setInputValue(initialInputState)

    //     }
    //  }

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')

    const transactionSubmit = (e, trtype) => {
        e.preventDefault()
        if(!name){
            alert('Fill the transaction NAME')
        }
        else if(!amount){
            alert('Fill the transaction AMOUNT')
        }
        else{
        const inputTran = { id: null, name: name, amount: parseInt(amount), trtype: trtype }
        addTrans(inputTran)
        setName('')
        setAmount('')
        console.log(inputTran)
        }
    }

    return (
        <>
            <h2>Add New Transaction</h2>
            <form>
                <div>
                    <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
                    <input type='number' name='amount' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Amount' />
                </div>
                <div>
                    <button className='inBtn' onClick={(e) => transactionSubmit(e, 'income')}>Add Income</button>
                    <button className='exBtn' onClick={(e) => transactionSubmit(e, 'expense')}>Add Expense</button>
                </div>
            </form></>
    )
}

export default AddTransaction