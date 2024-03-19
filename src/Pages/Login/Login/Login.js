import React, { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import {  useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleLogo from '../../../images/GoogleLogo.png';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleEmailBlur = e => {
        setEmail(e.target.value);
    };
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    };

    if(user){
        navigate(from, {replace: true});
    }

    const handleUserLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <Container className='form-container container'>
            <Row className='login-form'>
                <h2 className='form-title text-center'>Please Login</h2>
                <Form onSubmit={handleUserLogin} className='p-0'>
                    <Form.Group className="input-group mb-3 " controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" className='rounded' required/>
                    </Form.Group>

                    <Form.Group className="input-group mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" className='rounded' required/>
                    </Form.Group>
                    <p className='text-danger' > {error?.message} </p>
                    { loading && <p>Loading...</p> }
                    <Button className='form-submit' variant="primary" type="submit"> Login </Button>
                </Form>
                <Form.Text> New to Bike Store? <Link className='form-link' to="/register">Create an account</Link> </Form.Text>
                <Form.Text className='alternative-line'> or </Form.Text>
                <Button onClick={() => signInWithGoogle()} className='submit-google-btn rounded' variant="primary" type="submit">
                    <img src={GoogleLogo} alt="Google" />
                    Continue with google 
                </Button>
            </Row>
        </Container>
    );
};

export default Login;