import { createContext, useEffect, useState } from "react";
export const userContext=createContext();
export const UserState=(props)=>{
    const[user_data, setData]=useState(null);
    //console.log(user_data)
    useEffect(()=>{
        const local_data=JSON.parse(localStorage.getItem('user'));
        if(local_data)
        {
            setData(local_data);
        }
    },[]);
    return(
        <userContext.Provider value={{user_data,setData}}>
            {props.children};
        </userContext.Provider>
    )
}
export default {userContext,UserState};