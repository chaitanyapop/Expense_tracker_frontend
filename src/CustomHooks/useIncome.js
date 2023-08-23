import { useContext } from "react"
import ExpenseContext from "../context/userExpenseContext"
import {userContext,userState} from "../context/userConext";
import { format } from "date-fns";
import moment from "moment"
export function useIncome()
{
    const income_context=useContext(ExpenseContext)
    const user_context=useContext(userContext)
    async function add_income(amount, type, category, date, description, setError)
    {
        const income=await fetch("https://expense-tracker-qje1i82lu-chaitanyapop.vercel.app/expense/add_income",{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'authorization': `Bearer ${user_context.user_data.token}` 
            },
            body:JSON.stringify({amount,type, category,date,description})
        })
        
        const income_data=await income.json()
        if(income.ok)
        {
            income_data.date=moment(income_data.date).format("DD/MM/YYYY")
            income_context.setIncome([...income_context.user_income, income_data])
        }
        else
        {
            
            setError(income_data.message)
        }
        
        
    }
    return {add_income}
}
export default useIncome