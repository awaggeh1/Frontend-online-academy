import React, {useEffect, useState}  from 'react';
import { Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import HtmlHead from 'components/html-head/HtmlHead';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import API from 'api-config'
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Clamp from 'components/clamp';
import InstructorCourseCard from './components/InstructorCourseCard';
import CommentsCard from './components/CommentsCard';

const InstructorDetail = (props) => {

  // Declaracio dels estats
  const [instructor, setInstructor] = useState([]);
  const [instructorCourses, setInstructorCourses] = useState(0);
  const [courses, setCourses] = useState([]);
  const [comments, setComments] = useState([]);

  // Retorna dades del professor
  const GetInstructor = async () => {
    const data = await fetch(`${API.ADDR}/instructors/${props.match.params.idInstructor}`)
    const instructorData = await data.json();
    setInstructor(instructorData)
  }

  // Retorna el numero de cursos que te el professor
  const GetInstructructorNumCourses = async () => {
    const data = await fetch(`${API.ADDR}/courses/instructor/${props.match.params.idInstructor}`)
    const instructorData = await data.json();
    setInstructorCourses(instructorData)
  }
  
  // Retorna els de cursos que te el professor
  const GetInstructructorCourses = async () => {
    const data = await fetch(`${API.ADDR}/courses/instructors/${props.match.params.idInstructor}`)
    const coursesData = await data.json();
    setCourses(coursesData)
  }
  
   // Retorna els commenatris que ha rebut aques professor
   const GetComments = async () => {
    const data = await fetch(`${API.ADDR}/comments/instructor/${props.match.params.idInstructor}`)
    const commentsData = await data.json();
    setComments(commentsData)
  }

  useEffect(() => {
    GetInstructor()
    GetInstructructorNumCourses()
    GetInstructructorCourses()
    GetComments()
  }, [])

  const title = 'Detalles del profesor';
  const description = 'Elearning Portal Instructor Detail Page';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'instructor/list', text: 'Instructors' },
  ];

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

      <Row className="g-5">
        <Col xl="4" xxl="3">
          {/* About Start */}
          <h2 className="small-title">Sobre el profesor</h2>
          <Card>
            <Card.Body className="mb-n5">
              <div className="d-flex align-items-center flex-column mb-5">
                  <div className="sw-13 position-relative mb-3">
                    <img src="/img/profile/profile-6.webp" className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                  <div className="h5 mb-0">{instructor.first_name} {instructor.last_name}</div>
                  <div className="text-muted mb-2">{instructor.speciality}</div>
              </div>
              <div className="mb-5">
                <p className="text-small text-muted mb-2">Sobre mi</p>
                <p>
                  {instructor.about_me}
                </p>
              </div>
              <div className="mb-5">
                <p className="text-small text-muted mb-2">CONTACTO</p>
                <NavLink to="#" className="d-block body-link mb-1">
                  <CsLineIcons icon="email" className="me-2" size="17" />
                  <span className="align-middle">{instructor.email}</span>
                </NavLink>
              </div>
            </Card.Body>
          </Card>
          {/* About End */}
        </Col>

        <Col xl="8" xxl="9">
          {/* Stats Start */}
          <h2 className="small-title">Stats</h2>
          <Row className="g-2 mb-5">
            <Col sm="6" lg="3">
              <Card className="hover-border-primary">
                <Card.Body>
                  <div className="heading mb-0 d-flex justify-content-between lh-1-25 mb-3">
                    <span>Courses</span>
                    <CsLineIcons icon="presentation" className="text-primary" />
                  </div>
                  <div className="cta-1 text-primary">{instructorCourses}</div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" lg="3">
              <Card className="hover-border-primary">
                <Card.Body>
                  <div className="heading mb-0 d-flex justify-content-between lh-1-25 mb-3">
                    <span>Rating</span>
                    <CsLineIcons icon="star" className="text-primary" />
                  </div>
                  <div className="text-small text-muted mb-1">345 Users</div>
                  <div className="cta-1 text-primary">4.85</div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="6" lg="3">
              <Card className="hover-border-primary">
                <Card.Body>
                  <div className="heading mb-0 d-flex justify-content-between lh-1-25 mb-3">
                    <span>Personas inscritas en todos los cursos</span>
                    <CsLineIcons icon="diploma" className="text-primary" />
                  </div>
                  <div className="cta-1 text-primary">120</div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* Stats End */}

          {/* Courses Start */}
          <div className="d-flex justify-content-between">
            <h2 className="small-title">Cursos</h2>
          </div>
          <Row className="g-3 mb-5">
            {courses.map(c => (
                      <InstructorCourseCard
                        key={c.key}
                        title={c.title}
                        price='0'
                        rating='5'
                        toCourse= {`/courses/detail/${c.idcourse}`}
                      />
                    )
            )}
          </Row>
          {/* Courses End */}

          {/* Comments Start */}
          <h2 className="small-title">Comentarios</h2>
          <Card>
            <Card.Body>
              {/* LLista tots els comentaris */}
              {comments.map(c => (
                <CommentsCard
                  key={c.key}
                  name={c.student.first_name}
                  lastName={c.student.last_name}
                  date={c.date}
                  text={c.text}
                />
                )
              )}

              <div className="input-group mt-5">
                <InputGroup className="mb-3">
                  <FormControl placeholder="Añadir comentario" />
                  <Button variant="outline-primary" className="btn-icon btn-icon-end">
                    <span>Enviar</span>
                    <CsLineIcons icon="send" />
                  </Button>
                </InputGroup>
              </div>
            </Card.Body>
          </Card>
          {/* Comments End */}
        </Col>
      </Row>
    </>
  );
};

export default InstructorDetail;
