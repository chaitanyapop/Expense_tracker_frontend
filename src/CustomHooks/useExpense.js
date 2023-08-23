import { useContext } from "react";
import ExpenseContext from "../context/userExpenseContext";
import {userContext,userState} from "../context/userConext";
import moment from "moment"
export function useExpense()
{
    const expense_context=useContext(ExpenseContext)
    const user_context=useContext(userContext)
    async function add_expense_data(amount, type, category, date, description, setError)
    {
       
        const expense=await fetch('https://expense-tracker-qje1i82lu-chaitanyapop.vercel.app/expense/add_expense',{
            method:'POST',
            headers:{
                "content-type":"application/json",
                'authorization': `Bearer ${user_context.user_data.token}` 
            },
            body:JSON.stringify({amount, type,category, date, description})
        })
        const user_expense= await expense.json();
        
        if(expense.ok)
        {
            user_expense.date=moment(user_expense.date).format("DD/MM/YYYY")
            //console.log(user_expense.date)
            expense_context.setExpense([...expense_context.user_expense, user_expense])
            

        }
        else
        { 
            setError(user_expense.message)  
        }
        
    }
    return {add_expense_data}
}
export default useExpense