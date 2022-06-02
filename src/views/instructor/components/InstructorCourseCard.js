import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import Clamp from 'components/clamp';

const InstructorCourseCard = (props) => {

    const {title, price, rating, toCourse} = props;

    return (
        <Col md="12" lg="6" xl="12" xxl="6">
        <Card>
          <Row className="g-0 sh-19">
            <Col xs="auto" className="h-100 position-relative">
              <img src="/img/product/small/product-3.webp" alt="alternate text" className="card-img-horizontal sh-19 h-sm-100 sw-17 sw-lg-20" />
            </Col>
            <Col>
              <Card.Body className="d-flex align-items-center h-100 py-3">
                <div className="mb-0 h6">
                  <NavLink to={toCourse} className="body-link stretched-link d-block mb-3 sh-3 h6 lh-1-5">
                    <Clamp tag="span" clamp="1">
                      {title}
                    </Clamp>
                  </NavLink>
                  <div className="card-text mb-2">
                    <div>€ {price}</div>
                  </div>
                  <div>
                    <Rating
                      initialRating={rating}
                      readonly
                      emptySymbol={<i className="cs-star text-primary" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                    <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                  </div>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    );
};

export default InstructorCourseCard;