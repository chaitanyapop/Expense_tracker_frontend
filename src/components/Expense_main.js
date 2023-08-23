import '../static_files/expense_main.css'
import Income_form from './Income_form';
import Expense_form from './Expense_form';
import View_all_transaction from './View_all_transaction';
import Dashboard from './Dashboard'

function Expensepage(props)
{
    return(
        <div className="expense_main">
            
            {props.income && <Income_form/>}
            {props.expense && <Expense_form/>}
            {props.transaction && <View_all_transaction/>}
            {props.dashboard && <Dashboard/>}
            
        </div>
    )
}
export default Expensepage;