import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

const ExplorarCursos = (props) => {

    const {title, rating, price, toCourse} = props;

    return (
        <Col>
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-1.webp" className="card-img-top sh-22" alt="card image" />
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
                {/* <div className="text-muted d-inline-block text-small align-text-top ms-1">(114)</div> */}
              </div>
              <div className="card-text mb-0">
                <div>€ 0</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
    );
};

export default ExplorarCursos;