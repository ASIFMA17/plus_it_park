import React from 'react';
import './home.css';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import HomeCard from './HomeCard';

function Bag() {

    const productsDetails = useSelector((state) => state.products?.product ?? []);
    // console.log(productsDetails);


    let bagDetails = productsDetails.slice(0, 1);
    console.log(bagDetails);

  return (
    <div className='home-margin'>

    <Container >
        <Row>
            {bagDetails && bagDetails.map((element, index) => (
                <Col lg={4} sm={6} key={index}>

                    <HomeCard title={element.title} price={element.price} description={element.description} image={element.image} category={element.category} rating={element.rating} />


                </Col>
            ))}
        </Row>
    </Container>
</div>
  )
}

export default Bag
