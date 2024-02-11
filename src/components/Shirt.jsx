import React from 'react';
import './home.css';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import HomeCard from './HomeCard';

function Shirt() {

    const productsDetails = useSelector((state) => state.products?.product ?? []);
    // console.log(productsDetails);


    let newArray = productsDetails.slice(17, 20);
    // console.log(newArray);

    let oneArray = productsDetails.slice(1, 2);
    // console.log(oneArray); 

    let secondArray = productsDetails.slice(3, 4);
    // console.log(secondArray);

    let threeArray = oneArray.concat(secondArray)
    // console.log(threeArray);

    // console.log('concat shirt ============>');

    const shirtDetails = threeArray.concat(newArray);
    // console.log(shirtDetails);

    return (
        <div className='home-margin'>
            <Container >
                <Row>
                    {shirtDetails && shirtDetails.map((element, index) => (
                        <Col lg={4} sm={6} key={index}>

                            <HomeCard title={element.title} price={element.price} description={element.description} image={element.image} category={element.category} rating={element.rating} />


                        </Col>
                    ))}

                </Row>
                {/* <div className='back-home-div'>
                    <button className='back-home'>Go Back</button>
                </div> */}
            </Container>
        </div>
    )
}

export default Shirt
