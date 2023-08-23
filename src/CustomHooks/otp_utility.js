export async function Otp_utility(firstname,email,password,mob_num, setFlag, setError)
{
    
    setError(null);
    const otp_status= await fetch("https://expense-tracker-qje1i82lu-chaitanyapop.vercel.app/user/signin/create_otp",
    {
        method:'POST',
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify({firstname,email,password, mob_num})

    })
    const otp_data=await otp_status.json();
    if(otp_status.ok)
    {   
        setFlag(true);
        setError(null);
    }
    else
    {
        
        //console.log(otp_status)
        setError(otp_data.message);
    }
}
export default Otp_utility;