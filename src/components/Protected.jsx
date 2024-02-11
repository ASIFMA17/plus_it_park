import React, { useEffect } from 'react';
import './home.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Container } from 'react-bootstrap';

function Protected() {

    const token = useSelector((state) => state.user?.token ?? 'no data');
    // console.log(token);

    useEffect(() => {

        const getDetails = async () => {
            // Set up the headers with the token
            const headers = {
                'x-access-token': token,
                'Content-Type': 'application/json', // Example of another header
            };
            try {
                console.log('Get Protected Route Details ============>');
                const res = await axios.get('https://interview-plus.onrender.com/api/protected', {
                    headers: headers
                });
                console.log(res);

                if (res.status === 200) {
                    // console.log(res.data);
                    const message = res.data.message;
                    console.log('product geting successfully completed!');
                }

            } catch (error) {
                console.log(error.message);
            }
        }
        getDetails();

    }, []);

    return (
        <div className='home-margin'>
            <Container >
                <div className='product-Head-div'>
                    <span className='product-Head'>This is a protected route</span>
                </div>

            </Container>
        </div>
    )
}

export default Protected
