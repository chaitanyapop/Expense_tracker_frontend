import { useContext } from "react"
import ExpenseContext from "../context/userExpenseContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import '../static_files/transactions.css'
import {Trash2, IndianRupee} from "lucide-react"
import useDelete from "../CustomHooks/useDelete"

function Transaction_display()
{

    const transaction_data=useContext(ExpenseContext)
    const delete_data=useDelete()
    async function delete_transaction(id)
    {
        await delete_data(id)
    }

    return(
        <div>
            {transaction_data.user_expense && transaction_data.user_expense.map((transaction)=>(
                
                <div className="user_transactions" >
                    <p className="transactions" id="expense">Expense: {transaction.amount} Rs.</p>
                    
                    <Trash2  onClick={()=>{
                        delete_transaction(transaction._id)
                    }} id="delete_user"/>
                    <p className="transactions" id="category">Category: <span className="category_opt">{transaction.category} </span></p>
                    <p className="transactions" id="trans_on">Transaction made on: <span className="category_opt">{transaction.date}</span></p>
                    <p className="transactions" id="description">Description: <span className="category_opt">{transaction.description}</span></p>
                </div>
            ))}
        </div>
    )
}
export default Transaction_display