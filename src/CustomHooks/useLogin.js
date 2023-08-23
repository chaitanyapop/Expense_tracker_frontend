import { useContext } from 'react';
import {userContext,UserState} from '../context/userConext'
export function useLogin()
{
    const user_state=useContext(userContext);
    async function login(email,password,setError)
    {
        const login_user=await fetch('https://expense-tracker-qje1i82lu-chaitanyapop.vercel.app/user/login',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({email,password})
        })
        const loged_in_data=await login_user.json()
        if(login_user.ok)
        {
            user_state.setData(loged_in_data);
            localStorage.setItem('user',JSON.stringify(loged_in_data));
        } 
        else
        {
            setError(loged_in_data.message)
        }
    }
    return {login}
    
}
export default  useLogin;