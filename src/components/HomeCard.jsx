import React from 'react';
import { Card } from 'react-bootstrap';

function HomeCard({ title, price, description, image, category , rating }) {
    // console.log(title);
    // console.log(price);
    // console.log(description);
    // console.log(image);
    // console.log(category);
    return (
        <div className='card-home'>
            <Card className='card-margin'>
                {/* <div className='image-margin'> */}
                    <Card.Img variant="top" src={image} className='card-img' />
                {/* </div> */}
                <Card.Body className='cardBody'>
                    <Card.Title className='card-head'>{title}</Card.Title>
                    {/* <Card.Text> */}
                        <ul className='card-ul'>
                            <li className='card-text'>Category : {category}</li>
                            <li className='card-text'>Price : {price}</li>
                            <li className='card-text'>Rating :- <br /> <span>rate - {rating.rate}</span> <span>count - {rating.count}</span> </li>
                            <li className='card-text'>Description : {description}</li>
                        </ul>
                    {/* </Card.Text> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default HomeCard
