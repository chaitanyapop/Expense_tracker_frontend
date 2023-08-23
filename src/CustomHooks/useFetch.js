import ExpenseContext from "../context/userExpenseContext";
import {userContext,userState} from "../context/userConext";
import moment from "moment"
const { useEffect, useContext } = require("react");
export function useFetch()
{
    const expense_context=useContext(ExpenseContext)
    const user_context=useContext(userContext)
    useEffect(()=>{
        const get_expense=async ()=>
        {
            //console.log(user_context)
            const fetch_expense=await fetch("https://expense-tracker-qje1i82lu-chaitanyapop.vercel.app/expense/get_expense",{
                headers:
                {
                'authorization': `Bearer ${user_context.user_data.token}` 
                },
                method:'GET'
               

            })
            const expense_data=await fetch_expense.json();
            if(fetch_expense.ok)
            {
                expense_data.forEach((value)=>{
                    value.date=moment(value.date).format('DD/MM/YYYY')
                })
                
                expense_context.setExpense(expense_data)
            }
            else
            {
                user_context.setData(null);
                localStorage.removeItem('user')
            }

        }
        const get_income=async ()=>
        {
            const fetch_income=await fetch("https://expense-tracker-qje1i82lu-chaitanyapop.vercel.app/expense/get_income",{
                headers:
                {
                'authorization': `Bearer ${user_context.user_data.token}` 
                },
               method:'GET'
               
            })
            const income_data=await fetch_income.json();
            if(fetch_income.ok)
            {
                income_data.forEach((value)=>{
                    value.date=moment(value.date).format("DD/MM/YYYY")
                })
                expense_context.setIncome(income_data)
            }
        }
        get_expense()
        get_income()
        //get_total_expense()
        //get_total_income()
    }, [user_context])
    useEffect(()=>{
       
        async function expense_data()
        {
            
            const fetch_expense=await fetch("https://expense-tracker-qje1i82lu-chaitanyapop.vercel.app/expense/get_total_expense",{
                headers:
                {
                    'authorization':`Bearer ${user_context.user_data.token}`
                },
                method:'GET' 
             })
             const expense_data=await fetch_expense.json();
             
             if(fetch_expense.ok)
             {
                
                expense_context.setTotalExpense(expense_data.total_expense)
             }
        }
        async function income_data()
        {
            
            const fetch_income=await fetch("https://expense-tracker-qje1i82lu-chaitanyapop.vercel.app/expense/get_total_income",{
                headers:
                {
                    'authorization':`Bearer ${user_context.user_data.token}`
                },
                method:'GET' 
             })
             
             const income_data=await fetch_income.json();
             if(fetch_income.ok)
             {
                expense_context.setTotalIncome(income_data.total_income)
             }
        }
        income_data()
        expense_data()
    },[expense_context])
}
export default useFetch