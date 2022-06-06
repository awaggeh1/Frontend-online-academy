import React from 'react'
import { Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import CourseImage from '../../../assets/imatges/video-icon-3.png';

export default function CourseCard(props) {
    
    const {title, toCourse} = props;

    return (
        <Col>
          <Card className="h-100">
            <img src={CourseImage} alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to={toCourse} className="body-link stretched-link">
                  {title}
                </NavLink>
              </h5>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <div className="mb-2">
                <Rating
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
              </div>
              <div className="card-text mb-0">
                <div>€ 0</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
    );
}