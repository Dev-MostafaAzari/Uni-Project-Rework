import React, { useContext } from 'react';
import axios from "axios";
import { Button, Form,} from 'react-bootstrap';
import "../styles/Login.css";
import { LoginOffCanContext } from '../contexts/LoginAndOffcanContext';


function LoginPage(){

    const {setData,setProfile,data} = useContext(LoginOffCanContext);

    const BaseUrl ="https://fakestoreapi.com";
    function LoginSendData(content)
    {
        axios.post(`${BaseUrl}/auth/login`,{...content}).then(res =>{console.log(res);setProfile(true)}).catch(error => console.log(error.message));
    }

    function dataInput(event)
    {
        switch (event.target.name) {
            case "username":
                setData({...data, username:event.target.value})
                break;
            case "password":
                setData({...data,password:event.target.value})
                break;
            default:
                break;
        }
    }


    return(
        <div className="mainLogin">
            <h3 className="loginTitle">Login Panel</h3>
            <Form className="loginForm" onSubmit={LoginSendData(data)}>
                <Form.Floating>
                    <Form.Control name="username" value={data.username} onChange={dataInput} type="text" placeholder=""/>
                    <Form.Label>Username</Form.Label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control name="password" value={data.password} onChange={dataInput} type="password" placeholder=""/>
                    <Form.Label>password</Form.Label>
                </Form.Floating>
                <Button type="submit">Login</Button>
                <a href="#" className="needAccount">i dont have an account</a>
            </Form>
        </div>
    )
}

export default LoginPage;
