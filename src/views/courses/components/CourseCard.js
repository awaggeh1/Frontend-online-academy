import React from 'react'
import { Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';

export default function CourseCard(props) {
    
    const {title, rating, price} = props;

    return (
    <Col>
        <Card className="h-100">
        <Card.Img src="/img/product/small/product-1.webp" className="card-img-top sh-22" alt="card image" />
        <Card.Body>
        <h5 className="heading mb-0">
            <NavLink to="/courses/detail" className="body-link stretched-link">
            {title}
            </NavLink>
        </h5>
        </Card.Body>
        <Card.Footer className="border-0 pt-0">
        <div className="mb-2">
            <Rating
            initialRating={rating}
            readonly
            emptySymbol={<i className="cs-star text-primary" />}
            fullSymbol={<i className="cs-star-full text-primary" />}
            />
            <div className="text-muted d-inline-block text-small align-text-top ms-1">(39)</div>
        </div>
        <div className="card-text mb-0">
            <div>{price}</div>
        </div>
        </Card.Footer>
        </Card>
    </Col>
    );
}