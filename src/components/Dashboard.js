import { useContext, useEffect, useState } from "react"
import ExpenseContext from "../context/userExpenseContext"
import "../static_files/dashboard.css"
import userExpense from "../context/userExpenseContext"
import {userContext,userState} from "../context/userConext";
import { Progress } from 'antd'
import useFetch from "../CustomHooks/useFetch";
function Dashboard()
{
    const expense_context=useContext(ExpenseContext)
    var total_transaction=expense_context.user_total_income + expense_context.user_total_expense;
    var total_transaction_value= expense_context.user_income.length + expense_context.user_expense.length
    var total_income=(expense_context.user_income.length/total_transaction_value)*100 || 0;
    var total_expense=(expense_context.user_expense.length/total_transaction_value)*100 || 0;
    var total_income_percentage= (expense_context.user_total_income/total_transaction)*100 || 0;
    var total_expense_percentage= (expense_context.user_total_expense/total_transaction)*100 || 0;
    var income_array=['Salary', 'Investment','Savings', 'Business', 'Stocks/Mutual fund','Others']
    var expense_array=['Food', 'Life & Entertainment','Bills', 'Medical','Fee','Transport','Loan','Investment','Others']
    var income_category_amount=0;
    var category_data=[]
    const total_user_expense=useContext(userExpense)
    const total_user_income=useContext(userExpense)
    const user_context=useContext(userContext)
    useFetch()
    return(
        <div>
            
            <div className="dashboard_main">
                <section className="analytical_data">
                    <div id="total_transaction">
                        <header className="table_header">Total Transaction: {total_transaction_value}</header>
                        <p className="user_exp" id="Income">Income: {expense_context.user_income.length}</p>
                        <p className="user_exp" id="Expense">Expense: {expense_context.user_expense.length}</p>
                        <Progress type="circle" strokeColor={'green'} percent={total_income.toFixed(0)} className="total_trans_dash"/>
                        <Progress type="circle" strokeColor={'red'} percent={total_expense.toFixed(0)} className="total_trans_dash"/>

                    </div>
                    <div id="total_turnover">
                        <header className="table_header">Total Turnover: {total_transaction}</header>
                        <p className="user_exp" id="Income">Income: {expense_context.user_total_income}</p>
                        <p className="user_exp" id="Expense">Expense: {expense_context.user_total_expense}</p>
                        <Progress type="circle" strokeColor={'green'} percent={total_income_percentage.toFixed(0)} className="total_trans_dash"/>
                        <Progress type="circle" strokeColor={'red'} percent={total_expense_percentage.toFixed(0)} className="total_trans_dash"/>
                    </div>
                    <div id="category_income" className="category_transactions">
                        <header className="table_header">Categorywise Income</header>
                        {income_array.map((income_category)=>{
                            category_data= expense_context.user_income.filter((data)=> data.category==income_category &&     data.type=="Income")
                            .reduce((acc,cur_val )=> acc+cur_val.amount, 0);
                            return(
                                <div>
                                    <p id="categorywise_income">{income_category}</p>
                                    <Progress strokeColor='green' percent={((category_data/expense_context.user_total_income)*100 || 0).toFixed(0)}/>
                                </div>
                                
                            )
                            
                        })}
                        
                    </div>
                    <div id="category_expense" className="category_transactions">
                        <header className="table_header">Categorywise Expense</header>
                        {expense_array.map((expense_category)=>{
                            category_data= expense_context.user_expense.filter((data)=> data.category==expense_category && data.type=="Expense")
                            .reduce((acc,cur_val )=> acc+cur_val.amount, 0);
                            return(
                                <div>
                                    <p id="categorywise_income">{expense_category}</p>
                                    <Progress strokeColor='red' percent={((category_data/expense_context.user_total_expense)*100 || 0).toFixed(0)}/>
                                </div>
                                
                            )
                            
                        })}
                    </div>
                </section>
                
            </div>
        </div>
    )
}
export default Dashboard