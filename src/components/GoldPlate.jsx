import React from 'react';
import './home.css';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import HomeCard from './HomeCard';

function GoldPlate() {

    const productsDetails = useSelector((state) => state.products?.product ?? []);
    // console.log(productsDetails);


    let goldPlateDetails = productsDetails.slice(4, 8);
    // console.log(goldPlateDetails);

    return (
        <div className='home-margin'>

            <Container >
                <Row>
                    {goldPlateDetails && goldPlateDetails.map((element, index) => (
                        <Col lg={4} sm={6} key={index}>

                            <HomeCard title={element.title} price={element.price} description={element.description} image={element.image} category={element.category} rating={element.rating} />


                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default GoldPlate
