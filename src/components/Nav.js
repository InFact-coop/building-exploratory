import React from 'react';

const Nav = () => {
  return (
    <nav className="float w-100 h3 flex justify-between items-center bb b--primary bw1">
      <div className="flex items-center">
      <div className="h3 w3 bg-primary">
        Logo
      </div>
        <h1 className="f2 ma0 pl3 primary fw8"> Islington Local List </h1>
      </div>

      <h3 className="f4 ma0 pr3 primary"> About </h3>
    </nav>
  );
}

export default Nav;
