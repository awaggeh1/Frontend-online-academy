import React, { useEffect, useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { layoutShowingNavMenu } from 'layout/layoutSlice';
import { Dropdown } from 'react-bootstrap';

const MENU_NAME = 'NavUserMenu';

const NavUserMenu = () => {

  const { user } = useAuth0();
  const Authenticated = useAuth0().isAuthenticated;
  const { showingNavMenu } = useSelector((state) => state.layout);

  const dispatch = useDispatch();

    const NavUser = React.memo(
      React.forwardRef(({ onClick, expanded = false}, ref) => (
      <a
        href= '/#'
        ref={ref}
        className="d-flex user position-relative"      
      >
        <img className="profile" alt={user.name} src={user.picture} />
        <div className="name">{user.name}</div>
      </a>
    ))
    );

  const onToggle = (status, event) => {
    if (event && event.stopPropagation) event.stopPropagation();
    else if (event && event.originalEvent && event.originalEvent.stopPropagation) event.originalEvent.stopPropagation();
      dispatch(layoutShowingNavMenu(status ? MENU_NAME : ''));
  };

  return (
    <>
      {Authenticated && 
        <Dropdown as="div" bsPrefix="user-container d-flex" onToggle={onToggle} show={showingNavMenu === MENU_NAME} drop="down">
          <Dropdown.Toggle as={NavUser} />
        </Dropdown>
        }
      {!Authenticated && <></>}    
    </>      
  );

};
// export default React.memo(NavUserMenu);
export default NavUserMenu;
