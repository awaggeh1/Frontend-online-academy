import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

const InstructorCard = (props) => {

    const {name, speciality, rating, aboutMe, coursesNum, toCourse} = props;

    return (
        <Col>
          <Card className="h-100">
            <Card.Body className="text-center">
              <div className="sw-13 position-relative mb-3 mx-auto">
                <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
              </div>
              <NavLink to={toCourse} className="mb-3 body-link">
                {name}
              </NavLink>
              <div className="text-muted text-medium mb-2">{speciality}</div>
              <Rating
                className="mb-2"
                initialRating={rating}
                readonly
                emptySymbol={<i className="cs-star text-primary" />}
                fullSymbol={<i className="cs-star-full text-primary" />}
              />
              <div className="mb-1 text-muted sh-7">{aboutMe}</div>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="form-check" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Cursos</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">{coursesNum}</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-1">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="text-alternate sh-4 d-flex align-items-center lh-1-25">Contenido</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">210h</div>
                    </Col>
                  </Row>
                </Col> 
              </Row>
              <Row className="ps-3">
                <NavLink to={toCourse} className="btn btn-outline-primary w-100 me-1 btn-sm">
                + Sobre {name}
                </NavLink>  
            </Row> 
            </Card.Body>
          </Card>
        </Col>
    );
};

export default InstructorCard;