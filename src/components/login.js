import Navbar from './Navbar';
import money_image from '../images/Capture.JPG';
import useLogin from '../CustomHooks/useLogin';
import { useEffect, useState } from 'react';
function Login()
{
    const [email, setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error, setError]=useState(null)
    const {login}=useLogin();
    const[disable, setDisable]=useState(true)
    useEffect(()=>{
        if(email!="" && password!="")
        {
            
            setDisable(false)
        }
        else if(email=="" || password=="")
        {
            
            setDisable(true)
        }
    },[email, password])
    async function User_login(e)
    {
        e.preventDefault();
        await login(email,password, setError)
    }   
    return(
        
        <div>
            <Navbar/>
            <div className='user_page'>
                <div className='money_image'>
                    <img src={money_image} id='money_logo'></img>
                </div>
                <div className='user_forms' onSubmit={User_login}>
                    <form className='login_form'>
                        <p className='user' id='login'>Login</p>
                        <p className='user' id='email'>Email</p>
                        <input type="text" placeholder='Enter your email' className='user' id='email_textbox' value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}></input>
                        <p className='user' id='password'>Password</p>
                        <input type="password" placeholder='Enter your password' className='user' id='password_textbox' value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}></input>
                        <input type="submit" value="Login" className='user' id='submit' disabled={disable}></input>
                        {error&&<p id='errors'>{error}</p>}

                    </form>
                </div>
                

            </div>
        </div>

    );
}
export default Login;