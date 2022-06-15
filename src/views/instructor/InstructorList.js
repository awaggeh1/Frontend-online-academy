import API from 'api-config';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import DEFAULT_AVATAR from '../../assets/imatges/default_avatar.png';
import InstructorCard from './components/InstructorCard';

const InstructorList = (props) => {
  
  const [instructors, setInstructors] = useState([]);
  const [instructorCourses, setInstructorCourses] = useState(0);

  // Retorna els professors
  const GetInstructors = async () => {
    const data = await fetch(`${API.ADDR}/instructors`) // Obte les dades
    const instructorData = await data.json(); // els transforma en json
    setInstructors(instructorData)
  }

  const GetInstructructorCourses = async () => {
    const data = await fetch(`${API.ADDR}/courses/instructor/${props.match.params.idInstructor}`) // Obte les dades
    const instructorData = await data.json(); // els transforma en json
    setInstructorCourses(instructorData)
  }
  
  useEffect(() => {
    GetInstructors()
    GetInstructructorCourses()
  }, [])

  const title = 'Instructors';
  const description = 'Elearning Portal Instructors List Page';
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

      <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-3 row-cols-xxl-4 g-3">
      {instructors.map(i => (
          <InstructorCard 
            key={i.key}
            name={i.first_name}
            speciality={i.speciality}
            rating='5'
            imgLink={DEFAULT_AVATAR}
            aboutMe={i.about_me}
            coursesNum={instructorCourses} 
            toCourse={`/instructor/detail/${i.idinstructor}`}
        />
          )
      )}
      </Row>
    </>
  );
};

export default InstructorList;
