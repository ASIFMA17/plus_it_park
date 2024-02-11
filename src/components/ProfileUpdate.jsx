import React from 'react';
import './profileUpdate.css';
import { Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProfileUpdate() {

    // console.log('kkkkkkkkkkk');

    const token = useSelector((state) => state.user?.token ?? 'no data');
    // console.log(token);

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

        console.log("User Profile Update start ===========>");
        if (inputs.email === '' && inputs.password === '') {
            alert('fill the form');
        }

        // Set up the headers with the token
        const headers = {
            'x-access-token': token,
            'Content-Type': 'application/json', // Example of another header
        };

        try {
            const res = await axios.put('https://interview-plus.onrender.com/api/update-user', inputs,{
                headers : headers
            });
            console.log(res);

            if (res.status === 200) {
                console.log('User Profile Update successfully completed!');
                navigate("/dashboard");
            }

        } catch (error) {
            console.log('User Profile Update faild!');
        }


    }
    return (
        <div className='login-restaurent'>
            <Container>
                <div className='margin-login'>
                    <form className='login-list' onSubmit={handleSubmit} >
                        <Row>
                            <div>
                                <h2 className='login-head'>Profile Update</h2>
                                <span className='login-mainHead'>Enter your details below</span>
                            </div>
                            <Col lg={6}>
                                <div>
                                    <span className='loginList-Head'>Email :-</span>
                                    <input type="email" placeholder='Email' className='inpuBox-login' id='email' name='email' value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} onBlur={() => setFocus({ ...focus, errEmail: true })} focus={focus.errEmail.toString()} required />
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
                                    <button className='loginList-Button'>Submit</button>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </div>
            </Container>
        </div>
    )

}

export default ProfileUpdate
