import "../static_files/view_all_transaction.css"
import useFilter from "../CustomHooks/useFilter"
import { useContext, useEffect, useState } from "react"
import ExpenseContext from "../context/userExpenseContext"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import {Trash2} from "lucide-react"
import useDelete from "../CustomHooks/useDelete"
import {DatePicker} from'antd'
const {RangePicker}=DatePicker;
function View_all_transaction()
{
    const filter_result=useFilter()
    const transaction_data=useContext(ExpenseContext)
    const [customdate,setCustomDate]=useState([])
    const [customvalue,setCustomValue]=useState(false)
    async function on_changing_filter(filter_value)
    {
        if(filter_value=="custom")
        {
            setCustomValue(true)
        }
        else
        {
        setCustomValue(false)
        await filter_result(filter_value, customdate);
        }
    }
    useEffect(()=>{
        async function customdatepass()
        {
            await filter_result("custom", customdate)
        }
        customdatepass()
    },[customdate])

    return(
        <div>
            <section id="view_all_header">
                <p id="filter">Apply filter :</p>
                <select id="view_all_dropdown" onChange={(e)=>{
                    on_changing_filter(e.target.value)
                }}>
                    <option>Select filter</option>
                    <option value="Last one week">Last one week</option>
                    <option value="Last one month">Last one month</option>
                    <option value="Last one year">Last one year</option>
                    <option value="custom">custom</option>
                </select>
                {customvalue && <RangePicker value={customdate} onChange={(value)=>{
                    setCustomDate(value);
                }}/>}
            </section>
            <section id="all_transactions">
            {transaction_data.user_filter_data && transaction_data.user_filter_data.map((transaction)=>(
                <div className="user_transactions" key={transaction._id}>
                    {transaction.type==="Expense" ? <p className="transactions" id="expense"> {transaction.type}: {transaction.amount} Rs.
                    </p> : <p className="transactions" id="income"> {transaction.type}: {transaction.amount} Rs.
                    </p>}
                    <p className="transactions" id="category">Category: {transaction.category}</p>
                    <p className="transactions" id="trans_on">Transaction made on: {transaction.date}</p>
                    <p className="transactions" id="description">Description: {transaction.description}</p>
                </div>))
            }
            </section>
        </div>
    )
}
export default View_all_transaction;