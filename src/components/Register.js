import React from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import "../styles/Register.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const schema = yup.object().shape({
    username: yup.string().matches(/(?=.{5,20})(?=^([A-Za-z]+)[A-Za-z0-9]+)+/, "invalidUsername").required("username required"),
    gmail: yup.string().email("invalid email").required("email required"),
    password: yup.string().matches(/(?=.*[!@#$])(?=.{7})(?=.*[A-Z])(?=.*[0-9])[(A-Za-z0-9)]+/, "invalidPassword").required("password required"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null], "password incorrect").required("confirm password")
})

function RegisterPage() {

    const Navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const BaseUrl = "https://fakestoreapi.com";
    function SendData(data) {
        axios.post(`${BaseUrl}/users`, data).then(res=>{console.log("data send"); console.log(res.data);Navigate("/login")}).catch(error=>console.log(error));
    } 

    return (
        <div className="RegisterMain">
            <h3 className="RegisterTitle">Register Panel</h3>
            <Form className="FormContainer" onSubmit={handleSubmit(SendData)}>
                <Form.Floating>
                    <Form.Control id="RegisterName" type="text"  placeholder="" {...register("username")} />
                    <Form.Label>Enter UserName</Form.Label>
                </Form.Floating>
                <span className="FormError">{errors.username?.message}</span>
                <Form.Floating>
                    <Form.Control id="RegisterGmail" type="text" placeholder="" {...register("gmail")} />
                    <Form.Label>Enter Gmail</Form.Label>
                </Form.Floating>
                <span className="FormError">{errors.gmail?.message}</span>
                <Form.Floating>
                    <Form.Control id="RegisterPass" type="password" placeholder="" {...register("password")} />
                    <Form.Label>Enter Password</Form.Label>
                </Form.Floating>
                <span className="FormError">{errors.password?.message}</span>
                <Form.Floating>
                    <Form.Control id="RegisterCPass" type="password" placeholder="" {...register("confirmpassword")} />
                    <Form.Label>Confirm Password</Form.Label>
                </Form.Floating>
                <span className="FormError">{errors.confirmpassword?.message}</span>
                <Button id="SubmitBtn" type="submit">Register</Button>
                <Link to="/login" className="haveAccount">already have an account!</Link>
            </Form>
        </div>
    )
}


export default RegisterPage;