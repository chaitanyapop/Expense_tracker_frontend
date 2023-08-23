import logo from './logo.svg';
import Home from './components/Home'
import Login from './components/login'
import Signup from './components/signup'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import './App.css';
import {userContext, userState} from './context/userConext'
import { useContext } from 'react';
import ExpenseState from "./context/userExpense"
function App() {
  const userstate=useContext(userContext)
  return (
    <div>
      <ExpenseState>
      <Router>
        <Routes>
          <Route exact path='/' element={userstate.user_data ?<Home/> : <Navigate to='/login'/>}/>
          <Route exact path='/login' element={!userstate.user_data ? <Login/> : <Navigate to='/'/>}/>
          <Route exact path='/signup' element={!userstate.user_data ? <Signup/> : <Navigate to='/'/>}/>
        </Routes>
      </Router>
      </ExpenseState>
      
    </div>
  );
}

export default App;
