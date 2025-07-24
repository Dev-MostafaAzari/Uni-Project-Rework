import React, { useContext } from 'react';
import axios from "axios";
import { Button, Form,} from 'react-bootstrap';
import "../styles/Login.css";
import { LoginOffCanContext } from '../contexts/LoginAndOffcanContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function LoginPage(){
    //braye redirect kardan bad az submit
    const navigate =useNavigate()

    const {setData,ProfileOpen,data} = useContext(LoginOffCanContext);

    const BaseUrl ="https://dummyjson.com";
    function LoginSendData(content)
    {
        axios.post(`${BaseUrl}/auth/login`,{...content}).then(res =>{ProfileOpen();navigate("/Uni-Project-Rework");}).catch(error => console.log(error.message));
    }

    function SubmitHandle(event){
        event.preventDefault();
        LoginSendData(data);
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
            <Form className="loginForm" onSubmit={SubmitHandle}>
                <Form.Floating>
                    <Form.Control name="username" value={data.username} onChange={dataInput} type="text" placeholder=""/>
                    <Form.Label>Username</Form.Label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control name="password" value={data.password} onChange={dataInput} type="password" placeholder=""/>
                    <Form.Label>password</Form.Label>
                </Form.Floating>
                <Button type="submit">Login</Button>
                <Link to="/register" className="needAccount">i dont have an account</Link>
            </Form>
        </div>
    )
}

export default LoginPage;
