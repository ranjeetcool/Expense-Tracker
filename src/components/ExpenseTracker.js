import React, { useEffect, useState } from 'react'
import Expense from './Expense'
import TransactionHistory from './TransactionHistory'
import AddTransaction from './AddTransaction'

function ExpenseTracker() {
    const transactionData = [{ id: 1, name: 'Salary', amount: 3000, trtype: 'income' }, { id: 2, name: 'Grocery', amount: 100, trtype: 'expense' }, { id: 3, name: 'Mobile', amount: 500, trtype: 'expense' }]
    const [transaction, setTransaction] = useState(transactionData)

    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)

    useEffect(() => {
        calculate()
    }, [transaction]);


 // ***** update balance *****

    // const calculate = () => {
    //     let income = 0, expense = 0

    //     transaction.forEach((data) => {
    //         if (data.trtype === 'income') {
    //             income += data.amount;
    //         }
    //         else if (data.trtype === 'expense') {
    //             expense += data.amount;
    //         }
    //     });
    //     setIncome(income);
    //     setExpense(expense);
    //     console.log(income, expense);
    // };

    const calculate =()=>{
        const totalIncome = transaction.filter(data => data.trtype === 'income').reduce((acc,curr) => acc + curr.amount,0)
        setIncome(totalIncome)
        console.log(totalIncome)

        const totalExpense = transaction.filter(data => data.trtype === 'expense').reduce((acc,curr) => acc + curr.amount,0)
        setExpense(totalExpense)
        console.log(totalExpense)
    }

//    ***** add transaction *****

    const addTrans =(inputTran)=>{
        inputTran.id = transaction.length +1
        setTransaction([...transaction,inputTran])
        console.log(transaction)
    }

    const delTrans =(id)=>{
        setTransaction(transaction.filter(item=>item.id !== id))
    }

    return (
        <>
            <h1 className='headerText'>Expense Tracker</h1>
            <Expense income={income} expense={expense} />
            <AddTransaction addTrans={addTrans}/>
            <TransactionHistory transaction={transaction} delTrans={delTrans}/>
        </>
    )
}
export default ExpenseTracker