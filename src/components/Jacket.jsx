import React from 'react';
import './home.css';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import HomeCard from './HomeCard';

function Jacket() {

    const productsDetails = useSelector((state) => state.products?.product ?? []);
    // console.log(productsDetails);


    let newArray = productsDetails.slice(14, 17);
    // console.log(newArray);

    let oneArray = productsDetails.slice(2, 3);
    // console.log(oneArray); 


    // console.log('Jacket concat ============>');

    const jacketDetails = newArray.concat(oneArray);
    // console.log(jacketDetails);

    return (
        <div className='home-margin'>

            <Container >
                <Row>
                    {jacketDetails && jacketDetails.map((element, index) => (
                        <Col lg={4} sm={6} key={index}>

                            <HomeCard title={element.title} price={element.price} description={element.description} image={element.image} category={element.category} rating={element.rating} />


                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Jacket
