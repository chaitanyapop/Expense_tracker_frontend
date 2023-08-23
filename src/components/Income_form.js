import Transaction_display from "./Transactions_display"
import { useState, useContext, useEffect } from "react"
import useIncome from "../CustomHooks/useIncome"
import Income_display from "./Income_display"
import userExpense from "../context/userExpenseContext"
import {userContext,userState} from "../context/userConext";
import useFetch from '../CustomHooks/useFetch';
import {Trash2, IndianRupee} from "lucide-react"
function Income_form()
{
    const [amount, setAmount]=useState(null)
    const[type, setType]=useState("Income")
    const[category, setCategory]=useState(null)
    const [date, setDate]=useState(null);
    const[description, setDescription]=useState(null)
    const [error, setError]=useState(false)
    const {add_income}=useIncome()
    const total_income=useContext(userExpense)
    const user_context=useContext(userContext)
    useFetch()
    async function add_user_income(e)
    {
        e.preventDefault();
        await add_income(amount, type, category, date, description, setError)
    }
    return(
        <div>
            
            <p id="total_income">Total Income: <IndianRupee/>{total_income.user_total_income}</p>
            <div id="form_display">
                <form className="Expense_form" onSubmit={add_user_income}>
                    <p className="form_options">Amount</p>
                    <input type="number" placeholder="Enter amount" className="input" value={amount} onChange={(e)=>{
                        setAmount(e.target.value)
                    }}></input>
                    <p className="form_options">Type</p>
                    <input type="String" value={'Income'} className="input" disabled></input>
                    <p className="form_options">Category</p>
                    <select className="input" id="select" value={category} onChange={(e)=>{
                        setCategory(e.target.value)
                    }}>
                        <option className="options" disabled selected>Select Income</option>
                        <option className="options">Salary</option>
                        <option className="options">Investment</option>
                        <option className="options">Savings</option>
                        <option className="options">Business</option>
                        <option className="options">Stocks/Mutual fund</option>
                        <option className="options">Others</option>
                    
                    </select>
                    <p className="form_options">Date</p>
                    <input type="date" className="input" value={date} onChange={(e)=>{
                        setDate(e.target.value)
                    }}></input>
                    <p className="form_options">Description</p>
                    <textarea  placeholder="Enter description" className="input" value={description} onChange={(e)=>{
                        setDescription(e.target.value)
                    }}></textarea>
                    <input type="submit" value={'Add Income'} id="submit"></input>
                    {error && <p className="form_options" id="error">{error}</p>}
                </form>
                <div id="all_expense_income">
                    <Income_display/>
                </div>
            </div>
        </div>
    )
}
export default Income_form