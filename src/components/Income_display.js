import { useContext } from "react"
import ExpenseContext from "../context/userExpenseContext"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import {Trash2} from "lucide-react"
import useDelete from "../CustomHooks/useDelete"
export function Income_display()
{
    const transaction_data=useContext(ExpenseContext)
    //console.log(transaction_data.user_expense[0])
    const delete_data=useDelete()
    async function delete_transaction(id)
    {
        await delete_data(id)
    }
    return(
        <div>
            {transaction_data.user_income && transaction_data.user_income.map((transaction)=>(
                <div className="user_transactions" key={transaction._id}>
                    <p className="transactions" id="income">Income: {transaction.amount} Rs.</p>
                    
                    <Trash2  onClick={()=>{
                        delete_transaction(transaction._id)
                    }} id="delete_user"/>
                    <p className="transactions" id="category">Category: <span className="category_opt">{transaction.category}</span></p>
                    <p className="transactions" id="trans_on">Transaction made on:<span className="category_opt">{transaction.date}</span></p>
                    <p className="transactions" id="description">Description: <span className="category_opt">{transaction.description}</span></p>
                </div>))
            }
        </div>
    )
}
export default Income_display