import React, { useState } from 'react';
import './login.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
// IMPORT TOSTER
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Login() {

    // const notify = () => toast("Login successfully completed!");

    const dispatch = useDispatch();

    const [focus, setFocus] = useState({
        errEmail: false,
        errPass: false
    });

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });


    const navigate = useNavigate();

    const handleSubmit = async (e) => {    // This function created stop rountering in signup form
        e.preventDefault();

        console.log("User Login start ===========>");
        if( inputs.email === '' && inputs.password === '' ){
            alert('fill the form');
        }

        try {
            const res = await axios.post('https://interview-plus.onrender.com/api/login', inputs,);
            console.log(res);

            if(res.data.token){
                dispatch(setToken(res.data.token));
                console.log('User Login successfully completed!');
                navigate("/dashboard");  
            }

        } catch (error) {
            console.log('User Login faild!');
        }

    }

    return (
        <div className='login-restaurent'>
            <Container>
                <div className='margin-login'>
                    <form className='login-list' onSubmit={handleSubmit} >
                        <Row>
                            <div>
                                <h2 className='login-head'>Log in account</h2>
                                <span className='login-mainHead'>Enter your details below</span>
                            </div>
                            <Col lg={6}>
                                <div>
                                    <span className='loginList-Head'>Email :-</span>
                                    <input type="email" placeholder='Email ' className='inpuBox-login' id='email' name='email' value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} onBlur={() => setFocus({ ...focus, errEmail: true })} focus={focus.errEmail.toString()} required />
                                    <span className='error-login'>Enter a valid Eamil ID</span>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div>
                                    <span className='loginList-Head'>Password :-</span>
                                    <input type="password" placeholder='Password' className='inpuBox-login' id='password' name='password' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} pattern='(?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$' onBlur={() => setFocus({ ...focus, errPass: true })} focus={focus.errPass.toString()} required />
                                    <span className='error-login'>Password must have minimum 8 characters and includes atleast 1 uppercase , 1 digits and 1 special character</span>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className='loginList-ButtonDiv'>
                                    <button className='loginList-Button'>Log In</button>
                                </div>
                            </Col>
                            {/* <ToastContainer /> */}
                        </Row>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Login
