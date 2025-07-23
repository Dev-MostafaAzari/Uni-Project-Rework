import React, { createContext, useState } from 'react';

export const LoginOffCanContext = createContext();

function LoginOffcan(props){

    const [data,setData]=useState({username:"",password:""});

    const [profile,setProfile]=useState(true);
    const [showof,setShowof]=useState(false);

    function ProfileOpen(){
        setProfile(true);
    }

    function ProfileClose(){
        setProfile(false);
    }

    function Open()
    {
        setShowof(true);
    }

    function Close ()
    {
        setShowof(false);
    }

    return(
        <LoginOffCanContext.Provider value={{data,profile,setData:setData,ProfileOpen:ProfileOpen,ProfileClose:ProfileClose,showof,Close:Close,Open:Open}}>
            {props.children}
        </LoginOffCanContext.Provider> 
    )
}



export default LoginOffcan;