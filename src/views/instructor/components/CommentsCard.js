import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const CommentsCard = (props) => {

    const {name, lastName, date, text} = props;

    return (
        <div className="d-flex align-items-center border-bottom border-separator-light pb-3 mt-3">
            <Row className="g-0 w-100">
                <Col xs="auto">
                    <div className="sw-5 me-3">
                        <img src="/img/profile/profile-5.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                </Col>
                <Col className="pe-3">
                    <h2 className="small-title">{name} {lastName}</h2>
                    <div className="text-muted text-small mb-2">{date}</div>
                    <div className="text-medium text-alternate lh-1-25">{text}</div>
                </Col>
            </Row>
        </div>
    );
};

export default CommentsCard;