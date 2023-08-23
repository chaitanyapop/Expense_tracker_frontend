import { useContext } from 'react';
import {userContext, userState} from '../context/userConext';
export function useSignup()
{
    const user_state=useContext(userContext);
    async function signup_utility(otp,setError)
    {
        
        const otp_data=await fetch("https://expense-tracker-qje1i82lu-chaitanyapop.vercel.app/user/signin/create_account",{
        method:'POST',
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({otp})
        })
    
        
        const otp_status=await otp_data.json();
        if(otp_data.ok)
        {
            
            user_state.setData(otp_status);
            localStorage.setItem('user',JSON.stringify(otp_status))
        }
        else
        {
            setError(otp_status.message);
        }
    }
    return {signup_utility};
    
}
export default useSignup;