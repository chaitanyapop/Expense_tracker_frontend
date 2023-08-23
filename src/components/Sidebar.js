import { Link } from 'react-router-dom';
import '../static_files/sidebar.css'
import Expensepage from '../components/Expense_main'
import expense_home_page from '../static_files/expense_home_page.css'
import { useState } from 'react';
import { previousSaturday } from 'date-fns';
var previousE1;
function Sidebar()
{
    
    const[income, setIncome]=useState(false)
    const[expense, setExpense]=useState(false)
    const [transactions, setTransaction]=useState(false)
    const[dashboard, setDashboard]=useState(true)
    function changing_focus(e)
    { 
        if(previousE1) previousE1.className="sidebar_opt";
        previousE1=document.getElementById(e.target.id);
        previousE1.className="add_expense_link_change"  
    }
   
    return(
        <div className="expense_home_page"> 
            <div className='expense_sidebar'>
            <Link className='add_expense' onClick={()=>{
                    setExpense(false)
                    setIncome(false)
                    setTransaction(false)
                    setDashboard(true)

                }}>
                    <p  id='dashboard' className="add_expense_link_change" onClick={(e)=>{
                        changing_focus(e)
                        
                    }}>Dashboard</p>
                </Link>
                <Link onClick={()=>{
                    setIncome(true)
                    setExpense(false)
                    setTransaction(false)
                    setDashboard(false)

                }} className='add_expense'>
                    <p  id='add_user_income_val' className="sidebar_opt" onClick={(e)=>{
                        let previousE2=document.getElementById("dashboard")
                        if(previousE2.className==="add_expense_link_change")
                        {
                            previousE1=document.getElementById("dashboard")
                        }
                        changing_focus(e)
                    }}>Add Income</p>
                </Link>
                <Link onClick={()=>{
                    setExpense(true)
                    setIncome(false)
                    setTransaction(false)
                    setDashboard(false)
                }} className='add_expense'>
                    <p  id='add_user_expense_val' className="sidebar_opt" onClick={(e)=>{
                        let previousE2=document.getElementById("dashboard")
                        if(previousE2.className==="add_expense_link_change")
                        {
                            previousE1=document.getElementById("dashboard")
                        }
                        changing_focus(e)
                    }}>Add Expense</p>
                </Link>
                <Link onClick={()=>{
                    setExpense(false)
                    setIncome(false)
                    setTransaction(true)
                    setDashboard(false)
                }} className='add_expense'>
                    <p  id='all_transactions_val' className="sidebar_opt" onClick={(e)=>{
                        let previousE2=document.getElementById("dashboard")
                        if(previousE2.className==="add_expense_link_change")
                        {
                            previousE1=document.getElementById("dashboard")
                        }
                        changing_focus(e)
                    }}>All Transactions</p>
                </Link>
                
            </div>
            <div className='expense_main'>
                <Expensepage income={income} expense={expense} transaction={transactions} dashboard={dashboard}/>
            </div>
        </div>
    )
}
export default Sidebar;
