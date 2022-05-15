import React from 'react';
import { Row, Col, Card, ProgressBar, Button, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import Glide from 'components/carousel/Glide';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import YourTimeChart from './components/YourTimeChart';

const ElearningDashboard = () => {
  const title = 'E-learning Dashboard';
  const description = 'Elearning Portal E-learning Dashboard Page';
  // Titulos de los cursos
  const course1Title = 'Course 1';

  const breadcrumbs = [{ to: '', text: 'Home' }];
  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row>
          {/* Title Start */}
          <Col md="7">
            <h1 className="mb-0 pb-0 display-4">{title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}

      <Row>
        {/* Continue Learning Start */}
        <Col xl="6" className="mb-5">
          <h2 className="small-title">Continue Learning</h2>
          {/* Card 1 */}
          <Card className="mb-2">
            <Row className="g-0 sh-14">
              <Col xs="auto" className="position-relative">
                <NavLink to="/courses/detail">
                  <img src="/img/product/small/product-1.webp" alt="alternate text" className="card-img card-img-horizontal sw-14 sw-lg-18" />
                  <Button variant="foreground" size="sm" className="btn-icon-only px-3 position-absolute absolute-center opacity-75 pe-none">
                    <CsLineIcons icon="play" size="16" fill="var(--primary)" />
                  </Button>
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="py-0 h-100 d-flex align-items-center">
                  <div className="w-100">
                    <div className="d-flex flex-row justify-content-between mb-2">
                      <NavLink to="/courses/detail">{course1Title}</NavLink>
                      <div className="text-muted">67%</div>
                    </div>
                    <ProgressBar className="progress-md mb-2" now={67} />
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          {/* Card 2 */}
          <Card className="mb-2">
            <Row className="g-0 sh-14">
              <Col xs="auto" className="position-relative">
                <NavLink to="/courses/detail">
                  <img src="/img/product/small/product-2.webp" alt="alternate text" className="card-img card-img-horizontal sw-14 sw-lg-18" />
                  <Button variant="foreground" size="sm" className="btn-icon-only px-3 position-absolute absolute-center opacity-75 pe-none">
                    <CsLineIcons icon="play" size="16" fill="var(--primary)" />
                  </Button>
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="py-0 h-100 d-flex align-items-center">
                  <div className="w-100">
                    <div className="d-flex flex-row justify-content-between mb-2">
                      <NavLink to="/courses/detail">Course 2</NavLink>
                      <div className="text-muted">85%</div>
                    </div>
                    <ProgressBar className="progress-md mb-2" now={85} />
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
          {/* Card 3 */}
          <Card className="mb-2">
            <Row className="g-0 sh-14">
              <Col xs="auto" className="position-relative">
                <NavLink to="/courses/detail">
                  <img src="/img/product/small/product-3.webp" alt="alternate text" className="card-img card-img-horizontal sw-14 sw-lg-18" />
                  <Button variant="foreground" size="sm" className="btn-icon-only px-3 position-absolute absolute-center opacity-75 pe-none">
                    <CsLineIcons icon="play" size="16" fill="var(--primary)" />
                  </Button>
                </NavLink>
              </Col>
              <Col>
                <Card.Body className="py-0 h-100 d-flex align-items-center">
                  <div className="w-100">
                    <div className="d-flex flex-row justify-content-between mb-2">
                      <NavLink to="/courses/detail">Course 3</NavLink>
                      <div className="text-muted">14%</div>
                    </div>
                    <ProgressBar className="progress-md mb-2" now={14} />
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        {/* Continue Learning End */}

        {/* Recommended Courses Start */}
        <Col xl="6" className="mb-5">
          <h2 className="small-title">Recommended for You</h2>
          <Card className="sh-50 sh-md-40 h-xl-100-card hover-img-scale-up">
            <img src="/img/banner/cta-standard-3.webp" className="card-img h-100 scale position-absolute" alt="card image" />
            <div className="card-img-overlay d-flex flex-column justify-content-between bg-transparent">
              <div>
                <div className="cta-1 mb-3 text-black w-75 w-sm-50">Introduction to Aqueedah</div>
                <div className="w-50 text-black mb-3">
                  Liquorice caramels chupa chups bonbon. Jelly-o candy sugar chocolate cake caramels apple pie lollipop jujubes.
                </div>
                <Rating
                  className="mb-2"
                  initialRating={5}
                  readonly
                  emptySymbol={<i className="cs-star text-primary" />}
                  fullSymbol={<i className="cs-star-full text-primary" />}
                />
                <div>$ 27.50</div>
              </div>
              <div>
                <NavLink to="/courses/detail" className="btn btn-icon btn-icon-start btn-outline-primary mt-3 stretched-link">
                  <CsLineIcons icon="chevron-right" /> <span>View</span>
                </NavLink>
              </div>
            </div>
          </Card>
        </Col>
        {/* Recommended Courses End */}
      </Row>    
      
      {/* Trending Courses Start */}
      <h2 className="small-title">Trending Courses</h2>
      <Row className="row-cols-1 row-cols-md-2 row-cols-xl-5 g-2">
        {/* Col 1 */}
        <Col>
          <Card className="h-100">
            <Badge bg="primary" className="me-1 position-absolute e-3 t-n2 z-index-1">
              POPULAR
            </Badge>
            <Card.Img src="/img/product/small/product-4.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/courses/detail" className="body-link stretched-link">
                  Introduction to Bread Making
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
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(39)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 42.25</del>
                </div>
                <div>$ 27.50</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        {/* Col 2 */}
        <Col>
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-5.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/courses/detail" className="body-link stretched-link">
                  Apple Cake Recipe
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
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(221)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 36.50</del>
                </div>
                <div>$ 15.25</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        {/* Col 3 */}
        <Col>
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-6.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/courses/detail" className="body-link stretched-link">
                  Dough for the Molds
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
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(572)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 51.00</del>
                </div>
                <div>$ 36.80</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        {/* Col 4 */}
        <Col>
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-7.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/courses/detail" className="body-link stretched-link">
                  Fruit Decorations
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
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(25)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 18.25</del>
                </div>
                <div>$ 11.00</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        {/* Col 5 */}
        <Col className="d-none d-xl-block">
          <Card className="h-100">
            <Card.Img src="/img/product/small/product-8.webp" className="card-img-top sh-22" alt="card image" />
            <Card.Body>
              <h5 className="heading mb-0">
                <NavLink to="/courses/detail" className="body-link stretched-link">
                  14 Facts About Sugar
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
                <div className="text-muted d-inline-block text-small align-text-top ms-1">(472)</div>
              </div>
              <div className="card-text mb-0">
                <div className="text-muted text-overline text-small">
                  <del>$ 24.00</del>
                </div>
                <div>$ 14.90</div>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      {/* Trending Courses End */}
    </>
  );
};

export default ElearningDashboard;
