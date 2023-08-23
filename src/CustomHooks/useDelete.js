import { useContext } from "react"
import ExpenseContext from "../context/userExpenseContext"
import {userContext,userState} from "../context/userConext";
function useDelete()
{
    const expense_state= useContext(ExpenseContext)
    const user_context=useContext(userContext)
    async function delete_data(id)
    {
        const delete_data=await fetch("https://expense-tracker-qje1i82lu-chaitanyapop.vercel.app/expense/delete_transaction/"+id,{
            headers:
            {
                'authorization': `Bearer ${user_context.user_data.token}` 
            },
            method:'DELETE'
        })
        const data_val= await delete_data.json()
        if(delete_data.ok)
        {
            const updated_expense_list= expense_state.user_expense.filter((expense)=>expense._id!=id)
            const updated_income_list= expense_state.user_income.filter((income)=>income._id!=id)
            expense_state.setExpense(updated_expense_list)
            expense_state.setIncome(updated_income_list)
        }
    }
    return delete_data
}

export default useDelete
