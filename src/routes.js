/* eslint-disable */
import { lazy } from 'react';
// import { USER_ROLE } from 'constants.js';
import { DEFAULT_PATHS } from 'config.js';


const dashboards = {
  elearning: lazy(() => import('views/dashboards/ElearningDashboard')),
};
const courses = {
  explore: lazy(() => import('views/courses/CoursesExplore')),
  list: lazy(() => import('views/courses/CoursesList')),
  detail: lazy(() => import('views/courses/CoursesDetail')),
};
const instructor = {
  list: lazy(() => import('views/instructor/InstructorList')),
  detail: lazy(() => import('views/instructor/InstructorDetail')),
};

const user = {
  profile: lazy(() => import('layout/nav/NavUserProfile'))
};

const appRoot = DEFAULT_PATHS.APP.endsWith('/') ? DEFAULT_PATHS.APP.slice(1, DEFAULT_PATHS.APP.length) : DEFAULT_PATHS.APP;

const routesAndMenuItems = {
  mainMenuItems: [
    {
      // PAGINA PRINCIPAL
      path: DEFAULT_PATHS.APP,
      exact: true,
      redirect: true,
      to: `${DEFAULT_PATHS.LOGIN}`
      // to: `${appRoot}/dashboards/elearning`,  
    },
    {
      path: `${appRoot}/dashboards`,
      icon: 'home-garage',
      label: 'menu.dashboards',
      exact: true,
      redirect: true,
      to: `${appRoot}/dashboards/elearning`,
      subs: [
        { path: '/elearning', label: 'menu.elearning', component: dashboards.elearning }
      ],
    },
    {
      path: `${appRoot}/courses`,
      label: 'menu.courses',
      icon: 'online-class',
      exact: true,
      redirect: true,
      to: `${appRoot}/courses/explore`,
      subs: [
        { path: '/explore', label: 'menu.explore', component: courses.explore },
        { path: '/list', label: 'menu.list', component: courses.list },
      ],
    },
    {
      path: `${appRoot}/instructor`,
      label: 'menu.instructor',
      icon: 'lecture',
      exact: true,
      redirect: true,
      to: `${appRoot}/instructor/list`,
      subs: [
        { path: '/list', label: 'menu.list', component: instructor.list },
        { path: '/detail', label: 'menu.detail', component: instructor.detail },
      ],
    },
    {
      path: `${appRoot}/courses/detail/:idCourse`,
      component: courses.detail
    },
    {
      path: `${appRoot}/instructor/detail/:idInstructor`,
      component: courses.detail
    },
  ],
  sidebarItems: [],
};
export default routesAndMenuItems;
