import React, { useState } from 'react';
import './singup.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// IMPORT TOSTER
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Signup() {

    const [focus, setFocus] = useState({
        errName: false,
        errEmail: false,
        errPass: false
    });

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    });

    // const notify = () => toast("Registraction successfully completed!");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {    // This function created stop rountering in signup form
        e.preventDefault();

        console.log("start ===========>");
        if( inputs.name === '' && inputs.email === '' && inputs.password === '' ){
            alert('fill the form');
        }

        try {
            const res = await axios.post('https://interview-plus.onrender.com/api/register', inputs);
            console.log(res);

            if(res.data.token){
                // notify();
                console.log('User Registraction successfully completed!');
                navigate("/login"); 
                
            }

        } catch (error) {
            console.log('User Registraction faild!');
        }

    }

    return (
        <div className='singup-restaurent'>
            <Container>
                <div className='margin-signup'>
                    <form className='singup-list' onSubmit={handleSubmit} >
                        <Row>
                            <div>
                                <h2 className='singup-head'>Create an account</h2>
                                <span className='singup-mainHead'>Enter your details below</span>
                            </div>
                            <Col xl={4} md={6}>
                                <div>
                                    <span className='signupList-Head'>Name :-</span>
                                    <input type="text" placeholder='Name' className='inpuBox-singup' id='name' name='name' value={inputs.name} onChange={(e) => setInputs({ ...inputs, name: e.target.value })} pattern='^[A-Za-z0-9].{3,19}' onBlur={() => setFocus({ ...focus, errName: true })} focus={focus.errName.toString()} required />
                                    <span className='error-signup'>Name should have 4-20 characters</span>
                                </div>
                            </Col>
                            <Col xl={4} md={6}>
                                <div>
                                    <span className='signupList-Head'>Email :-</span>
                                    <input type="email" placeholder='Email ' className='inpuBox-singup' id='email' name='email' value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} onBlur={() => setFocus({ ...focus, errEmail: true })} focus={focus.errEmail.toString()} required />
                                    <span className='error-signup'>Enter a valid Eamil ID</span>
                                </div>
                            </Col>
                            <Col xl={4} md={6}>
                                <div>
                                    <span className='signupList-Head'>Password :-</span>
                                    <input type="password" placeholder='Password' className='inpuBox-singup' id='password' name='password' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} pattern='(?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$' onBlur={() => setFocus({ ...focus, errPass: true })} focus={focus.errPass.toString()} required />
                                    <span className='error-signup'>Password must have minimum 8 characters and includes atleast 1 uppercase , 1 digits and 1 special character</span>
                                </div>
                            </Col>

                            <Col xs={12}>
                                <div className='singupList-ButtonDiv'>
                                    <button className='singupList-Button' >Create Account</button>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className='singup-last'>
                                    <span className='singup-text'>Already have account? <Link to='/login' className='singup-login'>Login</Link></span>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Signup
