import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';

const CourseReview = (props) => {

    const {studentName, day, rating, text, imgLink} = props;

    return (
        <div>
            <Row className="g-0 w-100 border-bottom border-separator-light pb-3 mb-3">
                <Col xs="auto">
                <div className="sw-5 me-3">
                    <img src={imgLink} className="img-fluid rounded-xl" alt="thumb" />
                </div>
                </Col>
                <Col className="pe-3">
                <div>{studentName}</div>
                <div className="text-muted text-small mb-2">{day}</div>
                <Rating
                    className="align-middle"
                    initialRating={rating}
                    readonly
                    emptySymbol={<i className="cs-star text-primary" />}
                    fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div className="text-medium text-alternate lh-1-25">{text}</div>
                </Col>
            </Row>
        </div>
    );
};

export default CourseReview;