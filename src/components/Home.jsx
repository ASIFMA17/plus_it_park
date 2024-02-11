import React, { useEffect } from 'react';
import './homePage.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { setProducts } from '../redux/productsSlice';
// import HomeCard from './HomeCard';
// IMPORT ICONS
import { MdArrowCircleRight } from "react-icons/md";
import { Link } from 'react-router-dom';
// IMPORT IMAGE
import Image1 from '../images/shirt.png';
import Image2 from '../images/jacket.png';
import Image3 from '../images/tv.png';
import Image4 from '../images/rings.png';
import Image5 from '../images/bag.png';

function Home() {

    const dispatch = useDispatch();

    useEffect(() => {

        const getDetails = async () => {
            try {
                console.log('Get Details ============>');
                const res = await axios.get('https://interview-plus.onrender.com/api/items');
                // console.log(res.data);

                if (res.data) {
                    // console.log(res.data);
                    dispatch(setProducts(res.data));
                    console.log('product geting successfully completed!');
                }

            } catch (error) {
                console.log(error.message);
            }
        }
        getDetails();

    }, []);

    return (

        <div className='dashHome-margin'>
            <Container>
                <div className='product-Head-div-home'>
                    <span className='product-Head-home'>Our Products</span>
                </div>
                <Row>

                    <Col lg={4} md={6}>
                        <div className='card-dashHome cardTow-dashHome'>
                            <Card style={{ width: '18rem' }} className='card-dashHome card-bg'>
                                <div className='cardImg-div'>
                                    <img src={Image1} alt="cardImage" className='img-dashHome' />
                                </div>
                                <Card.Body className='cardBtn-dashHome'>
                                    <div >
                                        <MdArrowCircleRight className='rightArrow' />
                                        <Link to='/shirt' className='productLink'> Shirt</Link>
                                    </div>
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
                                    <div >
                                        <MdArrowCircleRight className='rightArrow' />
                                        <Link to='/jacket' className='productLink'> Jacket</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                    <Col lg={4} md={6}>
                        <div className='card-dashHome cardTow-dashHome'>
                            <Card style={{ width: '18rem' }} className='card-bg'>
                                <div className='cardImg-div'>
                                    <img src={Image3} alt="cardImage" className='img-dashHome' />
                                </div>
                                <Card.Body className='cardBtn-dashHome'>
                                    <div >
                                        <MdArrowCircleRight className='rightArrow' />
                                        <Link to='/technicalIteams' className='productLink'> Technical Items</Link>
                                    </div>
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
                                    <div >
                                        <MdArrowCircleRight className='rightArrow' />
                                        <Link to='/goldPlate' className='productLink'> Jewellery</Link>
                                    </div>
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
                                    <div >
                                        <MdArrowCircleRight className='rightArrow' />
                                        <Link to='/bag' className='productLink'> Bag</Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Home
