import Navbar from './Navbar'
import money_image from '../images/Capture.JPG'
import { useEffect, useState } from 'react';
import useSignup from "../CustomHooks/useSignup"
import Otp_utility from '../CustomHooks/otp_utility';
export function Signup()
{
    const [otp_flag, setFlag]=useState(null);
    const [error, setError]=useState(null);
    const [email, setEmail]=useState("");
    const [mob_num, setMobile]=useState("");
    const [password, setPassword]=useState("");
    const[otp, setOtp]=useState("");
    var[firstname, setFirstname]=useState("");
    const[disable, setDisable]=useState(true)
    const[otp_disable, setOtpdisable]=useState(true)
    const{signup_utility}=useSignup();
    useEffect(()=>{
        if(firstname!="" && email!="" && password!="" && mob_num!="")
        {
            setDisable(false)
        }
        else if(firstname=="" || email=="" || password=="" || mob_num=="")
        {
            setDisable(true)
        }
    },[firstname,email, password, mob_num])
    useEffect(()=>{
        if(otp!="")
        {
            setOtpdisable(false)
        }
        else if(otp=="")
        {
            setOtpdisable(true)
        }
    },[otp])
    
    async function Send_otp(e)
    {
        e.preventDefault();
        setDisable(true)
        const data=await Otp_utility(firstname,email, password, mob_num, setFlag, setError);// in return we need error and otp_flag
       
    }
    async function verify_otp(e)
    {
        e.preventDefault();
        setOtpdisable(true)
        await signup_utility(otp, setError);
    }
    return(
        <div>
            <Navbar/>
            <div className='user_page'>
                <div className='money_image'>
                    <img src={money_image} id='money_logo'></img>
                </div>
                <div className='user_forms'>
                    {!otp_flag && <form className='login_form' onSubmit={Send_otp}>
                        <p className='user' id='login'>Sign up</p>
                        <p className='user' id='email'>Firstname</p>
                        <input type="text" placeholder='Enter your firstname' className='user' id='email_textbox' value={firstname}
                        onChange={(e)=>{
                            setFirstname(e.target.value);
                        }}></input>
                        <p className='user' id='email'>Email</p>
                        <input type="text" placeholder='Enter your email' className='user' id='email_textbox' value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}></input>
                        <p className='user' id='password'>Password</p>
                        <input type="password" placeholder='Enter your password' className='user' id='password_textbox' value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}></input>
                        <p className='user' id='password'>Mobile number</p>
                        <input type="text" placeholder='Enter your mobile number' className='user' id='password_textbox' value={mob_num}
                        onChange={(e)=>{
                            setMobile(e.target.value)
                        }}></input>
                        <input type={'submit'} value="Send OTP" className='user' id='submit' disabled={disable}></input>
                        {error && <p id='errors'>{error}</p>}
                        

                    </form>}
                    {otp_flag && <form className='login_form' onSubmit={verify_otp}>
                        <p className='user' id='password'>OTP sent successfully</p>
                        <p className='user' id='password'>Enter OTP</p>
                        <input type="text" placeholder='Enter OTP' className='user' id='password_textbox' value={otp}
                        onChange={(e)=>{
                            setOtp(e.target.value);
                        }}></input>
                        <input type="submit" value="Signup" className='user' id='submit' disabled={otp_disable}></input>
                        {error && <p id='errors'>{error}</p>}
                    </form>}
                </div>

            </div>
            
        </div>

    );
}
export default Signup;