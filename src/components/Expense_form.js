import { useContext, useEffect, useState } from "react";
import "../static_files/expense_form.css"
import useExpense from "../CustomHooks/useExpense";
import Transaction_display from "./Transactions_display";
import userExpense from "../context/userExpenseContext"
import {userContext,userState} from "../context/userConext";
import moment from "moment"
import useFetch from '../CustomHooks/useFetch';
import {Trash2, IndianRupee} from "lucide-react"
function Expense_form()
{
    const [amount, setAmount]=useState(null)
    const[type, setType]=useState("Expense")
    const[category, setCategory]=useState(null)
    const [date, setDate]=useState(null);
    const[description, setDescription]=useState(null)
    const [error, setError]=useState(false)
    const{add_expense_data}=useExpense()
    const total_expense=useContext(userExpense)
    const user_context=useContext(userContext)
    useFetch()
    
    async function add_expense(e)
    {
        e.preventDefault()
        const expense_data=await add_expense_data(amount, type, category, date, description, setError)

    }
    return(
        <div className="expense">
            <p id="total_expense">Total expense: <IndianRupee/>{total_expense.user_total_expense}</p>
            <div id="form_display">
                
                <form className="Expense_form" onSubmit={add_expense}>
                    <p className="form_options">Amount</p>
                    <input type="number" placeholder="Enter amount" className="input"  onChange={(e)=>{
                        setAmount(e.target.value)
                    }}></input>
                    <p className="form_options">Type</p>
                    <input type="String" value={'Expense'} className="input" disabled></input>
                    <p className="form_options">Category</p>
                    <select className="input" id="select" onChange={(e)=>{
                        setCategory(e.target.value)
                    }} >
                        <option className="options" disabled selected>Select Expense</option>
                        <option className="options">Food</option>
                        <option className="options">Life & Entertainment</option>
                        <option className="options">Bills</option>
                        <option className="options">Medical</option>
                        <option className="options">Fee</option>className="options"
                        <option className="options">Transport</option>
                        <option className="options">Loan</option>
                        <option className="options">Investment</option>
                        <option className="options">Others</option>
                    </select>
                    <p className="form_options">Date</p>
                    <input type="date" className="input" onChange={(e)=>{
                        setDate(e.target.value)
                    }}></input>
                   
                    <p className="form_options">Description</p>
                    <textarea  placeholder="Enter description" className="input" maxLength="50" onChange={(e)=>{
                        setDescription(e.target.value)
                    }}></textarea>
                    <input type="submit" value={'Add Expense'} id="submit"></input>
                    {error && <p className="form_options" id="error">{error}</p>}
                </form>
                
                <div id="all_expense_income">
                    <Transaction_display/>
                </div>
            </div>
            
        </div>
    )
}
export default Expense_form;