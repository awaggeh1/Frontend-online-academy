import { useAuth0 } from "@auth0/auth0-react";
import API from 'api-config';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import PurePlyr from 'components/PurePlyr';
import Rating from 'react-rating';
import Alert from 'react-bootstrap/Alert'
import CsLineIcons from 'cs-line-icons/CsLineIcons';

import React, { useEffect, useState } from 'react';
import { Button, Card, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import DEFAULT_AVATAR from '../../assets/imatges/default_avatar.png';
import CourseReview from './components/CourseReview';

const CoursesDetail = (props) => {

  const description = 'Elearning Portal Course Detail Page';
  const breadcrumbs = [
    { to: 'dashboards/elearning', text: 'Inicio' },
    { to: 'courses/explore', text: 'Cursos' },
  ];

  // Declaracio dels estats
  const [course, setCourse] = useState([]);
  const [review, setReview] = useState([]);
  const [loaded, setLoading] = useState(0);
  const [commentText, setCommentText] = useState([]);
  const [rate, setRate] = useState(0);
  const [user, setUser] = useState([]);
  const [isShown, setIsShown] = useState(false);

  // Recupera les dades d'inici de sessió del usuari 
  //  const GetUserData = () => {
  //   const u = sessionStorage.getItem('user')
  //   const data = JSON.parse(u)
  //   setUser(data)
  // }

  const GetCourse = async () => {
    const data = await fetch(`${API.ADDR}/courses/${props.match.params.idCourse}`) // Obte les dades del curs especificat
    const courseData = await data.json(); // els transforma en json
    setCourse(courseData)
    setLoading(true)
  }

  const GetReview = async () => {
    const data = await fetch(`${API.ADDR}/reviews/course/${props.match.params.idCourse}`) // Obte les dades del curs especificat
    const reviewData = await data.json(); // els transforma en json
    setReview(reviewData)
  }
  
  // Fa un post d'un nou review a la base de dades
  async function PostReview(){
    fetch(`${API.ADDR}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        date: Date.now(),
        stars: rate,
        text: commentText,
        courseIdcourse: course.idcourse,
        studentIdstudent: 1 // Encara no esta definit s'ha d'extreure del Auth0
      })
    })
  }

  useEffect(() => {
    GetCourse()
    // GetUserData()
    GetReview()
  }, [])

  const onSubmit = () => {
    PostReview() // Sube el comentario a la base de datos
    setCommentText("") // Resetea el campo
    setIsShown(true) // Mostra l'alerta
  };
  
  const handleRateChange = (e) => {
    setRate(e)
  };

  // No entra mentres el hook no estigui carregat
  if(!loaded){
    return <div>Loading ...</div>;
  }
  
  // Entra cuan el hook esta crraegat
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
            {/* Reproductor de vídeo */}
            <PurePlyr link={course.video_uri}/>
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
                    <img src={DEFAULT_AVATAR} className="img-fluid rounded-xl" alt="thumb" />
                  </div>
                  <div className="d-inline-block">
                    <NavLink to={`/instructor/detail/${course.instructor.idinstructor}`}>
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
      
        {/* Mas informacion del curso Start  */}
        <h2 className="small-title">Más información del curso</h2>
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
        {/*  Mas informacion del curso End  */}
        {/* Reviews Start */}
        <h2 className="small-title">Reviews</h2>
          <Card>
            <Card.Body>
            <Row className="g-0 align-items-center mb-3">
              <Col className="ps-3">
                {/* Review List */}
                <Row className="g-0">
                  <div className="mb-n3 border-last-none">        
                    {review.map(r => (
                        <CourseReview
                          key={r.key}
                          studentName={r.student.first_name}
                          imgLink={DEFAULT_AVATAR}
                          day={r.date}
                          rating={r.stars}
                          text={r.text}
                        />                     
                      )
                    )}
                  </div>
                </Row>
                {/* Rating */}
                <Row className="g-0">
                  <div className="input-group mt-5">Rating: </div>
                  <Rating 
                    initialRating={0}
                    readonly={false}
                    onChange={e => handleRateChange(e)}
                    emptySymbol={<i className="cs-star text-primary" />}
                    fullSymbol={<i className="cs-star-full text-primary" />}
                  />
                </Row>
                {/* Comment */}
                <Row className="g-0">         
                  <div className="input-group mt-5">
                    <InputGroup className="mb-3" type="reset"> 
                      <FormControl 
                        placeholder="Añadir review" 
                        name="commentText"
                        value={commentText}
                        onChange={e => setCommentText(e.target.value)} 
                      /> 
                      <Button 
                        variant="outline-primary"
                        type="submit"
                        className="btn-icon btn-icon-end" 
                        onClick={e => onSubmit(e)}> 
                        <span>Enviar</span>
                        <CsLineIcons icon="send" 
                      />
                      </Button>
                    </InputGroup>
                    {isShown && 
                      <Alert 
                        key='success' 
                        variant='success' 
                        onClose={() => setIsShown(false)} 
                        dismissible
                      >
                        Comentario añadido con éxito
                      </Alert>
                    }
                  </div>
                </Row>
              </Col>
            </Row>
            </Card.Body>
          </Card>
        {/* Reviews End */}
      </Col>
    </Row>
    </>
  );
};

export default CoursesDetail;
