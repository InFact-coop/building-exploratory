import React from 'react';
import NavHome from './svg/NavHome';

const Nav = ({ handleIsAboutPage, isAbout }) => {
  return (
    <nav className="float w-100 h3 flex justify-between items-center bb b--primary bw1">
      <div className="flex items-center">
        <div className="h3 w3 bg-primary flex justify-center items-center">
          <NavHome />
      </div>
        <p className="f2-l f4 pt1 ma0 pl2 primary fw8"> Islington Local List </p>
      </div>

      <p
        className="ma0 primary pointer pt1 pl1 pr3" onClick = { () => { handleIsAboutPage()} }
        > { isAbout ? 'Home' : 'About' } </p>
    </nav>
  );
}

export default Nav;
