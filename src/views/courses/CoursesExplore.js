import API from 'api-config';
import React, { useEffect, useState } from 'react';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import { Col, Row } from 'react-bootstrap';
import CourseExploreCard from './components/CourseExploreCard';


const CoursesExplore = () => {


  const [courses, setCourses] = useState([]);


  // Retorna la quantitat de cursos 
  const GetCourses = async () => {
    const data = await fetch(`${API.ADDR}/courses`) // Obte les dades
    const courseData = await data.json(); // els transforma en json
    setCourses(courseData)
    console.log(courses)
  }

  useEffect(() => {
    GetCourses()
  }, [])

  const title = 'Explorar Cursos';
  const description = 'Elearning Portal Course Explore Page';
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

      {/* Llista tots els cursos */}
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mb-5">
        
        {courses.map(c => (
                    <CourseExploreCard
                      key={c.key}
                      title={c.title}
                      toCourse= {`/courses/detail/${c.idcourse}`}
                    />
                  )
                )}
      </Row>
    </>
  );
};

export default CoursesExplore;
