import React from 'react';
import './dashboard.css';
import { Col, Row, Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import cookies from 'js-cookie';
import { deleteToken } from '../redux/userSlice';
// IMPORT IMAGE
import Image1 from '../images/update.png';
import Image2 from '../images/remove.png';
import Image3 from '../images/home.png';
import Image4 from '../images/protectRoute.png';
import Image5 from '../images/logout.png';

function DashboardPage() {

    const token = useSelector((state) => state.user?.token ?? 'no data');
    // console.log(token);

    const dispatch = useDispatch();

    const navigate = useNavigate()


    const logout = () => {
        dispatch(deleteToken(null));  //Clear store method
        navigate('/');
    }



    const deleteAccount = async () => {

        // Set up the headers with the token
        const headers = {
            'x-access-token': token,
            'Content-Type': 'application/json', // Example of another header
        };

        try {
            const res = await axios.delete('https://interview-plus.onrender.com/api/delete-user', {
                headers: headers
            });
            console.log(res);

            if (res.status === 200) {
                // cookies.remove('token');    //Remove token method (npm i js-cookies)
                dispatch(deleteToken(null));  //Clear store method
                navigate('/');
                console.log('delete profile successfully completed!');
            }

        } catch (error) {
            console.log('delete Profile faild!');
        }
    }

    return (
        <div className='dashHome-margin'>
            <Container>
                <Row>

                    <Col lg={4} md={6}>
                        <div className='card-dashHome cardTow-dashHome'>
                            <Card style={{ width: '18rem' }} className='card-dashHome card-bg'>
                                <div className='cardImg-div'>
                                    <img src={Image3} alt="cardImage" className='img-dashHome' />
                                </div>
                                <Card.Body className='cardBtn-dashHome'>
                                    {/* onClick={() => (deleteAccount())} */}
                                    <Link to='/' className='Button-dashHome' >Visit Home Page</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className='card-dashHome cardTow-dashHome'>
                            <Card style={{ width: '18rem' }} className='card-bg'>
                                <div className='cardImg-div'>
                                    <img src={Image1} alt="cardImage" className='img-dashHome' />
                                </div>
                                <Card.Body className='cardBtn-dashHome'>
                                    <Link to='/profileUpdate' variant="primary" className='Button-dashHome'>Update Your Profile</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className='card-dashHome cardTow-dashHome'>
                            <Card style={{ width: '18rem' }} className='card-bg'>
                                <div className='cardImg-div'>
                                    <img src={Image5} alt="cardImage" className='img-dashHome' />
                                </div>
                                <Card.Body className='cardBtn-dashHome'>
                                    <Button className='Button-dashHome' onClick={logout}>Logout Profile</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className='card-dashHome cardTow-dashHome'>
                            <Card style={{ width: '18rem' }} className='card-bg'>
                                <div className='cardImg-div'>
                                    <img src={Image2} alt="cardImage" className='img-dashHome' />
                                </div>
                                <Card.Body className='cardBtn-dashHome'>
                                    <Button className='Button-dashHome' onClick={deleteAccount}>Delete Your Profile</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>


                    <Col lg={4} md={6}>
                        <div className='card-dashHome cardTow-dashHome'>
                            <Card style={{ width: '18rem' }} className='card-bg'>
                                <div className='cardImg-div'>
                                    <img src={Image4} alt="cardImage" className='img-dashHome' />
                                </div>
                                <Card.Body className='cardBtn-dashHome'>
                                    <Link to='/protectedPage' variant="primary" className='Button-dashHome'>Protected Route</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default DashboardPage
