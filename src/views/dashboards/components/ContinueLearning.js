import CsLineIcons from 'cs-line-icons/CsLineIcons';
import React from 'react';
import { Button, Card, Col, ProgressBar, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ContinueLearning = (props) => {
    
    const {title, imgLink, progress, toCourse} = props;

    return (
        <Card className="mb-2">
        <Row className="g-0 sh-14">
            <Col xs="auto" className="position-relative">
            <NavLink to={toCourse}>
                <img src={imgLink} alt="alternate text" className="card-img card-img-horizontal sw-14 sw-lg-18" />
                <Button variant="foreground" size="sm" className="btn-icon-only px-3 position-absolute absolute-center opacity-75 pe-none">
                <CsLineIcons icon="play" size="16" fill="var(--primary)" />
                </Button>
            </NavLink>
            </Col>
            <Col>
            <Card.Body className="py-0 h-100 d-flex align-items-center">
                <div className="w-100">
                <div className="d-flex flex-row justify-content-between mb-2">
                    <NavLink to={toCourse}>{title}</NavLink>
                    <div className="text-muted">{progress}%</div>
                </div>
                <ProgressBar className="progress-md mb-2" now={progress} />
                </div>
            </Card.Body>
            </Col>
        </Row>
        </Card>
    );
};

export default ContinueLearning;