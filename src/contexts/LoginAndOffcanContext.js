import React, { createContext, useState } from 'react';

export const LoginOffCanContext = createContext();

function LoginOffcan(props){

    const [data,setData]=useState({username:"",password:""});

    const [profile,setProfile]=useState(false);

    const [showof,setShowof]=useState(true);

    function close ()
    {
        setShowof(false);
    }

    return(
        <LoginOffCanContext.Provider value={{data,profile,setData:setData,setProfile:setProfile,showof,close:close}}>
            {props.children}
        </LoginOffCanContext.Provider> 
    )
}



export default LoginOffcan;