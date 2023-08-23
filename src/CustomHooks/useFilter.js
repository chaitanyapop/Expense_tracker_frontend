import {userContext,userState} from "../context/userConext";
import {ExpenseContext} from "../context/userExpenseContext"
import { useContext } from "react";
import moment from "moment"
function useFilter()
{
    const user_context=useContext(userContext)
    const user_expense=useContext(ExpenseContext)
    async function filter_result(filter, customdate)
    {
        const fetched_result= await fetch("https://expense-tracker-qje1i82lu-chaitanyapop.vercel.app/expense/get_transaction",{
            method:'POST',
            headers:{
                'authorization': `Bearer ${user_context.user_data.token}`,
                "content-type":"application/json"
            },
            body:JSON.stringify({filter:filter, customdate:customdate})
        })
        const fetched_data=await fetched_result.json();
        fetched_data.forEach((value)=>{
            value.date=moment(value.date).format('DD/MM/YYYY')
        });
        
        if(fetched_result.ok)
        {
            user_expense.setFilter(fetched_data)
        }
        else
        {
            console.log("Incorrect")
        }
    }
    return filter_result;
}
export default useFilter;