import { createContext, useState } from "react";
import ExpenseContext from "./userExpenseContext";

export const ExpenseState=(props)=>{
    const [user_expense, setExpense]=useState([])
    const [user_income, setIncome]=useState([])
    const [user_total_income, setTotalIncome]=useState(0)
    const [user_total_expense, setTotalExpense]=useState(0)
    const [user_filter_data, setFilter]=useState(null)
    return(
    <ExpenseContext.Provider value={{user_expense, setExpense, user_income, setIncome, user_total_expense, setTotalExpense, user_total_income
    ,setTotalIncome, user_filter_data, setFilter}}>
        {props.children}
    </ExpenseContext.Provider>
    )
}
export default ExpenseState