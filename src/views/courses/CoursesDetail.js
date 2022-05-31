import React, {useEffect, useState} from 'react';
import { Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import Plyr from 'plyr-react';
import Rating from 'react-rating';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import API from 'api-config'
import { NavLink } from 'react-router-dom';
import CourseReview from './components/CourseReview';

const PurePlyr = React.memo(() => {
  const videoSrc = {
    type: 'video',
    sources: [
      {
        // Google drive option
        // src: 'https://gdurl.com/SZAp'
        // Test option
        src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
      }],
    poster: '/img/product/large/product-2.webp',
  };

  return <Plyr source={videoSrc} options={{}} />;
});

const CoursesDetail = (props) => {

  // Declaracio dels estats
  const [course, setCourse] = useState([]);
  const [review, setReview] = useState([]);

  const  [isLoaded, setIsLoaded] = useState(0);

  const GetCourse = async () => {
    const data = await fetch(`${API.ADDR}/courses/${props.match.params.idCourse}`) // Obte les dades del curs especificat
    const courseData = await data.json(); // els transforma en json
    setCourse(courseData)
    setIsLoaded(true)
  }

  const GetReview = async () => {
    const data = await fetch(`${API.ADDR}/reviews/course/${props.match.params.idCourse}`) // Obte les dades del curs especificat
    const reviewData = await data.json(); // els transforma en json
    setReview(reviewData)
    setIsLoaded(true)
  }

  useEffect(() => {
    GetCourse()
    GetReview()
  }, [])

  const description = 'Elearning Portal Course Detail Page';
  const breadcrumbs = [
    { to: '', text: 'Incio' },
    { to: 'courses/explore', text: 'Cursos' },
  ];

  if(isLoaded)
  {
    return (
      <>
      <HtmlHead title={course.title} description={description} />
      {/* Title and Top Buttons Start */}
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-sm-0 me-auto">
            <h1 className="mb-0 pb-0 display-4">{course.title}</h1>
            <BreadcrumbList items={breadcrumbs} />
          </Col>
          {/* Title End */}
        </Row>
      </div>
      {/* Title and Top Buttons End */}
  
      <Row className="g-5">
        <Col xxl="8" className="mb-5">
          <Card className="mb-5">
            <div className="card-img-top sh-50 cover">
              <PurePlyr />
            </div>
            <Card.Body>
             <h4 className="mb-3">Sobre el curso</h4> 
              <div>
                <p>
                  {course.description}
                </p>
              </div>
            </Card.Body>
            <Card.Footer className="border-0 pt-0">
              <Row className="align-items-center">
                <Col xs="6">
                  <div className="d-flex align-items-center">
                    <div className="sw-5 d-inline-block position-relative me-3">
                      <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                    <div className="d-inline-block">
                      <NavLink to="/instructor/detail">
                        {course.instructor.first_name}
                      </NavLink>
                      <div className="text-muted text-small">{course.instructor.speciality}</div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
          {/* Preview End */}
  
          {/* Reviews Start */}
          <h2 className="small-title">Reviews</h2>
          <Card>
            <Card.Body>
              <div className="mb-n3 border-last-none">
                {review.map(r => (
                    <CourseReview
                      key={r.key}
                      studentName={r.student.first_name}
                      day={r.date}
                      rating={r.stars}
                      text={r.text}
                    />
                  )
                )}
              </div>
            </Card.Body>
          </Card>
          {/* Reviews End */}
        </Col>
        <Col xxl="4">
          {/* At a Glance Start  */}
          <h2 className="small-title">Mas información del curso</h2>
          <Card className="mb-5">
            <Card.Body>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="clock" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Duración</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">{course.duration}</div>
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="diploma" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Nivel</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">{course.level}</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="g-0 align-items-center mb-3">
                <Col xs="auto">
                  <div className="sw-3 sh-4 d-flex justify-content-center align-items-center">
                    <CsLineIcons icon="calendar" className="text-primary" />
                  </div>
                </Col>
                <Col className="ps-3">
                  <Row className="g-0">
                    <Col>
                      <div className="sh-4 d-flex align-items-center lh-1-25">Lanzamiento</div>
                    </Col>
                    <Col xs="auto">
                      <div className="sh-4 d-flex align-items-center text-alternate">{course.release}</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* At a Glance End  */}
  
        </Col>
      </Row>
      </>
    );
  }
  return null;
};

export default CoursesDetail;
