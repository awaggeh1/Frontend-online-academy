import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layoutShowingNavMenu } from 'layout/layoutSlice';
import { Dropdown, Button, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import UserProfile from './NavUserProfile';

const NavUser = React.memo(
  React.forwardRef(({ onClick, expanded = false, user = {} }, ref) => (
    <a
      href= '/user/profile'
      ref={ref}
      className="d-flex user position-relative"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick(e);
      }}
    >
      <img className="profile" alt={user.name} src={user.thumb} />
      <div className="name">{user.name}</div>
    </a>
  ))
);


// const NavUser = React.memo(
//   React.forwardRef(({ onClick, expanded = false, user = {} }, ref) => (
//       // <NavLink to="/user/profile" >
//       <NavLink to="/user/profile" className="body-link stretched-link">     
//           <a
//             href= {NavLink.to}
//             ref={ref}
//             className="d-flex user position-relative"
//             onClick={(e) => {
//               e.preventDefault();
//               e.stopPropagation();
//               onClick(e);
//             }}
//           >
//             <img className="profile" alt={user.name} src={user.thumb} />
//             <div className="name">{user.name}</div>
//           </a>
//       </NavLink>
//   ))
// );


const MENU_NAME = 'NavUserMenu';

const NavUserMenu = () => {

  const { isLogin, currentUser } = useSelector((state) => state.auth);
  const { color } = useSelector((state) => state.settings);
  const { showingNavMenu } = useSelector((state) => state.layout);

  const dispatch = useDispatch();
  
  const {
    behaviourStatus: { behaviourHtmlData },
    attrMobile,
    attrMenuAnimate,
  } = useSelector((state) => state.menu);

  const onToggle = (status, event) => {
    if (event && event.stopPropagation) event.stopPropagation();
    else if (event && event.originalEvent && event.originalEvent.stopPropagation) event.originalEvent.stopPropagation();
    dispatch(layoutShowingNavMenu(status ? MENU_NAME : ''));
  };

  useEffect(() => {
    dispatch(layoutShowingNavMenu(''));
    // eslint-disable-next-line
  }, [attrMenuAnimate, behaviourHtmlData, attrMobile, color]);

  // Si No esta logejat.
  if (!isLogin) {
    return <></>;
  }
  return (
    <Dropdown as="div" bsPrefix="user-container d-flex" onToggle={onToggle} show={showingNavMenu === MENU_NAME} drop="down">
      <Dropdown.Toggle as={NavUser} user={currentUser} />
    </Dropdown>
  )  
};
export default React.memo(NavUserMenu);
