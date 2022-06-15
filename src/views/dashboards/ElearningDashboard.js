import API from 'api-config';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import DEFAULT_AVATAR_VIDEO from '../../assets/imatges/video-icon.png';
import DEFAULT_AVATAR_VIDEO_2 from '../../assets/imatges/video-icon-3.png';

import ContinueLearning from './components/ContinueLearning';
import RecomendendCourse from './components/RecomendedCourse';
import TrendingCourse from './components/TrendingCourse';

const ElearningDashboard = () => {

  // Declaracio dels estats
  const [course, setCourse] = useState([]);
  const [recomendedCourse, setRecomendedCourse] = useState([]);
  const [trendingCourse, setTrendingCourse] = useState([]);
  const [loaded, setLoaded] = useState(0);
  
  // Retorna els cursos que el usuari ha de continuar fent
  const GetContinuelearningCourse = async () => {
    const data = await fetch(`${API.ADDR}/courses/2`) // Obte les dades
    const courseData = await data.json(); // els transforma en json
    setCourse(courseData)
    setLoaded(true)
  }

  // Agafa els cursos recomenats 
  const GetRecomendedCourse = async () => {
    const data = await fetch(`${API.ADDR}/courses/3`) // Obte les dades
    const courseData = await data.json(); // els transforma en json
    setRecomendedCourse(courseData)
  }
  
  // Agafa els cursos recomenats 
  const GetTrendingCourse = async () => {
    const data = await fetch(`${API.ADDR}/courses/4`) // Obte les dades
    const courseData = await data.json(); // els transforma en json
    setTrendingCourse(courseData)
  }


  useEffect(() => {  
    GetContinuelearningCourse()
    GetRecomendedCourse()
    GetTrendingCourse()
  }, [])

  const title = 'E-learning Dashboard';
  const description = 'Elearning Portal E-learning Dashboard Page';
  const breadcrumbs = [{ to: '', text: 'Inicio' }];

  if (!loaded) {
    return <div>Loading...</div>;
  }

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
          <h2 className="small-title">Seguir aprendiendo</h2>
          <ContinueLearning 
            title={course.title} 
            toCourse= {`/courses/detail/${course.idcourse}`}
            imgLink={DEFAULT_AVATAR_VIDEO}
            progress='69'
          />
        </Col>
        {/* Continue Learning End */}

        {/* Recommended Courses Start */}
        <Col xl="6" className="mb-5">
          <h2 className="small-title">Recomendados para ti</h2>
          <RecomendendCourse 
            title={recomendedCourse.title} 
            description={recomendedCourse.description} 
           // imgLink={DEFAULT_AVATAR_VIDEO}
            rating='4'
            toCourse= {`/courses/detail/${recomendedCourse.idcourse}`}
            />
        </Col>
        {/* Recommended Courses End */}
      </Row>
      
      {/* Trending Courses Start */}
      <h2 className="small-title">Trending Courses</h2>
      <Row className="row-cols-1 row-cols-md-2 row-cols-xl-5 g-2">
        <TrendingCourse 
          title={trendingCourse.title} 
          description={trendingCourse.description} 
          imgLink={DEFAULT_AVATAR_VIDEO_2}
          rating='5'
          price='0'
          toCourse= {`/courses/detail/${trendingCourse.idcourse}`}
        />
      </Row>
      {/* Trending Courses End */}
    </>
  );
};

export default ElearningDashboard;
