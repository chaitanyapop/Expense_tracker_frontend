import Navbar from './Navbar'

import Expensepage from './Expense_main.js';
import Sidebar from './Sidebar.js';
import useFetch from '../CustomHooks/useFetch';
import Dashboard from './Dashboard';
function Home(){
    useFetch()
    return(
        <div>
            <nav>
                <Navbar/>
            </nav>
            <div>
                <Sidebar/>
            </div>
            
            

        </div>

    );
}
export default Home;
