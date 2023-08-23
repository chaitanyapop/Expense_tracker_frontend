import { Link } from "react-router-dom";
import {userContext,userState} from '../context/userConext'
import { useContext } from "react";
function Navbar()
{
    const user_state=useContext(userContext)
    function user_logout(e)
    {
        user_state.setData(null);
        localStorage.removeItem('user')
    }


    return(
        <div className="Navbar">
            <p id="App_name">Expense Tracker</p>
            <div className="useractions">
                {!user_state.user_data && (<Link to={'/signup'}><button id="Signup" className="buttons">Signup</button></Link>)}
                {!user_state.user_data && (<Link to={'/login'}><button id="Login" className="buttons">Login</button></Link>)}
                {user_state.user_data && (
                    <>
                    <p id="email_user">Hello {user_state.user_data.firstname}</p>
                    <button id="Logout" className="buttons" onClick={user_logout}>Log out</button>
                </>)}
            </div>
            
        </div>
    )
}
export default Navbar;